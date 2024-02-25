// src/App.js
import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar';
import "./App.css";
import AnimatedCursor from 'react-animated-cursor';
import Inventory from './Components/Inventory/Inventory.js';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import Footer from './Components/Footer/Footer.js';
import { Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact/Contact.js';
const App = () => {
  const [isPhone, setPhone] = useState(true);
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

  const Home = () => {
    return (
      <div className="app" >
        {/*  */}

      </div>
    )
  }
  const audioPath = process.env.PUBLIC_URL + '/thanos_dust_1.mp3';
  return (
    <div className='App'>
      {init && <Particles options={particlesOptions} />}
      <audio autoPlay>
        <source src={audioPath} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <NavBar />
      <div className="app__body">
        {isPhone ? <AnimatedCursor
          innerSize={8}
          outerSize={35}
          color='255, 255, 205'
          outerAlpha={0.1}
          innerScale={2}
          outerScale={2}

        /> : ""}
        <div className='App-Body'>
          {/* <Inventory /> */}
          <Routes>
            <Route path='/' element={<Inventory />} />
            <Route path='/Contact' element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default App;
