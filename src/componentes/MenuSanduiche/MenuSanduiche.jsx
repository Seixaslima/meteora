import { Link } from 'react-router-dom';
import styles from './MenuSanduiche.module.css';

import abrirMenu from './abrir-menu.png';
import fecharMenu from './fechar-menu.png';

import React, { useState } from 'react';

export default function MenuSanduiche() {
  const [aberto, setAberto] = useState(true);
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
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">Nossas lojas</Link>
          </li>
          <li>
            <Link to="">Novidades</Link>
          </li>
          <li>
            <Link to="">Promoções</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
