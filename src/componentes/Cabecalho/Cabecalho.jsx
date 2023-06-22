import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import logo from './Logo desktop.png';

import React from 'react';
import MenuSanduiche from 'componentes/MenuSanduiche/MenuSanduiche';

export default function Cabecalho() {
  return (
    <nav className={styles.cabecalho}>
      <div className={styles.menu}>
        <img className={styles.logo} src={logo} alt="Logo da loja" />
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
      <div className={styles.pesquisa}>
        <input
          className={styles.campoPesquisa}
          placeholder="Digite o produto"
        />
        <button className={styles.botaoPesquisa}>Buscar</button>
      </div>
      <div className={styles.menuSanduiche}>
        <MenuSanduiche />
      </div>
    </nav>
  );
}
