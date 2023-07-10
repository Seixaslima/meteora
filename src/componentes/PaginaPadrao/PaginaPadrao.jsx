import { Outlet } from "react-router-dom";
// import styles from './PaginaPadrao.module.css';

import Cabecalho from "componentes/Cabecalho/Cabecalho";
import Rodape from "componentes/Rodape/Rodape";
import { DispositivoProvider } from "Context/Dispositivo";
import { ProdutosProvider } from "Context/Produtos";

export default function PaginaPadrao({ children }) {
  return (
    <>
      <Cabecalho />
      <main>
        <DispositivoProvider>
          <ProdutosProvider>
            <Outlet />
            {children}
          </ProdutosProvider>
        </DispositivoProvider>
      </main>
      <Rodape />
    </>
  );
}
