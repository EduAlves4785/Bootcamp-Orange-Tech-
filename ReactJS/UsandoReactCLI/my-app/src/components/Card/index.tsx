import React from "react"
import {FiThumbsUp} from 'react-icons/fi'
import {CardContainer,Content,HasInfo,ImageBackground,PostInfo,UserInfo,UserPicture} from './styles'
import user from '../../assets/user.png'
import capa from '../../assets/capa.png'

const Card=()=>{
    return(
        <CardContainer>
            <ImageBackground src={capa}/>
            <Content>
                <UserInfo>
                    <UserPicture src={user}/>
                    <div>
                        <h4>Eduardo</h4>
                        <p>Há 10 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de JavaScript</h4>
                    <p>Projeto feito no bootcamp</p><strong>Saiba mais...</strong>
                </PostInfo>
                <HasInfo>
                    <h4>#JavaScript</h4>
                    <FiThumbsUp/>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}

export {Card}