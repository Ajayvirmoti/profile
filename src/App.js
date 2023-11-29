// src/App.js
import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import "./App.css";
import SideBar from './Components/SideBar';
import { Triangle } from 'react-loader-spinner'
import Resume from "./Components/Resume/Resume.js";
const App = () => {
  return (
    <div className='App'>
      <div className='App-Body'>
        <NavBar />
        <SideBar className="side-bar" />
      </div>
    </div>

  );
};

export default App;
