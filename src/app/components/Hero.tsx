import React from 'react'
import Image from 'next/image'
import detail from '../../assets/asset-header.png'

export default function Hero() {
  return (
    <div>
      <h4>WEBINARS EXCLUSIVOS</h4>
      <h2>Menos Conversinha,</h2>
      <h1>Mais Conversão</h1> <Image src = { detail } alt='text detail'></Image>
      <hr/>
      <p>Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</p>
    </div>
  )
}
