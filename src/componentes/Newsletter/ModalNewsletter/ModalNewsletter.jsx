import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './ModalNewsletter.module.css';
import React from 'react';

export default function ModalNewsletter() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <p className={styles.mensagem}>
            Em breve você receberá novidades exclusivas da Meteora.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
