import React from "react"
//import { CardContainer } from './styled'

const CharacterDetailCard = (props) => {

    const {name, climate, planet, terrain, population} = props.details

    return(
        <div>
            <p><b>Nome:</b> {name}</p>
            <p><b>Clima :</b> {climate}</p>
            <p><b>Terreno:</b> {terrain}</p>
            <p><b>Nome do Planeta:</b> {planet}</p>
            <p><b>População:</b> {population}</p>
        </div>
    )
}



export default CharacterDetailCard


import React from "react"
import { CardContainer, ButtonsContainer } from './styled'


const CandidateCard = (props) => {
    const { id, applicationText, profession, age, name, country } = props.candidate

  
    }

    return (
        <CardContainer>
            <p><b>Nome:</b> {name}</p>
            <p><b>Profissão:</b> {profession}</p>
            <p><b>Idade:</b> {age}</p>
            <p><b>País:</b> {country}</p>
            <p><b>Texto de Candidatura:</b> {applicationText}</p>
            

        </CardContainer>
    )
}

export default CandidateCard