import React, { Component } from 'react';
import Header from './components/Header';
import ContactDetails from './components/ContactDetails';
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience';
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="main">
        { <div className="left-container">
          <ContactDetails />
          <Skills />
        </div> }
        <div className="right-container">
          <Header />
          <Education />
          <Experience />
        </div>
      </div>
    )
  }
}