import {Link} from 'react-router-dom'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import banner from '../../assets/banner.png'
import { useNavigate } from 'react-router-dom'

import {Container,TextContent,Title,TitleHighLight} from './styles'

const Home=()=>{
    
    const navigate=useNavigate();

    const handleClickSiginin=()=>{
        navigate('/login')
    }

    return(<>
        <Header/>
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                        Implemente
                        <br/>
                    </TitleHighLight>
                    o seu futuro global agora!
                </Title>
                <TextContent>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur explicabo voluptatem laborum ab, cumque animi tempora aliquam dolorum facere voluptat
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={handleClickSiginin}/>
            </div>
            <div>
                <img src={banner} alt="Imagem banner" width="400px" height="250px"></img>
            </div>
        </Container>
    </>
    )
}

export {Home}