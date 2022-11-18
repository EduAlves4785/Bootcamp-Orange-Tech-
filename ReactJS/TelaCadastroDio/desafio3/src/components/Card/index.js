import React from 'react'
import {CardContainer} from './styles'


export default function Card({text}) {
  return (
    <CardContainer>
        <h1>{text}</h1>
    </CardContainer>
  )
}
