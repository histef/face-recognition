import React, { Component } from 'react';
import Nav from './components/navigation/Nav';
import Logo from './components/logo/Logo';
import Rank from './components/Rank/Rank';
import ImgLinkForm from './components/ImgLinkForm/ImgLinkForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Logo />
        <Rank />
        <ImgLinkForm />
      </div>
    );
  }
}

export default App;
