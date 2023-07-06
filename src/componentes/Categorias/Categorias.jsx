import Card from "componentes/Categorias/Card/Card";
import styles from "./Categorias.module.css";
import categorias from "json/categorias.json";

import React from "react";

export default function Categorias() {
  return (
    <div className={styles.categorias}>
      <h3 className={styles.titulo}>Busque por categoria:</h3>
      <div className={styles.cards}>
        {categorias.map(categoria => (
          <Card key={categoria.id} imagem={categoria} />
        ))}
      </div>
    </div>
  );
}
