import React from 'react';
import './App.css';
import Profile from './Componets/Profile';
import Humberger from './Componets/Humberger';
import Menubar from './Componets/Menubar';
import Content from './Componets/Content';
const App = () => {
  return (
    <>
    <div className="app-container mt-8  ">
      <div>
      <Profile /> 
      </div>
      <div className="content ">
 <Content/>
      </div>
      <div className="menu flex flex-col items-center mt-10">
        <Humberger />
        <Menubar />
      </div>
    </div>
     
    </>
  );
};

export default App;
