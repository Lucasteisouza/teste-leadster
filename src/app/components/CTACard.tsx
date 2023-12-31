import React from 'react';
import Image from 'next/image';
import graph from '../../assets/comparativo_img_CTA.png';
import Link from 'next/link';
import seloRD from '../../assets/selo_RD.png';
import noCard from '../../assets/no-card-dark.webp';
import rating from '../../assets/rating.webp';
import styles from '../styles/CTACard.module.css';

export default function CTACard() {
  return (
    <section className={styles.CTAContainer}>
      <Image src={ graph } alt= 'Gráfico de comparação'></Image>
      <div>
        <h1>Pronto para triplicar sua <br/>
        <strong>Geração de Leads?</strong></h1>
        <p>Criação e ativação em <strong>4</strong> minutos</p>
        <hr />
        <div className={styles.badges}>
          <Link className = {styles.demo} href={'/demo'}> VER DEMONSTRAÇÃO</Link>
          <Image src={ seloRD } alt= 'Selo RD Station de Apps mais usados'></Image>
        </div>
        <div className={styles.score}>
          <Image src={ noCard } alt= 'Imagem de cartão de crédito riscado'></Image>
          <p> <strong>Não</strong> é necessário Cartão de Crédito </p>
          <Image src={ rating } alt= 'Imagem de 4.9 estrelas'></Image>
          <p><strong>4.9</strong>/5 média de satisfação </p>
        </div>
      </div>
    </section>
  )
}

