/*Comando para executar aqruivo js
"node nomedoarquivo.js"*/

//------>Imprimir coisas no terminal
console.log("Imprimiu")

//------>Declarando variáveis
let variavel=10//let pode mudar o valor futuramente
variavel=15
console.log(variavel)

const pi=3.14//o valor de const é estático não muda
p1=10//Não é possível atribuir
console.log(pi)

//------>Operadores matmáticos e atribuição
//+,-,*,/,=,%
let conta=10+10
conta-=5
console.log(conta)

/*Faça um programa para calcular o valor gasto de combustível em uma viagem
Você vai ter 3 variáveis.Sendo elas:
1-preço do combustível
2-Valor médio de gasto do carro
3-Distância em KM da viagem
No final imprima no console o valor gasto de combustível na viagem!*/

const combustivel=5.0
let gastodocarro=14.2
let distanciaviagem=1319

const contaTotal=5*(distanciaviagem/gastodocarro)
console.log("O gasto será de R$",contaTotal.toFixed(2))//Passa para casas decimais

//------>Estruturas Condicionais
const carrYAzul=true;//Variável booleana ou seja verdadeiro(true) ou falso(false)
const carroXAzul=false;

const numero1=10

const iseNumeroPar=(numero1%2)===0
//= atribuição
//== ignora o tipo e verifica o valor
//=== compara o tipo e valor
//is é usado ao trabalhar com variavel booleana

if(iseNumeroPar){
    console.log("Ele é par")
}else{
    console.log("ímpar")
}

/*Faça um programa para calcular o valor de uma viagem.
você terá 5 variáveis.Sendo elas:
1-Preço do etanol
2-Preço da gasolina
3-O tipo de combustível que está no carro
4-Gasto médio de combustível do carro por Km
5-Distância em KM da viagem

imprima o valor gasto na viagem*/
const etanol=3.4
const gasolina=5.0
let tipocombustivel="etanol"
let gastodecombustivelcarro=14
let distanciadaviagem=120

if(tipocombustivel=="etanol"){
    let conta1=(distanciadaviagem/gastodecombustivelcarro)*etanol
    console.log(conta1.toFixed(2))
}else if(tipocombustivel=="gasolina"){
    let conta2=(distanciadaviagem/gastodecombustivelcarro)*gasolina
    console.log(conta2.toFixed(2))
}else{
    console.log("Valor inválido")
}

//------>Praticando mais
/*Faça um programa onde dado as 3 notas calcule a média e imprima sua média e
classificação de acordo a tabela

Média(nota1+nota2+nota3)/3

Classificação:
-Média menor que 5,reprova
-Média entre 5 e 7 recuperação
-Média acima de 7,passou
*/

let nota1=7
let nota2=7
let nota3=7
const media=(nota1+nota2+nota3)/3

if(media<5){
    console.log("Sua nota foi ",media.toFixed(2),".Reprovado")
}else if(media>=5 && media<=7){
    console.log("Sua nota foi ",media.toFixed(2),".Recuperação")
}else{
    console.log("Sua nota foi ",media.toFixed(2),".Aprovado")
}

/*Calcule o IMC e retorne o mesmo de acordo a tabela
IMC=preso/(altura*altura)

IMC em adultos condição:
-Abaixo de 18.5 Abaixo do peso
-Entre 18.5 e 25 Peso normal
-Entre 25 e 30 Acima do peso
-Entre 30 e 40 Obeso
-Acima de 40 Obesidade grave
*/
const peso=80
const altura=1.75
const contaIMC=peso/(altura*altura)

if(contaIMC<18.5){
    console.log("Abaixo do peso")
}else if(contaIMC>=18.5 && contaIMC<=25){
    console.log("Peso ideal")
}else if(contaIMC>=25 && contaIMC<=30){
    console.log("Acima do peso")
}else if(contaIMC>=30 && contaIMC<=40){
    console.log("Obeso")
}else if(contaIMC>=40){
    console.log("Obesidade grve")
}

/*Calcule o valor pago por um produto considerando o preço normal
de etiquetação e a escolha da condição de pagamento
Utilize os códigos de acordo a tabela

Condição de pagamento:
-Á vista débito,recebe 10% de desconto
-Á vista no dinheiro ou pix,15% de desconto
-Em duas vezes,preço normal de etiqueta sem juros
-Acima de duas vezes,preço normal de etiqueta +10% de juros
*/

const valorproduto=50
let condicaopagamento=""
let formapagamento=""
let parcelas=5

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

