import React from 'react';
import { iPost } from './Biblioteca';
import Image from 'next/image';
import thumb from '../../assets/thumbnail.png';

interface iProspsPost {
  post: iPost;
}

export default function Card(props: iProspsPost) {
  return (
    <div>
      <Image src={thumb} alt='Imagem do professor e título da aula'/>
      <h3>{props.post.title}</h3>
    </div>
  )
}
