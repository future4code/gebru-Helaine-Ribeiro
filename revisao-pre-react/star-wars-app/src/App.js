import React from "react";
import { Router } from "./routes/Router";
//import React, {useState} from "react";
//import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";
//import CharacterListPage from "./pages/CharacterListPage/CharacterListPage"

/*utilizando useState para fazer a mudança de tela

const App =()=> {
  const [paginaInicial,setPaginaInicial] = useState("list")
 
  const selectPage=()=>{
    if(paginaInicial === "list"){
      return  <CharacterListPage/>
    }else{
      return <CharacterDetailPage/> 
    }
  }
 
  return (
    <div >
      {selectPage ()}
      
    </div>
  );
}

export default App;
*/

const App =()=> {
  return (
    <div >
     <Router/>
      
    </div>
  );
}

export default App;

