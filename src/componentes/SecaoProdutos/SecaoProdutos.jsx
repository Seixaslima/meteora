import CardProduto from "componentes/CardProduto/CardProduto";
import styles from "./SecaoProdutos.module.css";

import React, { useEffect } from "react";
import { useProdutosContext } from "Context/Produtos";

export default function SecaoProdutos({
  titulo = "Produtos que estão bombando!",
  itemFiltrado,
  tipoFiltro
}) {
  const { produtos, filtro } = useProdutosContext();

  useEffect(() => {
    filtro(tipoFiltro, itemFiltrado);
  }, [filtro, tipoFiltro, itemFiltrado]);

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
