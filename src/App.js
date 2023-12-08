// src/App.js
import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import "./App.css";
import SideBar from './Components/SideBar';
import { Triangle } from 'react-loader-spinner'
import Resume from "./Components/Resume/Resume.js";
import AnimatedCursor from 'react-animated-cursor';
import Inventory from './Components/Inventory/Inventory.js';
import { SlArrowDown } from 'react-icons/sl';


const App = () => {
  const [atHome,setPage] = useState('False');
  const [isSnapped, setIsSnapped] = useState(false);

  const handleSnapClick = () => {
    setIsSnapped(true);

  }
  const nextPageHandler = () =>{

  }
  return (
    
    <div className="app">
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color='255,255,255'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        // outerStyle={{
        //   mixBlendMode: 'exclusion'
        // }}  
      />
      <div className='App-Body'>
        <NavBar />
        <SideBar className="side-bar" />
        <Inventory/>

      </div>
    </div>

  );
};

export default App;
