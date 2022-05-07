import styled from "styled-components"

export const CharacterCard= styled.div`
-webkit-text-stroke: 1px black;
  display: inline-flex;
width: 80vw;
    height: 10vh ;
    color:black;
    font-size: 20px;
    padding: 5px 10px;
    justify-content: space-between;
    margin-top:90px;
    text-shadow: 0.1em 0.1em 0.2em red;
   
`


export const CharacterContainer= styled.div`
display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh ;
    background-image:url("https://th.bing.com/th/id/R.68b9bc10224a7b7168d4cd0a8668e7d5?rik=dgHxQep470OO2w&pid=ImgRaw&r=0");
    position: center;
align-items:center ;

   ` 
   
   export const Character= styled.h1`
   -webkit-text-stroke: 1px red;
   color: black;
    padding:10px ;
    &:hover {
        cursor: pointer;
        color:  red;
    } 
    margin-top:30px;
    text-shadow: 2px 4px black;
    font-size: 5em;
    text-shadow: 0.1em 0.1em 0.1em black;
`
   
