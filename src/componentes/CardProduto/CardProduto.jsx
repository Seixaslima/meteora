import { Link } from 'react-router-dom';
import styles from './CardProduto.module.css';

import React from 'react';

export default function CardProduto({ produto, dispositivo }) {
  return (
    <div className={styles.card}>
      <div className={styles.imagem}>
        <img
          src={`./assets/${dispositivo}/Produtos/${produto.img}.png`}
          alt=""
        />
      </div>
      <div className={styles.info}>
        <h5 className={styles.nome}>{produto.produto}</h5>
        <p className={styles.descricao}>{produto.descricao}</p>
        <div className={styles.valor}>R$ {produto.valor},00</div>
        <div className={styles.botao}>
          <Link to="/">Ver mais</Link>
        </div>
      </div>
    </div>
  );
}
