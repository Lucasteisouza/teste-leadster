'use client';
import React from 'react';
import { iPost } from './Biblioteca';
import Image from 'next/image';
import thumb from '../../assets/thumbnail.png';
import videoThumb from '../../assets/25481.png';
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
      <div className={styles.modalContainer}>
        <Modal className={styles.modal}
          isOpen = { isModalOpen }
          onRequestClose={ handleCloseModal }
          contentLabel= { props.post.title }
        >
          <h2><span>Webinar:</span> { props.post.title }</h2>
          {/* <video title={props.post.title} preload='metadata'>
            <source src={props.post.video} type='video/mp4' />
          </video> -->> aqui utilizario o video advindo do JSON */}
          <Image src={videoThumb} alt='placeholder'/> {/* //Image by starline on Freepik */}
          <div>
            <h3>Descrição</h3>
            <hr />
            {/* <p>{props.post.description}</p> -->> e aqui a descrição do video */}
            <p>Lorem ipsum</p>
            <hr />
          </div>
        </Modal>
      </div>
      <Image src={ thumb } alt='Imagem do professor e título da aula'/>
      <h4 onClick={() => handleOpenModal() } className='card-title'>{ props.post.title }</h4>
    </div>
  )
}
