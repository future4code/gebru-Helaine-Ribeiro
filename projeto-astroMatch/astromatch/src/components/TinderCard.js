import React, { useEffect, useState } from 'react';
import axios from 'axios'
//import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import './SwipeButton.css'
import { Container } from '@mui/material';

{/*const TelaInicial = styled.div`
display: flex;
justify-content:center ;
margin-top:10vh ;

position: relative ;
background-color: red ;
width:600 px ;
padding:20px ;
max-width:85vw ;
height:50vh ;
border-radius:0px 18px 53px 0px ;

`*/}


const TinderCard = (props) => {
    const[profileToChoose, setProfileToChoose] = useState()
  
    //retorna um perfil que ainda não foi visto é chamada sempre que alguém entra na página
    useEffect(() =>{
        //função get que importa os dados da API
        const getProfileToChoose =()=>{
            axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/helaine-ribeiro-gebru/person")
            .then(response =>{
                setProfileToChoose(response.data.profile)
            })
            .catch(error =>{
                console.log(error.response.data.message)

            })
        }
        getProfileToChoose()
    },[])
    
  

    
    


  return (
    <div >
        {profileToChoose ? 
        <div className="foto">
            <p className='id'>{profileToChoose.id}</p>
            <br/>
        <p><img className='img' src={profileToChoose.photo} width={300} height={350} /></p>
            
            {profileToChoose.name}
            <br/>
            {profileToChoose.age}
            <br/>
            {profileToChoose.bio}

        </div> : "carregando ..."}


<div className="SwipeButton">
        
     <IconButton>  
     <CloseIcon   fontSize="Large" />
     </IconButton>
     
     <IconButton >  
     <FavoriteIcon    />
     </IconButton>
     </div>
     </div>
  );
}

export default TinderCard;