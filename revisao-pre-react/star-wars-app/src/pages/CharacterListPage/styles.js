import styled from "styled-components";


export const CharacterCard= styled.div`
  display: flex;
position: center;
    color: white;
    box-shadow: 11px 5px 10px 9px rgba(0,0,0,9);
    font-size: 1em;
    border-radius: 4px;
    margin: 350px  0;
    justify-content: space-around;
   
   
`

export const CharacterContainer= styled.div`
    display: flex;
    justify-content: space-around;
    width: 100vw;
    color: white;
    position: center;;
    background-image:url("https://th.bing.com/th/id/R.68b9bc10224a7b7168d4cd0a8668e7d5?rik=dgHxQep470OO2w&pid=ImgRaw&r=0");
   
   ` 
   
   export const Character= styled.h1`
   display: flex;
   margin: 50px  ;
position: center;
justify-content: space-around;
    font-size: 50px;
    
   background: red; 

`
const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 500px;
    margin: 10px 0;
   

    button{
        background-color: #455d7a;
        box-shadow: black 2px 1px 2px 2px;
    background-color: #455d7a;
    background-image: linear-gradient(20deg, #455d7a,white);
    }
`

 const AdminHomeButtonsContainer= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
    width: 500px;
    border:black 2px solid;
      box-shadow: black 1px 1px;
      background-color: #455d7a;
      padding:20px ;
      left:10px ;
      overflow: auto;
`