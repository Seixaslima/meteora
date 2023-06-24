import Banner from 'componentes/Banner/Banner';
import Categorias from 'componentes/Categorias/Categorias';
// import styles from './Inicial.module.css';

import React, { useState } from 'react';

export default function Inicial() {
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
    <>
      <Banner dispositivo={dispositivo} />
      <Categorias dispositivo={dispositivo} />
    </>
  );
}
