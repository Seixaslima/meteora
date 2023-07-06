import { useDispositivoContext } from "Context/Dispositivo";
import styles from "./Card.module.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Card({ imagem }) {
  const { dispositivo } = useDispositivoContext();
  return (
    <div className={styles.card}>
      <Link to={`/categoria/${imagem.categoria}`} className={styles.link}>
        <img
          className={styles.imagem}
          src={`/assets/${dispositivo}/Categoria/Categoria ${imagem.img}.png`}
          alt={imagem.alt}
        />
        <h5 className={styles.titulo}>{imagem.titulo}</h5>
      </Link>
    </div>
  );
}
