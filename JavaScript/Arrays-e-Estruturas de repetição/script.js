//Listas
const alunos=['João','Vitor','Plinio']
//João[0]
//Vitor[1]
//Plinio[2]
console.log(alunos[0])
console.log(alunos)
//Adicionando itens a lista
alunos.push('Geraldo')
alunos[4]='Maria'
alunos.push(10)
console.log(alunos)
//Tirando o ultimo item
alunos.pop()
console.log(alunos)
//Tirando o primeiro item
alunos.shift()
console.log(alunos)
//XXXXXXXXXXXX
const notas=[]
notas.push(5)
notas.push(7)
notas.push(8)
notas.push(2)
notas.push(5)
//Tamnaho da lista
console.log(notas.length)
//Calculando média
const soma=notas[0]+notas[1]+notas[2]+notas[3]+notas[4]
console.log(soma/5)
//Usando for
for (let i = 0; i < 10; i++) {
    console.log(i)
}
const nome='Adalberto Plinio'

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}
//Exercitando
const notasAluno=[]
notasAluno.push(5)
notasAluno.push(10)
notasAluno.push(10)
let somaNotas=0
for (let i = 0; i < notasAluno.length; i++) {
    const nota=notasAluno[i]
    somaNotas=somaNotas+nota
}
const media=soma/notasAluno.length
console.log(media)

//Praticando
/*Crie um programa que dado um numero imprima sua tabuada.
*/
let num=5
for (let i = 1; i <=10; i++) {
    const tabuada=i*num
    console.log(i+" X "+num+" = "+tabuada)
}

//Crie um programa que percorra uma lista de numeros e imprima numeros pares
const listaDeNumeros=[5,2,1,6,7,8,10,50,14,11,19]
for (let i = 0; i < listaDeNumeros.length; i++) {
    let numeroPar=listaDeNumeros[i]
    if(numeroPar%2==0){
        console.log(listaDeNumeros[i])
    }
    
}
