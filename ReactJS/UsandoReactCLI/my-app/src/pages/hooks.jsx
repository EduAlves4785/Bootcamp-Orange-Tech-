import React, { useMemo } from 'react'
import { useState,useEffect } from 'react'

const Hooks=()=>{
    
    const[cep,setCep]=useState(0);

    useEffect(()=>{
        console.log("Mudança no cep")
    },[cep])

    const soma=useMemo(()=>{
        console.log('renderizou')
        return 10+10
    },[])
    console.log(soma)
    //useMemo salva referências em variáveis(const,vat,let)
    //useCallback serve para referênciar a referência de uma função.

    return(
        <div>
            <p>O cep é {cep}</p>
            <input type="text" placeholder='Inserir cep'  onChange={(e)=>setCep(e.target.value)}></input>
            <button >Pesquisar</button>
        </div>
    )
} 

export {Hooks}
