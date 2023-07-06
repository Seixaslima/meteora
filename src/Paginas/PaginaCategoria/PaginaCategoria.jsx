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
        filtro={parametros.categoria}
        tipoFiltro="categoria"
      />
    </>
  );
}
