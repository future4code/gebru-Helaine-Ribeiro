import React from "react";
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { CharacterContainer,CharacterCard,Character } from "./styles"


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
          
          <p>{character.name}</p>
        </div>
      );
    });

  const goTodetailPage = (index) => {
    navigate(`/detalhe/${index}`);
  };

  return (
    <CharacterContainer>
      <Character>Star Wars🛸</Character>
      <CharacterCard>
      {showCharacters} 
      </CharacterCard>
     
    </CharacterContainer>
  );
}

export default CharacterListPage;

