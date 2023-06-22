import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import logo from './Logo desktop.png';

import React from 'react';

export default function Cabecalho() {
  return (
    <nav className={styles.cabecalho}>
      <ul className={styles.links}>
        <li className={styles.logo}>
          <Link to="">
            <img src={logo} alt="Logo da loja" />
          </Link>
        </li>
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
      <div className={styles.pesquisa}>
        <input
          className={styles.campoPesquisa}
          placeholder="Digite o produto"
        />
        <button className={styles.botaoPesquisa}>Buscar</button>
      </div>
    </nav>
  );
}
