import { Outlet } from "react-router-dom";
// import styles from './PaginaPadrao.module.css';

import Cabecalho from "componentes/Cabecalho/Cabecalho";
import Rodape from "componentes/Rodape/Rodape";
import { DispositivoProvider } from "Context/Dispositivo";

export default function PaginaPadrao({ children }) {
  return (
    <>
      <Cabecalho />
      <main>
        <DispositivoProvider>
          <Outlet />
          {children}
        </DispositivoProvider>
      </main>
      <Rodape />
    </>
  );
}
