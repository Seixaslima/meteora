const { createContext, useState, useContext, useEffect } = require("react");

const produtosContext = createContext();
produtosContext.displayName = "Produtos";

export function ProdutosProvider({ children }) {
  const [produtos, setProdutos] = useState([]);

  return (
    <produtosContext.Provider value={{ produtos, setProdutos }}>
      {children}
    </produtosContext.Provider>
  );
}

export function useProdutosContext() {
  const { produtos, setProdutos } = useContext(produtosContext);
  const [url, setUrl] = useState("");

  const api =
    "https://my-json-server.typicode.com/Seixaslima/meteora-db/produtos";

  useEffect(() => {
    fetch(url)
      .then(resposta => resposta.json())
      .then(dados => setProdutos(dados));
  }, [url, setProdutos]);

  function filtro(tipo, conteudo) {
    if (!tipo) return setUrl(api);
    if (tipo === "categoria") return filtrarCategoria(conteudo);
    if (tipo === "produto") return filtrarProduto(conteudo);
  }

  function filtrarCategoria(conteudo) {
    return setUrl(`${api}?categoria=${conteudo}`);
  }

  function filtrarProduto(conteudo) {
    return setUrl(`${api}?q=${conteudo}`);
  }

  return {
    produtos,
    filtro
  };
}
