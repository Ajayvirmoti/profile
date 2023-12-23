// src/App.js
import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar';
import "./App.css";
// import { Canvas } from 'react-three-fiber';
// import SideBar from './Components/SideBar/SideBar.js';
// import { Triangle } from 'react-loader-spinner'
// import Resume from "./Components/Resume/Resume.js";
import AnimatedCursor from 'react-animated-cursor';
import Inventory from './Components/Inventory/Inventory.js';
// import { SlArrowDown } from 'react-icons/sl';
// import { color, motion } from 'framer-motion';
// import { useScroll } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
// import ScrollAnimation from 'react-animate-on-scroll';
// import Jello from 'react-reveal/Jello';
import Footer from './Components/Footer/Footer.js';
import { Link, Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact/Contact.js';
// import ReactAudioPlayer from 'react-audio-player';
// import AUDIO from "..public/";

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

  // const [atHome, setPage] = useState('False');
  // const [isSnapped, setIsSnapped] = useState(false);
  // const { scrollYProgress } = useScroll();


  const Home = () => {
    return (
      <div className="app" >
        {init && <Particles options={particlesOptions} />}
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
          {/* <Inventory /> */}
          <Routes>
            <Route path='/' element={<Inventory/>}/>
            <Route path='/Contact' element={<Contact/>}/>
          </Routes>
          <Footer />
        </div>
      </div>
    )
  }
  const audioPath = process.env.PUBLIC_URL + '/thanos_dust_1.mp3';
  return (
    <div className='App'>
      <audio autoPlay>
        <source src={audioPath} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <NavBar />
      <Home />
    </div>
  );
};
export default App;
