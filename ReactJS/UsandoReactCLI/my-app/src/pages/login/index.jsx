import {MdEmail,MdLock} from 'react-icons/md'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { useNavigate } from 'react-router-dom'

import {Column,Container,CriarText,EsqueciText,Row,SubTitleLogin,Title,TitleLogin,Wrapper} from './styles'

const Login=()=>{
    
    const navigate=useNavigate();

    const handleClickSiginin=()=>{
        navigate('/feed')
    }
    
    return(<>
        <Header/>
        <Container>
            <Column>
                <Title>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptatibus vel similique at fugiat.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu login</SubTitleLogin>
                    <form>
                        <Input placeholder="e-mail" leftIcon={<MdEmail/>}/>
                        <Input placeholder="senha" type="password" leftIcon={<MdLock/>}/>
                        <Button onClick={handleClickSiginin} type="bottom" title="Entrar" variant="secondary"></Button>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>
    )
}

export {Login}