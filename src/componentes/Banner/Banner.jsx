import styles from './Banner.module.css';
import { BiSolidRightArrow, BiSolidLeftArrow } from 'react-icons/bi';

import React, { useState } from 'react';

export default function Banner() {
  function tipoDispositivo() {
    const largura = window.innerWidth;
    let resultado = 'Desktop';
    largura < 376
      ? (resultado = 'Mobile')
      : largura < 769
      ? (resultado = 'Tablet')
      : (resultado = 'Desktop');

    return resultado;
  }
  const [dispositivo, setDispositivo] = useState(tipoDispositivo());
  window.addEventListener('resize', () => setDispositivo(tipoDispositivo()));

  return (
    <div className={styles.banner}>
      <div className={styles.imagem}>
        <img src={`./assets/imgBanner/${dispositivo}/carousel_1.png`} alt="" />
      </div>

      <div className={styles.voltar}>
        <BiSolidLeftArrow color="#FFF" />
      </div>
      <div className={styles.avancar}>
        <BiSolidRightArrow color="#FFF" />
      </div>
      <div className={styles.posicao}>
        <div className={styles.linha} />
        <div className={styles.linha} />
        <div className={styles.linha} />
      </div>
      <p>{dispositivo}</p>
    </div>
  );
}
