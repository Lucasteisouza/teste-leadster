import React from 'react';
import { iPost } from './Biblioteca';

interface iProspsPost {
  post: iPost;
}

export default function Card(props: iProspsPost) {
  return (
    <div>
      {props.post.id}
    </div>
  )
}
