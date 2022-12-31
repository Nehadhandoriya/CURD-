import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import Adduser from './Components/Adduser';
import Alluser from './Components/Alluser';
import Edituser from './Components/Edituser';
import {BrowserRouter,  Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/add' element={<Adduser/>}/>
     <Route path='/all' element={<Alluser/>}/>
     <Route path='/edit/:id'element={<Edituser/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
