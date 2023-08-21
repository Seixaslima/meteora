import Categorias from "componentes/Categorias/Categorias";
import SecaoProdutos from "componentes/SecaoProdutos/SecaoProdutos";
import { useParams } from "react-router-dom";

export default function PaginaBusca() {
  const parametros = useParams();
  return (
    <>
      <Categorias titulo="Busque tambêm por categoria" />
      <SecaoProdutos
        titulo={`Itens encontrados com: ${parametros.busca}`}
        itemFiltrado={parametros.busca}
        tipoFiltro="produto"
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
