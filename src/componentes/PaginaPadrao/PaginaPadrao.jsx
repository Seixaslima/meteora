import { Outlet } from 'react-router-dom';
// import styles from './PaginaPadrao.module.css';

import Cabecalho from 'componentes/Cabecalho/Cabecalho';

export default function PaginaPadrao({ children }) {
  return (
    <>
      <Cabecalho />
      <main>
        <Outlet />
        {children}
      </main>
    </>
  );
}
