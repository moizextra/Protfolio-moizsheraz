import React from 'react';
import './App.css';
import Profile from './Componets/Profile';
import Content from './Componets/Content';
const App = () => {
  return (
    <>
    <div className="app-container mt-8  ">
      <Profile /> 
      <Content/>

      {/* <div className="menu flex flex-col items-center mt-10">
        <Humberger />
        <Menubar />
      </div> */}
    </div>
     
    </>
  );
};

export default App;
