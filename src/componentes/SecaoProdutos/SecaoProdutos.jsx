import CardProduto from "componentes/CardProduto/CardProduto";
import styles from "./SecaoProdutos.module.css";

import React, { useEffect, useState } from "react";

export default function SecaoProdutos({
  titulo = "Produtos que estão bombando!",
  filtro,
  tipoFiltro
}) {
  const [produtos, setProdutos] = useState([]);
  let site =
    "https://my-json-server.typicode.com/Seixaslima/meteora-db/produtos";

  if (filtro) {
    site = `https://my-json-server.typicode.com/Seixaslima/meteora-db/produtos?${tipoFiltro}=${filtro}`;
  }

  console.log(site);

  useEffect(() => {
    fetch(site)
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados));
  }, [site]);
  return (
    <div className={styles.secaoProdutos}>
      <h3 className={styles.titulo}> {titulo}</h3>
      <div className={styles.cards}>
        {produtos.map(produto => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}
