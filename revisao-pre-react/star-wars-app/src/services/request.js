

import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const getCharacterList = (saveData) => {
    axios.get(`${BASE_URL}/people/`)
        .then((response) => saveData(response.data.results))
        .catch((error) => console.log("Erro:", error.message))
}

export const getCharacterDetails = (url, saveData) => {
    axios.get(url)
        .then((response) => {
            saveData(response.data)
        })
        .catch((error) => console.log(error.message))
}

export const getPlanetDetails = (url, saveData) => {
    axios.get(url)
        .then((response) => {
            saveData(response.data)
        }).catch((error) => console.log(error.message))
}

