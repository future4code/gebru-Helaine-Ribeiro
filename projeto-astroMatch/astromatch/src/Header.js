import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import './components/Header.css'





const Header=(props)=>{
    

    return(
        <div className="headerContainer" >
          
     <IconButton onClick={props.goTOProfileScree}>
     <PersonIcon fontSize="large" className="header_icon"/>
     </IconButton>
                 
    
        <h1><img className="imagem" src="https://cdn.onlinewebfonts.com/svg/img_573015.png"/>Astromatch<img className="imagem" src="https://images.emojiterra.com/google/noto-emoji/v2.034/512px/2764-1f525.png" alt="logo"/></h1>
          
        
        <IconButton  onClick={props.getMatchesToChoose}>
     <ForumIcon fontSize="large" className="header_icon"/>
     </IconButton>

        </div>
    )
}

export default Header
