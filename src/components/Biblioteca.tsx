import React from 'react'

export default function Biblioteca() {
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
    </div>
  )
}

