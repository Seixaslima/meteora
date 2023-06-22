import { Outlet } from 'react-router-dom';
// import styles from './PaginaPadrao.module.css';

import React, { Children } from 'react';
import Cabecalho from 'componentes/Cabecalho/Cabecalho';

export default function PaginaPadrao({ children }) {
  return (
    <main>
      <Cabecalho />

      <Outlet />
      {children}
    </main>
  );
}
