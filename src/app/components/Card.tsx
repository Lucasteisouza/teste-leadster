'use client';
import React from 'react';
import { iPost } from './Biblioteca';
import Image from 'next/image';
import thumb from '../../assets/thumbnail.png';
import Modal from 'react-modal';
import styles from '../styles/Card.module.css';

interface iProspsPost {
  post: iPost;
}

export default function Card(props: iProspsPost) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = (): void => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <div className ={styles.card}>
      <Modal
        isOpen = { isModalOpen }
        parentSelector={ () => document.querySelector('.card')! }
        onRequestClose={ handleCloseModal }
        contentLabel= { props.post.title }
      >
        <h2>{ `Webinar: ${ props.post.title }` }</h2>
        <Image src={thumb} alt='placeholder'/>
        {/* { props.post.video } -->> aqui utilizario o video advindo do JSON */}
        <h3>Descrição</h3>
        {/* <p>{props.post.description}</p> -->> e aqui a descrição do video */}
        <p>Lorem ipsum</p>
        <button onClick={ handleCloseModal }>Fechar</button>
      </Modal>
      <Image src={ thumb } alt='Imagem do professor e título da aula'/>
      <h4 className='card-title' onClick={() => handleOpenModal() }>{ props.post.title }</h4>
    </div>
  )
}
