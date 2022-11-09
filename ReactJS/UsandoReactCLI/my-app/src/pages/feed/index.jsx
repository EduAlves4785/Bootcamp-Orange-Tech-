import {Link} from 'react-router-dom'

import {Card} from '../../components/Card'
import { Header } from '../../components/Header'
import { UserInfo } from '../../components/UserInfo'
import user from '../../assets/user.png'

import {Container,Column,Title,TitleHighLight} from './styles'

const Feed=()=>{
    return(<>
        <Header autenticado={true}/>
        <Container>
           <Column flex={3}>
                <Title>Feed</Title>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
           </Column>
           <Column flex={1}>
                <TitleHighLight>Ranking da semana</TitleHighLight>
                <UserInfo percentual={80} nome="Eduardo" image={user}/>
                <UserInfo percentual={80} nome="Eduardo" image={user}/>
                <UserInfo percentual={80} nome="Eduardo" image={user}/>
                <UserInfo percentual={80} nome="Eduardo" image={user}/>
                <UserInfo percentual={80} nome="Eduardo" image={user}/>
           </Column>
        </Container>
    </>
    )
}

export {Feed}