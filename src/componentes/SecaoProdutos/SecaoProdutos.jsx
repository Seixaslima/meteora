import CardProduto from "componentes/CardProduto/CardProduto";
import styles from "./SecaoProdutos.module.css";

import React, { useEffect, useState } from "react";

export default function SecaoProdutos() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Seixaslima/meteora-db/produtos")
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados));
  }, []);
  return (
    <div className={styles.secaoProdutos}>
      <h3 className={styles.titulo}>Produtos que estão bombando!</h3>
      <div className={styles.cards}>
        {produtos.map(produto => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}
