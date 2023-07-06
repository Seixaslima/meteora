import Banner from "componentes/Banner/Banner";
import Categorias from "componentes/Categorias/Categorias";
import Facilidades from "componentes/Facilidades/Facilidades";
import Newsletter from "componentes/Newsletter/Newsletter";
import SecaoProdutos from "componentes/SecaoProdutos/SecaoProdutos";
// import styles from './Inicial.module.css';

import React from "react";

export default function Inicial() {
  return (
    <>
      <Banner />
      <Categorias />
      <SecaoProdutos />
      <Facilidades />
      <Newsletter />
    </>
  );
}
