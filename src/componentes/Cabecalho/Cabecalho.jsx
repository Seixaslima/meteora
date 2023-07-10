import styles from "./Cabecalho.module.css";
import logo from "./Logo desktop.png";

import React, { useState } from "react";
import MenuSanduiche from "componentes/MenuSanduiche/MenuSanduiche";
import ListaMenu from "componentes/ListaMenu/ListaMenu";
import { Link, useNavigate } from "react-router-dom";

export default function Cabecalho() {
  const [busca, setBusca] = useState("");
  const navigator = useNavigate();

  return (
    <nav className={styles.cabecalho}>
      <div className={styles.menu}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="Logo da loja" />
        </Link>
        <ul className={styles.links}>
          <ListaMenu />
        </ul>
      </div>
      <div className={styles.pesquisa}>
        <form
          className={styles.formulario}
          onSubmit={evento => {
            evento.preventDefault();
            navigator(`/busca/${busca}`);
            setBusca("");
          }}
        >
          <input
            className={styles.campoPesquisa}
            value={busca}
            onChange={evento => setBusca(evento.target.value)}
            placeholder="Digite o produto"
          />
          <button type="submit" className={styles.botaoPesquisa}>
            Buscar
          </button>
        </form>
      </div>
      <div className={styles.menuSanduiche}>
        <MenuSanduiche />
      </div>
    </nav>
  );
}
