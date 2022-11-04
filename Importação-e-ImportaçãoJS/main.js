//Importando oque está sendo exportado do outro arquivo
const {gets,print}=require('./funcoes-auxialiares')

print(gets())

//Destruturando
const pessoa={
    nome:'Edu'
}
const{nome}=pessoa