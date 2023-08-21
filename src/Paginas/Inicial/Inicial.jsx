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
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1129823157320382"
        crossorigin="anonymous"
      ></script>
      {/* <!-- Display --> */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1129823157320382"
        data-ad-slot="2444726825"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </>
  );
}
