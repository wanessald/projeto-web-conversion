import { useState, useEffect } from "react";
import axios from "axios";
import "./BuscaGatos.css";
import Galeria from "../Galeria/Galeria";


function BuscaGatos() {
  const [query, setQuery] = useState('');
  const [breeds, setBreeds] = useState([]);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [breedsMap, setBreedsMap] = useState({});

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const apiKey = "live_N85oxs526Ku6srX1EtzX7s6BEhyx33qLXpEY2Bi0MUq5vA1XvMvr6IKClCy0J7KY";
        const response = await axios.get(
          `https://api.thecatapi.com/v1/breeds`,
        {
          headers: {
          "x-api-key": apiKey,
          },
        }
  );
  const data = response.data;
  setBreeds(data);

  const breedsObject = {};
        data.forEach((breed) => {
          breedsObject[breed.name.toLowerCase()] = breed.id;
        });
        setBreedsMap(breedsObject);
      } catch (error) {
        console.error('Erro ao obter raças de gatos:', error);
        setError('Erro ao carregar raça. Tente novamente mais tarde.');
      }
    };

    fetchBreeds();
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      if (!breedsMap.hasOwnProperty(query.toLowerCase())) {
        setError('Raça não encontrada. Por favor, insira um nome válido.');
        return;
      }

      const breedId = breedsMap[query.toLowerCase()];
      const apiKey =
        'live_N85oxs526Ku6srX1EtzX7s6BEhyx33qLXpEY2Bi0MUq5vA1XvMvr6IKClCy0J7KY';

      const response = await axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=2&has_breeds=2&breed_ids=${breedId}&breed_names=${query}`,
        {
          headers: {
            'x-api-key': apiKey,
          },
        }
      );

      setImages(response.data);
      setError(null);
    } catch (error) {
      console.error('Erro ao buscar imagens:', error);
      setError('Erro ao buscar imagens. Tente novamente mais tarde.');
    }
}
  return (
    <section id="formulario">
      <div className="formulario_container">
          <form onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Digite o nome da raça"
              value={query}
              onChange={handleInputChange}
            />
            <div className="btn-pesquisar">
            <input type="submit" value="Pesquisar"/>
            </div>
          </form>
        <div className="error-mensagem">
          {error ? (
            <p className="error-msg">{error}</p>
          ) : (
          <div className="galeria-container">
            {images.slice(0, 2).map((image, index) => (
              <Galeria key={index} image={image.url} breedName={query} />
            ))}
          </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BuscaGatos;
