import React from "react";
import  {Router}  from "./routes/Router";


const App=()=>{
  return(
    <div>
      <Router/>
    </div>
    
  )
}

export default App


/*
import React, { useState } from "react"
import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage"
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage"

function App() {
  const [currentPage, setCurrentPage] = useState("list")
  const [detailsUrl, setDetailsUrl] = useState("")

  function goToDetailsPage(url) {
    setCurrentPage("details")
    setDetailsUrl(url)
  }

  function goToListPage() {
    setCurrentPage("list")
  }

  function selectPage() {
    if (currentPage === "list") {
      return <CharacterListPage goToDetailsPage={goToDetailsPage} />
    } else {
      return <CharacterDetailPage goToListPage={goToListPage} url={detailsUrl} />
    }
  }

  return (
    <div className="App">
      {selectPage()}
    </div>
  );
}

export default App;

 */

