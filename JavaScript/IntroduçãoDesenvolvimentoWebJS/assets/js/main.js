const pokemonOL=document.getElementById('pokemonList')
const loadMoreButton=document.getElementById('loadMoreButton')
const limit=5
let offset=0
const maxRecords=151

function loadPokemonItens(offset,limit){

    PokeApi.getPokemons(offset,limit).then((pokemonsList=[])=>{
        //O join junta tudo e tira a virgula com ''
        const newHTML=pokemonsList.map((pokemon)=>
            `
                <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                           ${pokemon.types.map((type)=>`<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>
            `).join('')
        pokemonOL.innerHTML+=newHTML
    })
}

loadPokemonItens(offset,limit)

loadMoreButton.addEventListener('click',()=>{
    offset+=limit
    const qtdRecord=offset+limit
    if(qtdRecord>=maxRecords){
        const newLimit=maxRecords-offset
        loadPokemonItens(offset,newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
        return
    }else{
        loadPokemonItens(offset,limit)
    }
})


