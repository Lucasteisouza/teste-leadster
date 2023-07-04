import Image from 'next/image';
import logo from 'src/assets/logo.png';
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="logo">
          <Image src={logo} alt="Logo" />
        </div>
      </div>

    </header>
  )
}