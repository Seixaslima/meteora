import CardProduto from 'componentes/CardProduto/CardProduto';
import styles from './SecaoProdutos.module.css';
import produtos from 'json/produtos.json';

import React from 'react';

export default function SecaoProdutos({ dispositivo }) {
  return (
    <div className={styles.secaoProdutos}>
      <h3 className={styles.titulo}>Produtos que estão bombando!</h3>
      <div className={styles.cards}>
        {produtos.map(produto => (
          <CardProduto
            key={produto.id}
            dispositivo={dispositivo}
            produto={produto}
          />
        ))}
      </div>
    </div>
  );
}
