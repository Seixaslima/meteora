import ModalPadrao from 'componentes/ModalPadrao/ModalPadrao';
import styles from './Newsletter.module.css';

import React, { useState } from 'react';
import ModalNewsletter from './ModalNewsletter/ModalNewsletter';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={styles.newsletter}>
        <form
          onSubmit={event => {
            event.preventDefault();
            setShow(true);
            setEmail('');
          }}
        >
          <label className={styles.texto}>
            Quer receber nossas novidades, promoções exclusivas e 10% OFF na
            primeira compra? <span>Cadastre-se!</span>
          </label>
          <div className={styles.campos}>
            <input
              type="email"
              placeholder="Digite seu email"
              className={styles.campoEmail}
              required
              value={email}
              onChange={evento => setEmail(evento.target.value)}
            />
            <button type="submit" className={styles.botaoEnviar}>
              Enviar
            </button>
          </div>
        </form>
      </div>
      <ModalPadrao
        tituloModal="E-mail cadastrado com sucesso!"
        show={show}
        fecharModal={() => setShow(false)}
      >
        <ModalNewsletter />
      </ModalPadrao>
    </>
  );
}
