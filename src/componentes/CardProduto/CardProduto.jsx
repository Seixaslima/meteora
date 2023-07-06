import { Link } from 'react-router-dom';
import styles from './CardProduto.module.css';

import React, { useState } from 'react';
import ModalPadrao from 'componentes/ModalPadrao/ModalPadrao';
import ModalProduto from './ModalProduto/ModalProduto';
import { useDispositivoContext } from 'Context/Dispositivo';

export default function CardProduto({ produto}) {
  const [show, setShow] = useState(false);
  const {dispositivo} = useDispositivoContext();

  return (
    <>
      <div className={styles.card} onClick={() => setShow(true)}>
        <div className={styles.imagem}>
          <img
            src={`./assets/${dispositivo}/Produtos/${produto.img}.png`}
            alt=""
          />
        </div>
        <div className={styles.info}>
          <h5 className={styles.nome}>{produto.produto}</h5>
          <p className={styles.descricao}>{produto.descricao}</p>
          <div className={styles.valor}>R$ {produto.valor},00</div>
          <div className={styles.botao}>
            <Link to="/">Ver mais</Link>
          </div>
        </div>
      </div>
      <ModalPadrao
        show={show}
        fecharModal={() => setShow(false)}
        tituloModal={'Confira detalhes sobre o produto'}
      >
        <ModalProduto produto={produto} />
      </ModalPadrao>
    </>
  );
}
