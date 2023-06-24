import styles from './Card.module.css';
import React from 'react';

export default function Card({ imagem, dispositivo }) {
  return (
    <div className={styles.card}>
      <img
        className={styles.imagem}
        src={`/assets/${dispositivo}/Categoria/Categoria ${imagem.img}.png`}
        alt={imagem.alt}
      />
      <h5 className={styles.titulo}>{imagem.titulo}</h5>
    </div>
  );
}
