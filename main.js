function buscarPokemon(){
    const pokemon=document.getElementById("pokemonInput").value.trim().toLowerCase();
    const url=`https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    fetch(url)
    .then(response => response.json())
    .then(response => mostrarPokemon(response))
    .catch(()=>mostrarError());
}



function mostrarPokemon(response){
    const mostrar=document.getElementById("mostrar");
    const tipos = response.types.map(typeInfo => typeInfo.type.name).join(", ");
    mostrar.innerHTML=`
    <h2>${response.name}</h2>
    <img src="${response.sprites.other["official-artwork"].front_default}">
    <p>Numero: ${response.id}</p>
    <p>Peso: ${response.weight/10}kg</p>
    <p>Medida: ${response.height/10}m</p>
    <p>Tipo: ${tipos}</p>
    `
}

window.onload= function(){
    document.getElementById("pokemonInput").value="1";
    buscarPokemon();
}

function mostrarError(){
    const mostrar=document.getElementById("mostrar");
    mostrar.innerHTML=`
    <p>No se ha encontrado el pokémon</p>
    `
}