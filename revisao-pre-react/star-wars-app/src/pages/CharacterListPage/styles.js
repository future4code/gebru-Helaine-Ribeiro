import styled from "styled-components"

export const CharacterCard= styled.div`

  display:flex;
  flex-wrap: wrap;
  font-size: calc(10px + 2vmin);
  justify-content: space-between;
  margin-top:8%;
  text-align: center; 
   
`
export const  CharacterButton= styled.button`
  font-weight:bold;
  color: black; 
  padding: 5px 22px ;
  text-align: center;
  justify-content: space-between;
  -webkit-clip-path: polygon(74% 7%, 89% 49%, 77% 90%, 8% 90%, 15% 47%, 9% 6%);
  clip-path: polygon(74% 7%, 89% 49%, 77% 90%, 8% 90%, 15% 47%, 9% 6%) ;
  border: black;
  background-color: brown;
  border: 10px solid red;
  &:hover {
        cursor: pointer;
        color:  blue;
    }
  font-size: calc(10px + 0.5vmin);

`


export const CharacterContainer= styled.div`
 
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

   `

   
   export const Characterh1= styled.h1`
   -webkit-text-stroke: 1px red;
   color: black;
    padding:10px ;
    &:hover {
        cursor: pointer;
        color:  red;
    } 
    margin-top:30px;
    text-shadow: 2px 4px black;
    font-size: calc(10px + 15vmin);
    text-shadow: 0.1em 0.1em 0.1em black;
    -webkit-animation: scale-down-ver-center 6s infinite ;
	  animation: scale-down-ver-center 6s infinite ;
    @-webkit-keyframes scale-down-ver-center {
  0% {
    -webkit-transform: scaleY(2);
            transform: scaleY(2);
  }
  100% {
    -webkit-transform: scaleY(0.8);
            transform: scaleY(0.8);
  }
}
@keyframes scale-down-ver-center {
  0% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
            color: red;
  }
  100% {
    -webkit-transform: scaleY(0.8);
            transform: scaleY(0.8);
  }
}
`
   
