import styles from './Rodape.module.css';

import React from 'react';

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <p className={styles.texto}>2023 © Desenvolvido por Alura | </p>
      <p className={styles.texto}>Projeto fictício sem fins comerciais.</p>
    </footer>
  );
}
