'use client';
import React, { useEffect } from 'react';
import Card from './Card';
import styles from '../styles/Biblioteca.module.css'

export interface iPost  {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function fecthVideoData(): Promise<iPost[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6') //usando unm placeholder devido a falta de um endpoint real
  const posts: iPost[] = await res.json();
  return posts ;
};

interface iInputState {
  agencias: boolean;
  chatbot: boolean;
  marketingDigital: boolean;
  geracaoDeLeads: boolean;
  midiaPaga: boolean;
  orderBy: string;
}

export default function Biblioteca() {
  const [posts, setPosts] = React.useState<iPost[]>([]);
  const [filteredPosts, setFilteredPosts] = React.useState<iPost[]>([]);
  const [inputState, setInputState] = React.useState<iInputState>({
    agencias: false,
    chatbot: false,
    marketingDigital: false,
    geracaoDeLeads: false,
    midiaPaga: false,
    orderBy: 'Data de publicação',
  });

  useEffect(() => {
    fecthVideoData().then((posts) => {
      setPosts(posts);
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name } = e.target;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setInputState({
      ...inputState,
      [name]: value,
    });
    filterPosts();
  }

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name } = e.target;
    const value = e.target.value;
    setInputState({
      ...inputState,
      [name]: value,
    });
    orderPosts();
  }

  const orderPosts = (): void => {
    // const orderedPosts = posts.sort((a, b) => {
    //   if (inputState.Orderby === 'Data de publicação') {
    //     return a.publishDate - b.publishDate;
    //   }
    //   if (inputState.Orderby === 'Nota') {
    //     return a.score - b.score;
    //   }
    //   if (inputState.Orderby === 'Alfabética') {
    //     return a.title.localeCompare(b.title);
    //   }
    //   return 0;
    // });
    // setFilteredPosts(orderedPosts);
  };//função para ordenar os posts de acordo com o input do usuário - não implementada devido a ausencia do JSON real mas comentada para demonstrar a lógica

  const filterPosts = (): void => {
    const filteredPosts = posts.filter((post) => {
      if (inputState.agencias && post.title.includes('Agências')) {
        return true;
      }
      if (inputState.chatbot && post.title.includes('Chatbot')) {
        return true;
      }
      if (inputState.marketingDigital && post.title.includes('Marketing Digital')) {
        return true;
      }
      if (inputState.geracaoDeLeads && post.title.includes('Geração de Leads')) {
        return true;
      }
      if (inputState.midiaPaga && post.title.includes('Mídia Paga')) {
        return true;
      }
      return false;
    });
    setFilteredPosts(filteredPosts);
  }; //filtro realizado usando a presença de palavras chaves no título do post - não é case ideal, mas na falta de um endpoint real, serve como exemplo

  return (
    <section className={styles.biblioteca}>
      <form className={styles.filterContainer}>
        <div className={styles.filterElement}>
          <input type='checkbox' name='agencias' id='agencias' onChange={handleChange} />
          <label htmlFor="agencias">Agências</label>
        </div>
        <div className={styles.filterElement}>
          <input type='checkbox' name='chatbot' id='chatbot' onChange={handleChange}/>
          <label htmlFor="chatbot">Chatbot</label>
        </div>
        <div className={styles.filterElement}>
          <input type='checkbox' name='marketingDigital' id='marketingDigital' onChange={handleChange}/>
          <label htmlFor="marketingDigital">Marketing Digital</label>
        </div>
        <div className={styles.filterElement}>
          <input type='checkbox' name='geracaoDeLeads' id='geracaoDeLeads' onChange={handleChange}/>
          <label htmlFor="geracaoDeLeads">Geração de Leads</label>
        </div>
        <div className={styles.filterElement}>
          <input type='checkbox' name='midiaPaga' id='midiaPaga' onChange={handleChange}/>
          <label htmlFor="midiaPaga">Mídia Paga</label>
        </div>
        <div className={styles.orderBy}>
          <label htmlFor="orderBy">
            Ordenar por:
            <select name="orderBy" id="orderBy" onChange={handleChangeSelect}>
              <option value="Data de publicação">Data de publicação</option>
              <option value="Nota">Nota</option>
              <option value="Alfabética">Alfabética</option>
            </select>
          </label>
        </div>
        </form>
        <div className={styles.cardContainer}>
          {filteredPosts.length > 0 
            ? filteredPosts.map((post) => <Card key={ post.id } post={ post }/>)
            : posts.map((post) => <Card key={ post.id } post={ post }/>)
          }
        </div>
      </section>
  )
}

