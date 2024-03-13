import { Link } from "react-router-dom";
import logo from "../../assets/logo-conversion.svg";
import "./Header.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import React from "react";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

const scrollToSection = (id) => {
  const element = document.getElementById(id);

  if(element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <header>
      <nav className="cabecalho_container">

          <Link to="/" className="logo_item">
            <img src={logo} alt="Logo Conversion" />
          </Link>

          <a href="#" className="menu-hamburguer" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
          </a>
          
        <div className={`cabecalho_secoes ${menuOpen ? "open" : ""}`}>
            <Link 
            to="#formulario" 
            className="cabecalho-pesquisa"  
            smooth 
            onClick={() => scrollToSection("formulario")}>
              Busca por gatos
            </Link>
            <Link 
            to="#servicos" 
            className="cabecalho-servicos" 
            smooth 
            onClick={() => scrollToSection("servicos")}>
              Conheça nossos Serviços
            </Link>
          </div>
          
          <div className={`cabecalho_btn ${menuOpen ? "open" : ""}`}>
          <a href="https://www.conversion.com.br/contato/" className="btn-agendar" target="_blank" rel="noopener noreferrer">
            Agendar Reunião
          </a>
        </div>

          {/* <div className="cabecalho_btn">
            <button className="btn-agendar" type="submit">
              Agendar Reunião
            </button>
          </div> */}

      </nav>
    </header>
  );
}

export default Header;
