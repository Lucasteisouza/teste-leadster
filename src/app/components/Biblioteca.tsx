'use client';
import React, { useEffect } from 'react';
import Card from './Card';

export interface iPost  {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function fecthVideoData(): Promise<iPost[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts') //usando unm placeholder devido a falta de um endpoint real
  const posts: iPost[] = await res.json();
  return posts ;
};

export default function Biblioteca() {
  const [posts, setPosts] = React.useState<iPost[]>([]);
  const [filteredPosts, setFilteredPosts] = React.useState<iPost[]>(posts);
  useEffect(() => {
    fecthVideoData().then((posts) => {
      setPosts(posts);
    });
  }, []);
  return (
    <div>
      <label htmlFor="Agências">
        <input type='checkbox' name='Agências' id='Agências' />
        Agências
      </label>
      <label htmlFor="Chatbot">
        <input type='checkbox' name='Chatbot' id='Chatbot' />
        Chatbot
      </label>
      <label htmlFor="Marketing Digital">
        <input type='checkbox' name='Marketing Digital' id='Marketing Digital' />
        Marketing Digital
      </label>
      <label htmlFor="Geração de Leads">
        <input type='checkbox' name='Geração de Leads' id='Geração de Leads' />
        Geração de Leads
      </label>
      <label htmlFor="Mídia Paga">
        <input type='checkbox' name='Mídia Paga' id='Mídia Paga' />
        Mídia Paga
      </label>
      <div>
      <label htmlFor="Order by">
        Ordenar por:
        <select name="Order by" id="Order by">
          <option value="Data de publicação">Data de publicação</option>
          <option value="Nota">Nota</option>
          <option value="Alfabética">Alfabética</option>
        </select>
      </label>
      </div>
      {filteredPosts.length > 0 
        ? filteredPosts.map((post) => <Card key={ post.id } post={ post }/>)
        : posts.map((post) => <Card key={ post.id } post={ post }/>)
      }
    </div>
  )
}

