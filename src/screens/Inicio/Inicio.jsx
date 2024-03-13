import "./Inicio.css";
import Titulo from "../../components/Titulo/Titulo";
import BuscaGatos from "../../components/BuscaGatos/BuscaGatos";
import servicos from 'json/db.json';
import CardServicos from "../../components/CardServicos/CardServicos";

function Home() {
  return (
    <>
      <Titulo>
      <h1>
        <span>Teste para estagiários de DEV</span>
        Sistema de busca de fotos de gatos
      </h1>
      </Titulo>
      <BuscaGatos />
      <section id="servicos">
        <h2>Conheça nossos serviços</h2>
        <div className="container">
        {servicos.map((servico) => {
          return <CardServicos {...servico} key={servico.id} />
        })}
        </div>
      </section>
    </>
  );
}

export default Home;

