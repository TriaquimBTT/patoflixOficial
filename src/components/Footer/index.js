import React from 'react';
import { FooterBase } from './styles';
import Gustavo from '../../assets/img/Gustavo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={Gustavo} alt="Gustavo Triaquim" />
      </a>
      <p>
        Created by
        {' '}
        <a href="https://portfolio-ten-omega-51.vercel.app/">
          Gustavo Triaquim
        </a>
        {' '}
        with
        {' '}
        <a href="https://www.alura.com.br">
          Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
