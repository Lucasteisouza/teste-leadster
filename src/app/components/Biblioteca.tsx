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
  Agências: boolean;
  Chatbot: boolean;
  MarketingDigital: boolean;
  GeraçãodeLeads: boolean;
  MídiaPaga: boolean;
  Orderby: string;
}

export default function Biblioteca() {
  const [posts, setPosts] = React.useState<iPost[]>([]);
  const [filteredPosts, setFilteredPosts] = React.useState<iPost[]>([]);
  const [inputState, setInputState] = React.useState<iInputState>({
    Agências: false,
    Chatbot: false,
    MarketingDigital: false,
    GeraçãodeLeads: false,
    MídiaPaga: false,
    Orderby: 'Data de publicação',
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
      if (inputState.Agências && post.title.includes('Agências')) {
        return true;
      }
      if (inputState.Chatbot && post.title.includes('Chatbot')) {
        return true;
      }
      if (inputState.MarketingDigital && post.title.includes('Marketing Digital')) {
        return true;
      }
      if (inputState.GeraçãodeLeads && post.title.includes('Geração de Leads')) {
        return true;
      }
      if (inputState.MídiaPaga && post.title.includes('Mídia Paga')) {
        return true;
      }
      return false;
    });
    setFilteredPosts(filteredPosts);
  }; //filtro realizado usando a presença de palavras chaves no título do post - não é case ideal, mas na falta de um endpoint real, serve como exemplo

  return (
    <section className={styles.biblioteca}>
      <form className={styles.filterContainer}>
        <label htmlFor="Agências">
          <input type='checkbox' name='Agências' id='Agências' onChange={handleChange} />
          Agências
        </label>
        <label htmlFor="Chatbot">
          <input type='checkbox' name='Chatbot' id='Chatbot' onChange={handleChange}/>
          Chatbot
        </label>
        <label htmlFor="Marketing Digital">
          <input type='checkbox' name='Marketing Digital' id='Marketing Digital' onChange={handleChange}/>
          Marketing Digital
        </label>
        <label htmlFor="Geração de Leads">
          <input type='checkbox' name='Geração de Leads' id='Geração de Leads' onChange={handleChange}/>
          Geração de Leads
        </label>
        <label htmlFor="Mídia Paga">
          <input type='checkbox' name='Mídia Paga' id='Mídia Paga' onChange={handleChange}/>
          Mídia Paga
        </label>
        <div>
          <label htmlFor="Order by">
            Ordenar por:
            <select name="Order by" id="Order by" onChange={handleChangeSelect}>
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

