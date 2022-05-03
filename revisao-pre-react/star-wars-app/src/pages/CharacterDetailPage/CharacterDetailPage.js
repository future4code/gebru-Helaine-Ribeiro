import React, { useState, useEffect } from "react"
import useRequestData from "../../hooks/useRequestData"
import { getCharacterDetails, getPlanetDetails } from "../../services/request"

function CharacterDetailsPage(props) {
    const [details, setDetails] = useState({})
    const [planet, setPlanet] = useState({})

    //const[ getCharacterDetails,getPlanetDetails] = useRequestData({url})

    useEffect(() => {
        getCharacterDetails(props.url, setDetails)
    }, [props.url])

    useEffect(() => {
        getPlanetDetails(details.homeworld, setPlanet)
    }, [details.homeworld])

    return (
        <div>
            <h1>Detalhes de personagem</h1>
            {details.name && planet.name ?
                <div>
                    <p>Nome: {details.name}</p>
                    <p>Planeta de origem: {planet.name}</p>
                    <p>Clima: {details.climate}</p>
                <p>Terreno: {details.terrain}</p>
                <p>População: {details.population}</p>
                </div> :
                <p>Carregando...</p>}

            <button onClick={props.goToListPage}>Voltar para lista de personagens</button>
        </div>
    )
}

export default CharacterDetailsPage



/*

import { goToListpage } from "../../routes/coordinator";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import useRequestData from "../../hooks/useRequestData"
import CharacterDetailCard from "../../components/CharacterDetailCard"
//import { getCharacterDetails, getPlanetDetails} from "../../services/request"

const CharacterDetailPage =()=> {
    const navigate = useNavigate(); //chamado do hook

  

    const [details, setDetails] = useState({})
    const [planet, setPlanet] = useState({})

    
    useEffect(() => {
        getCharacterDetails(props.url, setDetails)
    }, [props.url])

    useEffect(() => {
        getPlanetDetails(details.homeworld, setPlanet)
    }, [details.homeworld])
    
    

    

    return (
        <div>
            <h1>Detalhes de personagem</h1>
            {details.name && planet.name ?
                <div>
                    <p>Nome: {details.name}</p>
                    <p>Nome do Planeta: {planet.name}</p>
                    <p><b>Nome do Planeta:</b> {CharacterDetail.detail.planet}</p>
                <p><b>Clima:</b> {CharacterDetail.detail.climate}</p>
                <p><b>Terreno:</b> {CharacterDetail.detail.terrain}</p>
                <p><b>População:</b> {CharacterDetail.detail.population}</p>
                </div> :
                <p>Carregando...</p>}
               

            <button onClick={()=>goToListpage(navigate)}>Voltar para lista de personagens</button>
        </div>
    )
}

export default CharacterDetailPage;

*/



