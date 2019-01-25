import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import Content from './components/Content';
import {Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Elements />
    );
  }
}

class Elements extends Component {
  render(){
    return(
      <div>
        <Header />
        <Sidebar />
        <Content />
      </div>
    )
  }
}

export default App;



