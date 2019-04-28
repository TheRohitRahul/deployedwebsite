import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import MainRouter from './components/MainRouter'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <MainRouter/>
    </React.Fragment>
  );
}

export default App;
