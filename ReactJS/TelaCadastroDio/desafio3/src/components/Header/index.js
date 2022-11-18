import React from 'react'
import {Navbar} from './styles'
import logo from './../../assets/logo.png'
import Button from '../Button'

export default function Header() {
  return (
    <Navbar>
        <img src={logo} width="80px" height="35px"/>
        <Button text="Home"/>
        <Button classe="Btn" text="Entrar"/>
        <Button classe="Btn" text="Cadastrar"/>
    </Navbar>
  )
}
