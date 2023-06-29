import { Modal } from 'react-bootstrap';
import styles from './ModalPadrao.module.css';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import React from 'react';

export default function ModalPadrao({
  show,
  fecharModal,
  tituloModal,
  children
}) {
  return (
    <Modal
      show={show}
      onHide={fecharModal}
      contentClassName={styles.conteudo}
      size="lg"
    >
      <Modal.Header
        closeButton
        bsPrefix={`modal-header ${styles.cabecalho}`}
        closeVariant="white"
      >
        <div className={styles.checkIcon}>
          <AiOutlineCheckCircle color="#DAFF01" size="32px" />
        </div>
        <div className={styles.tituloCabecalho}>{tituloModal}</div>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
