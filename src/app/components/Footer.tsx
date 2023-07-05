import Image from 'next/image';
import React from 'react';
import logo from 'src/assets/logo.png';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        < Image src={ logo } alt= 'Logo'/>
        <p>Transformando visitantes em clientes</p>
      </div>
      <div>
        <p>Copyrigth © 2015 - 2022 Todos os direitos reservados | Leadster.</p>
        <p>Rua José Loureito, 464 - Centro - Curitiba PR - CEP: 80010-000 | <a>Termos de uso</a></p>
      </div>

    </footer>
  )
}
