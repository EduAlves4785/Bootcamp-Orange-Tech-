const PokeApi={}

function convertPokeApiDetailToPokemon(pokemonsDetail){
    const pokemon=new Pokemon()
    pokemon.number=pokemonsDetail.id
    pokemon.name=pokemonsDetail.name
    
    const types= pokemon.types=pokemonsDetail.types.map((typeSlot)=>typeSlot.type.name)
    const [type]=types
    
    pokemon.types=types
    pokemon.type=type

    pokemon.photo=pokemonsDetail.sprites.other.dream_world.front_default

    return pokemon
}

PokeApi.getPokemonDetail=(pokemon)=>{
    return fetch(pokemon.url)
    .then((response)=>response.json())
    .then(convertPokeApiDetailToPokemon)
}

PokeApi.getPokemons=(offset=0,limit=9)=>{
    const url=`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response)=>response.json())
        //O then abaixo recebe o resultado anterior
        .then((jsonBody)=>jsonBody.results)
        .then((pokemons)=>pokemons.map(PokeApi.getPokemonDetail))
        .then((detailRequests)=>Promise.all(detailRequests))
        .then((pokemonsDetails)=>pokemonsDetails)
}   

//Promise.all recebe um array de promisse
