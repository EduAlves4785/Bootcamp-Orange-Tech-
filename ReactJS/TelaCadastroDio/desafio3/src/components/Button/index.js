import React from 'react'
import {Botao} from './styles'


export default function Button({classe,text}) {
  return (
    <Botao className={classe}>{text}</Botao>    
  )
}
