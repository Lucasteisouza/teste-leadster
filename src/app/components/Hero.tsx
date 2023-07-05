import React from 'react'
import Image from 'next/image'
import detail from '../../assets/asset-header.png'
import styles from '../styles/Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h5 className={styles.webinar}>WEBINARS EXCLUSIVOS</h5>
      <h2 className={styles.conversinha}>Menos Conversinha,</h2>
      <div>
        <h1 className={styles.conversao}>Mais Conversão</h1> 
        <Image className ={styles.detail} src = { detail } alt='text detail'></Image>
      </div>
      <hr className={styles.hr}/>
      <p className={styles.p}>Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</p>
    </section>
  )
}
