import React from "react";
import styles from "./CardServicos.css";

function CardServicos({ id, icone, titulo, descricao, link }) {
  return (
    <div id="cards">
      <div className={styles.container}>
        <a href="#">
        <img src={icone} alt={titulo} className={styles.icone} />
        <h3>{titulo}</h3>
        <div>{descricao}</div>
        <span href={link}>Saiba mais</span>
        </a>
      </div>
      </div>
  );
}

export default CardServicos;
