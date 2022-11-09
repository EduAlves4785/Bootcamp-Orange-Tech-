import React from 'react'
import Botao from '../Button'

export default function Entrada(place) {
  const {text}=place
  
    return (
        <>
            <h2>{text}</h2>
            <input type="text" placeholder={text}/>
            <hr/>
            <Botao title="enviar"/>
        </>
  )
}
