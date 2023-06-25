import styles from './Facilidades.module.css';
import pix from './x-diamond.png';
import troca from './arrow-repeat.png';
import sustentabilidade from './flower1.png';
import React from 'react';

export default function Facilidades() {
  return (
    <div className={styles.facilidades}>
      <h3 className={styles.titulo}>Conheça todas as nossas facilidades</h3>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={pix} alt="" />
          <div className={styles.info}>
            <h5>pague pelo pix</h5>
            <p>Ganhe 5% OFF em pagamentos via PIX</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={troca} alt="" />
          <div className={styles.info}>
            <h5>troca grátis</h5>
            <p>Fique livre para trocar em até 30 dias.</p>
          </div>
        </div>
        <div className={styles.card}>
          <img src={sustentabilidade} alt="" />
          <div className={styles.info}>
            <h5>sustentabilidade</h5>
            <p>Moda responsável, que respeita o meio ambiente.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
