import React from 'react';
import './App.css';
import Profile from './Componets/Profile';
import Content from './Componets/Content';
// import Navbar from './Componets/Navbar';
import Menubar from './Componets/Menubar';
const App = () => {
  return (
    <>
   
    <Menubar/>
    <div className="app-container">
      <Profile /> 
      <Content/>
    </div>

    </>
  );
};

export default App;
