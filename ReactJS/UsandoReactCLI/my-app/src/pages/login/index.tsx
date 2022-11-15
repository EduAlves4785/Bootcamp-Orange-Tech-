import {MdEmail,MdLock} from 'react-icons/md'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { useNavigate } from 'react-router-dom'
import	{useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { api } from '../../services/api'
import {Column,Container,CriarText,EsqueciText,Row,SubTitleLogin,Title,TitleLogin,Wrapper} from './styles'
import { IFormData } from './types'

const schema = yup.object({
    email: yup.string().email('Email inválido').required('Email inválido'),
    password: yup.string().min(4,'No mínimo 3 caracteres').required('Senha inválida'),
  }).required();

const Login=()=>{
    
    const navigate=useNavigate();

    const { control, handleSubmit, formState: { errors,isValid } } = useForm<IFormData>({
        resolver:yupResolver(schema),
        mode:'onChange',
    });
    
    console.log(isValid,errors)
    
    const onSubmit = async (formData:IFormData)=>{
        try{
            const{data}=await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.length===1){
                navigate('/feed')
            }else{
                alert("Email ou senha inválido")
            }
        }catch{
            alert('Houve um erro,tente novamente')
        }
    }


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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input control={control} name='email' errorMessage={errors?.email?.message} placeholder="e-mail" leftIcon={<MdEmail/>}/>
                        <Input control={control} name='password' errorMessage={errors?.password?.message} placeholder="senha" type="password" leftIcon={<MdLock/>}/>
                        <Button type="submit" title="Entrar" variant="secondary"></Button>
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