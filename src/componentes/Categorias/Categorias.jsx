import Card from "componentes/Categorias/Card/Card";
import styles from "./Categorias.module.css";

import React, { useEffect, useState } from "react";

export default function Categorias() {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Seixaslima/meteora-db/categorias"
    )
      .then(resposta => resposta.json())
      .then(dados => setCategorias(dados));
  });

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
