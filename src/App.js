import React from 'react';
import './App.css';
import HelloWorld from './component/HelloWorld';
//import Navbar from './component/Navbar';

import Header from './component/header';
import Home from './component/home';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;