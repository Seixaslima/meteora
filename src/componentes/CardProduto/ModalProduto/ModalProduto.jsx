import styles from "./ModalProduto.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import React from "react";
import { useDispositivoContext } from "Context/Dispositivo";

export default function ModalProduto({ produto }) {
  const { dispositivo } = useDispositivoContext();
  return (
    <Container bsPrefix={`container ${styles.container}`}>
      <Row>
        <Col sm={6} xs={12}>
          <Image
            src={`./assets/${dispositivo}/Produtos/${produto.img}.png`}
            alt=""
            fluid
          />
        </Col>
        <Col sm={6} xs={12}>
          <div className={styles.info}>
            <div className={styles.cabecalho}>
              <h5>{produto.produto}</h5>
              <p>{produto.descricao}</p>
            </div>
            <div className={styles.precoContainer}>
              <div className={styles.preco}>R$ {produto.valor}.00</div>
              <p>Vendido e entregue por Riachuelo</p>
            </div>
            <form onSubmit={evento => evento.preventDefault()}>
              <fieldset className={styles.coresContainer}>
                <legend className={styles.caracteristicas}>Cores:</legend>
                <div className={styles.botoesSelecao}>
                  <div className={styles.botaoSelecao}>
                    <input
                      type="radio"
                      name="cor"
                      id="AzulClaro"
                      value="Azul claro"
                      style={{ backgroundColor: "#75D7F0" }}
                    />
                    <label htmlFor="AzulClaro">Azul claro</label>
                  </div>
                  <div className={styles.botaoSelecao}>
                    <input
                      type="radio"
                      name="cor"
                      id="Preto"
                      value="Preto"
                      style={{ backgroundColor: "black" }}
                    />
                    <label htmlFor="Preto">Preto</label>
                  </div>
                  <div className={styles.botaoSelecao}>
                    <input
                      type="radio"
                      name="cor"
                      id="Offwhite"
                      value="Offwhite"
                      style={{ backgroundColor: "#F3F6F7" }}
                    />
                    <label htmlFor="AzulClaro">Offwhite</label>
                  </div>
                </div>
              </fieldset>
              <fieldset className={styles.tamanhoContainer}>
                <legend className={styles.caracteristicas}>Tamanhos:</legend>
                <div className={styles.botoesSelecao}>
                  <div className={styles.botaoSelecao}>
                    <input type="radio" name="Tamanho" id="PP" value="PP" />
                    <label htmlFor="PP">PP</label>
                  </div>
                  <div className={styles.botaoSelecao}>
                    <input type="radio" name="Tamanho" id="P" value="P" />
                    <label htmlFor="P">P</label>
                  </div>
                  <div className={styles.botaoSelecao}>
                    <input type="radio" name="Tamanho" id="M" value="M" />
                    <label htmlFor="M">M</label>
                  </div>
                  <div className={styles.botaoSelecao}>
                    <input type="radio" name="Tamanho" id="G" value="G" />
                    <label htmlFor="G">G</label>
                  </div>
                  <div className={styles.botaoSelecao}>
                    <input type="radio" name="Tamanho" id="GG" value="GG" />
                    <label htmlFor="GG">GG</label>
                  </div>
                </div>
              </fieldset>
              <button className={styles.botaoSubmit} type="submit">
                Adicionar à sacola
              </button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
