import React, {useState, useEffect} from 'react'
import axios from "axios";



  // valor do estado que guarda infos e foto do pokemon
const PokeCard =(props)=> {
  const [pokemon, setPokemon] = useState({});

  // método que roda após a montagem do componente
  useEffect(() => {

  // função que bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  // Nos métodos de ciclo de vida, ela é chamada passando como parametro
  //parâmetro o nome de pokemon que está chegando como props. 

  const pegaPokemon = async (pokeName) => {
    try{
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
         setPokemon(response.data)
       // guarda as infos do pokemon no estado
    } catch(err) {
      console.log(err)
    }
    }
  
    pegaPokemon()
  }, [props.pokemon]

  )
 

  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (<img src={pokemon.sprites.front_default} alt={pokemon.name} />)}
    </div>
  );
}

export default PokeCard;
