import styled from "styled-components";

export const FormContainer=styled.div`
    width: 25rem;
    height: 29rem;
    position:absolute;
    top:8rem;
    margin-left:55rem;
    color: white;
    padding: .2rem;
    p{
        font-size: 18px;
        margin-top:.5rem;
    }
`

export const InputContainer=styled.div`
    position:relative;
    height: 15.5rem;
    margin-top: 2rem;
`
export const BtnContainer=styled.div`
    color: white;
    background-color: transparent;
    width: 14rem;
    height: 2rem;
    margin: 2rem 1rem;
    border:2px solid rgb(228,16,93) ;
    border-radius:30px;
`

export const BtnEnviar=styled.button`
    color: white;
    width: 13.5rem;
    height:1.5rem;
    background-color:rgb(228,16,93);
    border:none;
    border-radius: 15px;
    margin:.22rem .25rem;
    font-size: 18px;
    cursor: pointer;
`