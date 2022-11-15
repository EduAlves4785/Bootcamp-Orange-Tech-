import React from "react";
import {Button} from '../Button'
import logo from '../../assets/logo.png'
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'
import user from '../../assets/user.png'
import { IHeader } from "./types";

const Header=({autenticado}:IHeader)=>{
    return(
        <Wrapper>
            <Container>
                <Row>
                    <img width="100px" src={logo} alt="Logo dio"/>
                    {autenticado?(
                        <>
                            <BuscarInputContainer>
                            <Input placeholder="Buscar"></Input>
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ):null}
                </Row>
                <Row>
                    {autenticado?
                    (<><UserPicture src={user}/></>)
                    :(<>
                        <MenuRight href="#">Home</MenuRight>
                        <Button title="Entrar"></Button>
                        <Button title="Cadastrar"></Button> 
                    </>)}
                </Row>
            </Container>
        </Wrapper>
    )
}

export {Header}