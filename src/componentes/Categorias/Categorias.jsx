import Card from "componentes/Categorias/Card/Card";
import styles from "./Categorias.module.css";

import React, { useEffect, useState } from "react";

export default function Categorias({
  titulo = "Busque por categoria:",
  filtro
}) {
  const [categorias, setCategorias] = useState([]);
  const site = filtro
    ? `https://my-json-server.typicode.com/Seixaslima/meteora-db/categorias?categoria_ne=${filtro}`
    : "https://my-json-server.typicode.com/Seixaslima/meteora-db/categorias";

  useEffect(() => {
    fetch(site)
      .then(resposta => resposta.json())
      .then(dados => setCategorias(dados));
  }, [site]);

  return (
    <div className={styles.categorias}>
      <h3 className={styles.titulo}>{titulo}</h3>
      <div className={styles.cards}>
        {categorias.map(categoria => (
          <Card key={categoria.id} imagem={categoria} />
        ))}
      </div>
    </div>
  );
}
