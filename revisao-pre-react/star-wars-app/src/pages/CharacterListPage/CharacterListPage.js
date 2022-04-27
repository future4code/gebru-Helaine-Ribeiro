import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import {CharacterCard,CharacterContainer, Character} from "./styles"


const CharacterListPage =()=> {
  const [characterList, setCharacterList] = useState([])

  useEffect(()=>{
    getCharacterList()
  },[])

  const getCharacterList=()=>{
    axios.get(`${BASE_URL}/people/`)
     .then((response)=>setCharacterList(response.data.results))
     .catch((error)=>console.log("Erro:",error.message))
  }

  const showCharacter=()=>{
    return characterList.map((character,index)=>{
      return <CharacterCard key={index}>{character.name}</CharacterCard>
    })
  }


  return ( 
  <CharacterContainer>
    <Character>Star Wars</Character>
    
    {showCharacter()}
    
    
    </CharacterContainer>
  )
}

export default CharacterListPage;