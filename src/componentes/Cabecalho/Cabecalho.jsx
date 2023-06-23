import styles from './Cabecalho.module.css';
import logo from './Logo desktop.png';

import React from 'react';
import MenuSanduiche from 'componentes/MenuSanduiche/MenuSanduiche';
import ListaMenu from 'componentes/ListaMenu/ListaMenu';

export default function Cabecalho() {
  return (
    <nav className={styles.cabecalho}>
      <div className={styles.menu}>
        <img className={styles.logo} src={logo} alt="Logo da loja" />
        <ul className={styles.links}>
          <ListaMenu />
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