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
    </>
  );
}
