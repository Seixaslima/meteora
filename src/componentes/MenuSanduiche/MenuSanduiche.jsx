import styles from './MenuSanduiche.module.css';

import abrirMenu from './abrir-menu.png';
import fecharMenu from './fechar-menu.png';

import React, { useState } from 'react';
import ListaMenu from 'componentes/ListaMenu/ListaMenu';

export default function MenuSanduiche() {
  const [aberto, setAberto] = useState(false);
  function mudarMenu() {
    setAberto(!aberto);
  }

  return (
    <div
      className={`${styles.menu} ${
        aberto ? styles.menuAberto : styles.menuFechado
      }`}
    >
      <img
        className={styles.menuIcone}
        src={aberto ? fecharMenu : abrirMenu}
        alt={`Icone menu ${aberto ? 'aberto' : 'fechado'}`}
        onClick={mudarMenu}
      />
      <div className="links">
        <ul className={styles.links}>
          <ListaMenu />
        </ul>
      </div>
    </div>
  );
}
