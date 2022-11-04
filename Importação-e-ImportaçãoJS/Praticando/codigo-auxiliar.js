function numerosSorteados(primeiro,segundo,terceiro,quarto,quinto){
    const numeros=[]
    numeros.push(primeiro,segundo,terceiro,quarto,quinto)
    console.log(Math.max.apply(null, numeros));
}

module.exports={numerosSorteados}