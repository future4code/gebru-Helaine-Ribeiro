import styled from "styled-components"


export const DetailContainer= styled.div`
    width: 100vw;
    height: 100vh ;
    display: flex;
    flex-direction: column;
    font-size: calc(10px + 2vmin);
    color: white;
    background-image: url("https://jigsawpuzzle.123-games.org/wp-content/uploads/2021/02/thumb-1920-653613.jpg" );
    background-size: cover;
    opacity: 1;
    position: relative;
    top: 0px;
    
    `

    export const ButtonCard= styled.button`
    width:12vw ;
    height: 5vh;
    &:hover {
    cursor: pointer;
    background-image: linear-gradient(20deg, red,black);  
    }
    background-image: linear-gradient(10deg, black,red);
    box-shadow: black 2px 1px 2px 2px;
    border-radius: 4px;
    font-size: calc(10px + 1.1vmin);
    font-weight:bold;
    text-align: center;
   `

export const Tittle= styled.h1`
   -webkit-text-stroke: 1px red;
   color: white;
   text-shadow: 2px 4px black;
   font-size: calc(10px + 8vmin);
   text-shadow: 0.1em 0.1em 0.1em red;

`
export const NegritoCard= styled.b`
   color: red;
     
   `