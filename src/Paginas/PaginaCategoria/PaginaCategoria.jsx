import Categorias from "componentes/Categorias/Categorias";
import SecaoProdutos from "componentes/SecaoProdutos/SecaoProdutos";
import { useParams } from "react-router-dom";

export default function PaginaCategoria() {
  const parametros = useParams();
  if (!parametros.categoria) {
    return (
      <>
        <Categorias titulo="Navegue por nossas categorias" />
        <SecaoProdutos />
      </>
    );
  }
  return (
    <>
      <Categorias
        titulo="Veja tambêm essas categorias"
        filtro={parametros.categoria}
      />
      <SecaoProdutos
        titulo="Veja esses produtos"
        itemFiltrado={parametros.categoria}
        tipoFiltro="categoria"
      />
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
