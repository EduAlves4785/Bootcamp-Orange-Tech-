function sayMyName(name){
    console.log("Your name is "+name)
}

sayMyName("Eduardo")

//----------->

function quadrado(valor){
    return valor*valor
}

const quadradoDeDez=quadrado(10)
console.log(quadradoDeDez)
console.log(quadrado(10)+quadrado(10))

//---------->

function incrementarJuros(valor,percentualJuros){
    const valorDeAcrecimo=((percentualJuros/100)*valor)
    return valor+valorDeAcrecimo
}
console.log(incrementarJuros(100,10))

//----------->

function calcularJuros(){

}

function mainTeste(){
    console.log("Programa Principal")
    calcularJuros()
}

mainTeste();

//------------------->

function calcularImc(peso,altura){
    return peso/Math.pow(altura,2)
}


function classificarImc(imc){
    if(imc<18.5){
        return "Abaixo do peso"
    }else if(imc>=18.5 && imc<=25){
        return "Peso ideal"
    }else if(imc>=25 && imc<=30){
        return "Acima do peso"
    }else if(imc>=30 && imc<=40){
        return "Obeso"
    }else if(imc>=40){
        return "Obesidade grave"
    }   
}

/*--------->O parêntes transforma uma função em imediatamente invocada
 sem precisar chamar o main()*/
(function main(){
    const peso=80
    const altura=1.75
    const imc=calcularImc(60,1.80)
    console.log(classificarImc(imc))
})();

/*-------------------> função anônima(sem nome)
que não pode ser chamada*/
(function (){
    const peso=80
    const altura=1.75
    const imc=calcularImc(60,1.80)
    console.log(classificarImc(imc))
})();

//*------------------->Praticando com funções

//----------

(function escrevaMeuNome(nome){
    console.log("Seu nome é "+nome)
})("Eduardo");

//----------

function verificarIdade(idade){
    if(idade>=18){
        console.log('Maior de idade')
    }else{
        console.log('Menor de idade')
    }
}

verificarIdade(19)

//----------

function calcularValorFinal(valorproduto,condicaopagamento,formapagamento,parcelas){
    if(condicaopagamento==="avista"){
        if(formapagamento==="debito"){
            let contafinal=valorproduto-(valorproduto*0.10)
            console.log(contafinal)
        }else{
            let contafinal=valorproduto-(valorproduto*0.15)
            console.log(contafinal)
        }
    }else if(parcelas==2){
        console.log(valorproduto)
    }else if(parcelas>2){
        let contafinal=valorproduto+(valorproduto*0.10)
        console.log(contafinal)
    }else{
        console.log("valores incorretos")
    }
    
}

calcularValorFinal(50,"avista","",0)

