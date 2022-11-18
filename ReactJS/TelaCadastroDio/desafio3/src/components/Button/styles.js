import styled from 'styled-components'

export const Botao=styled.button`
    background: transparent;
    border:none;  
    color: white;
    font-size: 17px;
    margin-left:2rem;
    height: 1.6rem;
    width:5rem;
    margin-top:1rem;
    cursor: pointer;
    &:hover{
        transition: 0.5s;
        color:rgb(228,16,93) ;
    }

    &.Btn{
        background-color:rgb(86,86,86);
        border-radius: 10px;
        height: 1.5rem;
        width:7rem;
        padding:0.5px;
    }
    &.Btn:hover{
        color: white;
        background-color:rgb(228,16,93);
    }
`