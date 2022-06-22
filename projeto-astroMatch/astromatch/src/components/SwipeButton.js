import React, { useEffect, useState } from 'react';
//import './components/SwipeButton.css'
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import './SwipeButton.css'
import axios from "axios";



const SwipeButton =(props)=> {
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


  return (
    <div className="SwipeButton">
        
     <IconButton>  
     <CloseIcon   fontSize="Large" />
     </IconButton>
     
     <IconButton onClick={props.getProfileToChoose}>  
     <FavoriteIcon   fontSize="Large" />
     {matchesToChoose ? 
    <div>
       <p><img src={matchesToChoose.id}/></p>
        <p><img src={matchesToChoose.photo}/></p>
        <p><img src={matchesToChoose.name}/></p>
        <p><img src={matchesToChoose.age}/></p>
        <p><img src={matchesToChoose.bio}/></p>

    </div> : ""}
     </IconButton>
     
    </div>
  )
}

export default SwipeButton

