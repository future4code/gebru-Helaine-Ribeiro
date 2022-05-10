import React from "react";
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { CharacterContainer,CharacterCard,Characterh1,CharacterButton } from "./styles"


const CharacterListPage=()=> {
  const characterList = useRequestData(`${BASE_URL}/people/`, {});
  const navigate = useNavigate();

  const showCharacters =
    characterList.results &&
    characterList.results.map((character, index) => {
      return (
        <div 
          onClick={() => goTodetailPage(index + 1)}
          key={character.name}
        >
          
          <CharacterButton>{character.name}</CharacterButton>
        </div>
      );
    });

  const goTodetailPage = (index) => {
    navigate(`/detalhe/${index}`);
  };

  return (
    <CharacterContainer>
      <Characterh1>Star Wars</Characterh1>
      <CharacterCard>
      {showCharacters} 
      </CharacterCard>
     
    </CharacterContainer>
  );
}

export default CharacterListPage;

