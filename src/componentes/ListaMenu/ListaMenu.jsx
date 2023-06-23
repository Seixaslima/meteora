import React from 'react';
import { Link } from 'react-router-dom';

export default function ListaMenu() {
  return (
    <>
      <li>
        <Link to="">Home</Link>
      </li>
      <li>
        <Link to="">Nossas lojas</Link>
      </li>
      <li>
        <Link to="">Novidades</Link>
      </li>
      <li>
        <Link to="">Promoções</Link>
      </li>
    </>
  );
}
