import Image from 'next/image';
import React from 'react'
import logo from 'src/assets/logo.png';

export default function Footer() {
  return (
    <footer>
      < Image src={ logo } alt= 'Logo'/>
      <p>Copyrigth © 2015 - 2022 Todos os direitos reservados | Leadster.</p>
      <p>Rua José Loureito, 464 - Centro - Curitiba PR - CEP: 80010-000 | <a>Termos de uso</a></p>
    </footer>
  )
}
