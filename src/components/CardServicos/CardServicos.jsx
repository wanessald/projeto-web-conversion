import React from "react";
import styles from "./CardServicos.css";

function CardServicos({ id, icone, titulo, descricao, link }) {
  return (
    <div id="cards">
      <div className={styles.container}>
        <article className="card-servicos">
        <img src={icone} alt={titulo} className={styles.icone} />
        <h3>{titulo}</h3>
        <div>{descricao}</div>
        <a href={link}>Saiba mais</a>
        </article>
      </div>
      </div>
  );
}

export default CardServicos;
