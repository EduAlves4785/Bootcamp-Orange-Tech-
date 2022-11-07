//-------->Objeto literal
const Pessoa={
    nome:'Plinio',
    idade:'24',
    //O this serve para assumir o objeto
    descrever:function(){
        console.log("Meu nome é "+this.nome+" e minha idade é "+this.idade)
    }
}

Pessoa.nome="José"
Pessoa.idade=42

//Acessando valores com o objeto e a key
console.log(Pessoa.nome)
console.log(Pessoa.idade)
console.log(Pessoa)

//incrementando valores
Pessoa.altura=1.75
console.log(Pessoa)

//deletando valores
delete Pessoa.nome
console.log(Pessoa)

//Chamando método
Pessoa.nome="Julius"
Pessoa.descrever();

//sobrescrevendo valor
Pessoa.descrever=function(){
    console.log("Meu nome é "+this.nome)
}
Pessoa.descrever();

//-------->Acessando melhor os valores
const atributo='nome'
console.log(Pessoa[atributo])


//-------->Classes
class Carro{
    nome;
    cor;
    ano;

    constructor(nome,cor,ano){
        this.nome=nome
        this.cor=cor
        this.ano=ano
    }

    descreverCarro() {
        console.log("O carro é "+this.nome+" sua cor é "+this.cor)
    }
}

const celta=new Carro();
celta.nome="Celta"
celta.cor="Prata"
celta.ano=2015
console.log(celta)

const onix=new Carro();
onix.nome="Onix"
onix.cor="Vermelho"
onix.ano=2021
onix.descreverCarro()

const uno=new Carro("Uno","Branco",2010)
console.log(uno)

function compararCarros(c1,c2){
    if(c1.ano>c2.ano){
        console.log("O "+c1.nome+" é mais novo!")
    }else if(c1.ano<c2.ano){
        console.log("O "+c2.nome+" é mais novo!")
    }else{
        console.log("Ambos tem mesma idade") 
    }
}

compararCarros(celta,uno)

//Praticando
/*1-Crie uma classe para representar carros.
-os carros possuem marca,cor e gasto de combustivel
crie um metodo que dado a quantidade de quilometros e preco do combustivel nos
de o valor gasto em reais para realizar o percurso*/

class Carros{
    marca;
    cor;
    gasto;

    constructor(marca,cor,gasto){
        this.marca=marca
        this.cor=cor
        this.gasto=gasto
    }

    calculaGasto(qntdKm,precoCombustivel){
        let conta=(qntdKm/this.gasto)*precoCombustivel
        console.log("Será gasto R$"+conta+" de combustível para percorrer "+qntdKm)
    }
}

const c1=new Carros("Honda","Branco",7)

c1.calculaGasto(100,5)

const palio=new Carros("Fiat","Verde",10)

palio.calculaGasto(70,5)

/*2)Crie uma classe para representar pessoas.
Para cada pessoa teremos atributos nome,peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC(IMC=peso/(altura*altura)).
Instâncie uma pessoa chamada José que tenha 70kg e 1,75 de altura e peça ao José para dizer
seu IMC.*/

class Pessoas{
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome=nome
        this.peso=peso
        this.altura=altura
    }

    dizerIMC(){
        return this.peso/Math.pow(this.altura,2)
    }

    classificarIMC(imc){
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
}

const jose=new Pessoas("José",70,1.75)

console.log(jose.classificarIMC(jose.dizerIMC()))