import React from 'react'

export default function Botao(props) {
  const {title}=props

    return (
    <button>{title}</button>
  )
}
/*Passando title por props,ele é passado dentro de chaves
para desestruturar*/