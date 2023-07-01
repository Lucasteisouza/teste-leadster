import Image from 'next/image';
import logo from 'src/Assets/logo.png';

export function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Image src={logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">Sobre</a>
            </li>
            <li>
              <a href="/services">Serviços</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </nav>
      </div>

    </header>
  )
}