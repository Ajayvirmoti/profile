// src/App.js
import React, { useState,useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar';
import "./App.css";
import SideBar from './Components/SideBar';
import { Triangle } from 'react-loader-spinner'
import Resume from "./Components/Resume/Resume.js";
import AnimatedCursor from 'react-animated-cursor';
import Inventory from './Components/Inventory/Inventory.js';
import { SlArrowDown } from 'react-icons/sl';
import { color, motion } from 'framer-motion';
import { useScroll } from 'framer-motion';
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import particlesOptions from "./particles.json";
import ScrollAnimation from 'react-animate-on-scroll';
const App = () => {
  //Particle 
  const [init, setInit] = useState(false);

  useEffect(() => {
      if (init) {
          return;
      }

      initParticlesEngine(async (engine) => {
          await loadFull(engine);
      }).then(() => {
          setInit(true);
      });
  }, []);

  //
  //

  const [atHome,setPage] = useState('False');
  const [isSnapped, setIsSnapped] = useState(false);
  
  const handleSnapClick = () => {
    setIsSnapped(true);

  }
  const nextPageHandler = () =>{

  }
  const { scrollYProgress } = useScroll();
  return (
    
    <div className="app">
      {init && <Particles options={particlesOptions}/>}
      
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        // color='60,90,255'
        color='255,255,255'
        outerAlpha={0.1}
        innerScale={2}
        outerScale={2}
        outerStyle={{
          mixBlendMode: 'exclusion'
        }}  
      />
      <div className='App-Body'>
        <NavBar />
        <SideBar className="side-bar" />
        <Inventory className="about"/>
      </div>
    </div>

  );
};
export default App;
