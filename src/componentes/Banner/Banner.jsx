import styles from './Banner.module.css';
import { BiSolidRightArrow, BiSolidLeftArrow } from 'react-icons/bi';

import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Banner({ dispositivo }) {
  const [index, setIndex] = useState(0);

  function handleSelect(selectedIndex) {
    setIndex(selectedIndex);
  }

  function mudarImagem(direcao) {
    let novoIndex = (index + direcao + 3) % 3;
    setIndex(novoIndex);
  }

  return (
    <div className={styles.banner}>
      <div className={styles.imagem}>
        <Carousel
          controls={false}
          activeIndex={index}
          onSelect={handleSelect}
          touch
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`/assets/${dispositivo}/Banner/carousel_1.png`}
              alt="Imagem do banner"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`/assets/${dispositivo}/Banner/carousel_2.png`}
              alt="Imagem do banner"
            />
            <Carousel.Caption bsPrefix={`${styles.texto} ${styles.texto2}`}>
              <h3>COLEÇÃO ATEMPORAL</h3>
              <p>Estilo e qualidade para durar. </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`/assets/${dispositivo}/Banner/carousel_3.png`}
              alt="Imagem do banner"
            />
            <Carousel.Caption bsPrefix={`${styles.texto} ${styles.texto3}`}>
              <h3>COLEÇÃO ATEMPORAL</h3>
              <p>Estilo e qualidade para durar. </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className={styles.voltar}>
        <BiSolidLeftArrow color="#FFF" onClick={() => mudarImagem(-1)} />
      </div>
      <div className={styles.avancar}>
        <BiSolidRightArrow color="#FFF" onClick={() => mudarImagem(1)} />
      </div>
    </div>
  );
}
