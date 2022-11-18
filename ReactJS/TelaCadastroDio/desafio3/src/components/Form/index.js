import React from 'react'
import { Input } from '../Input/styles'
import Link from '../Link'
import {FormContainer,InputContainer,BtnContainer,BtnEnviar} from './styles'

export default function Form({h1Text,pText,pText2}) {
    return (
    <FormContainer>
        <h1>{h1Text}</h1>
        <p>{pText}</p>
        <InputContainer>
            <Input placeholder="Nome completo" type="text"/>
            <Input placeholder='E-mail' type="email"/>
            <Input placeholder='Senha' type="password"/>
            <BtnContainer>
                <BtnEnviar>Criar minha conta</BtnEnviar>
            </BtnContainer>
            <p>{pText2}</p>
            <Link text1="Ja tenho conta." text2=" Fazer login"/>
        </InputContainer>
    </FormContainer>
  )
}
