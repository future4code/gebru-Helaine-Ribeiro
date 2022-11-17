/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import {
  BrowserRouter, Routes,Route} from "react-router-dom";
import Details from './pages/details';


ReactDOM.render(

 <BrowserRouter>
 <Routes>
 <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>

         
       </Routes>
       </BrowserRouter>,
       document.getElementById('root')
       
    
); */

/*ReactDOM.createRoot(document.getElementById('root'));
root.render( */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';
import './global.css'
 

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
