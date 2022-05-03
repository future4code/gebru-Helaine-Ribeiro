import React, { useState, useEffect } from "react"
import { CharacterCard } from "./styles"
import { getCharacterList } from "../../services/request"

function CharacterListPage(props) {
    const [characterList, setCharacterList] = useState([])

    useEffect(() => {
        getCharacterList(setCharacterList)
    }, [])

    function showCharacters() {
        return characterList.map((character, index) => {
            return <CharacterCard onClick={() => props.goToDetailsPage(character.url)} key={index} > {character.name}</CharacterCard >
        })
    }

    return (<div>
        <h1>Lista de personagens</h1>
        {showCharacters()}
    </div>)
}

export default CharacterListPage

/*
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import {CharacterCard,CharacterContainer, Character} from "./styles"
import { useNavigate } from 'react-router-dom'
import { goTodetailPage } from "../../routes/coordinator";




const CharacterListPage =()=> {
 // useProtectedPage();
 const navigate = useNavigate(); //chamado do hook
  
  
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
      return <CharacterCard onClick={() =>goTodetailPage(navigate)} key={index} > {character.name}</CharacterCard >
      
    })
  }

  
  return ( 
  <CharacterContainer>
    <Character>Star Wars</Character>
    
    {showCharacter()}
    
    
    </CharacterContainer>
  )
  
}

export default CharacterListPage
*/
