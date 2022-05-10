//import React, { useState, useEffect } from "react"//
import { useParams } from "react-router-dom";
import React from "react";
import useRequestData from "../../hooks/useRequestData";
import {BASE_URL}  from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { goToListpage } from "../../routes/coordinator";
import { DetailContainer,ButtonCard,Tittle,NegritoCard } from "./styles"
//import logo from '../../assets/images/logo5.png'

const CharacDetailPage=()=> {
  const params = useParams([]);
  const navigate = useNavigate();

  const characterDetail = useRequestData (
    `${BASE_URL}/people/${params.nome}`,
    {}
  );

  const characterDetails = useRequestData (
    `${BASE_URL}/planets/${params.nome}`,
    {}
  );

  return (
    <DetailContainer>
    
      <Tittle>Detalhes dos personagens</Tittle>
      <p><NegritoCard>Nome: </NegritoCard>  {characterDetail.name}</p>
      <p><NegritoCard>Nome do Planeta:</NegritoCard> {characterDetails.name}</p>

      <p><NegritoCard>Clima:</NegritoCard>  {characterDetails.climate}</p>
      <p><NegritoCard>Terreno:</NegritoCard> {characterDetails.terrain}</p>
      <p><NegritoCard>População:</NegritoCard> {characterDetails.population}</p>

      <ButtonCard onClick={() => goToListpage(navigate)}>
       Voltar 🛸 
      </ButtonCard>
    </DetailContainer>
  );
}

export default CharacDetailPage;






