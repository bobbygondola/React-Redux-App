import React from 'react';
import './App.css';
import Home from './components/home'

function App() {
  return (
    <div className="App">
      <nav>
        <span>Home</span><span>About</span><span>Donate Now!</span><span>All About Crypto!</span>
      </nav>
      <h1>CryptoBase.com</h1>
      <p>We keep track of your coins</p>
      <Home />
    </div>
  );
}

export default App;
