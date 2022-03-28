import React, { useState } from 'react';
import TinderCard from './components/TinderCard';
import TinderCardMacthes from './components/TinderCardMatches';
//import TinderCardMacthes from './components/TinderCardMatches';
import Header from './Header';
//import SwipeButton from './components/SwipeButton';



const App = () => {


  return (
    <div className="App">
      <Header/>
      <TinderCard/>
    
      {/**<TinderCardMacthes/> */}
       
      
      <button>Limpar swipes e matches</button>
      
    </div>
  );
}

export default App;
