import React from 'react';
import './App.css';
import Profile from './Componets/Profile';
import Humberger from './Componets/Humberger';
import Menubar from './Componets/Menubar';
import Introduce from './Componets/Introduce';
import About from './Componets/About';
import Skills from './Componets/Skills';
import Protfolio from './Componets/Protfolio';
const App = () => {
  return (
    <div className="app-container mt-8">
      <Profile/>
      <div className="content mt-3">
       <Introduce/>
        <About/>
        <Skills/>
        <Protfolio/>
      </div>
      <div className="menu flex flex-col items-center mt-10">
        <Humberger/>
        <Menubar/>
      
      </div>
    </div>
  );
};

export default App;
