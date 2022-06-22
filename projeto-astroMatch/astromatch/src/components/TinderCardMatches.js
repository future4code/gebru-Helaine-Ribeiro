import React, { useEffect, useState } from 'react';
//import './components/SwipeButton.css'
import './SwipeButton.css'
import axios from "axios";



const TinderCardMacthes =()=> {
    const[matchesToChoose, setMatchesToChoose] = useState()
   

useEffect(() =>{
    
    const getMatchesToChoose =()=>{
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/helaine-ribeiro-gebru/matches')
        .then(response =>{
            setMatchesToChoose(response.data.matches)
        })
        .catch(error =>{
            console.log(error)

        })
    }
    getMatchesToChoose()
},[])

const listMatchesScreen =()=>{
matchesToChoose.map((matches)=>{
return(
    <div key={matches.id}>
        <img src={matches.photo}/>
        {matches.name}
    </div>
      )
   })
}


  
 

  return (
    
listMatchesScreen()
  )
}
export default TinderCardMacthes
