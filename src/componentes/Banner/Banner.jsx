import styles from './Banner.module.css';
import { BiSolidRightArrow, BiSolidLeftArrow } from 'react-icons/bi';

import React from 'react';

export default function Banner({ dispositivo }) {
  return (
    <div className={styles.banner}>
      <div className={styles.imagem}>
        <img
          src={`/assets/${dispositivo}/Banner/carousel_1.png`}
          alt="Imagem do banner"
        />
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
    </div>
  );
}
