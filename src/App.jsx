import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Section from './components/section/section';
import AboutSection from './components/about-section/about-section';

class App extends Component {
  render() {
    return (
      <div>
          <Header></Header>
          <main>
              <AboutSection></AboutSection>
          </main>
      </div>
    );
  }
}

export default App;
