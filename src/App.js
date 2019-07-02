import React, { Component } from 'react';
import './App.css';
import Navbar from './component/layout/Navbar';
import UserItem from './component/users/UserItem';



class App extends Component {

  render() {


    return (
      <div className="App" >
        <Navbar />
        <UserItem />
      </div>


    );
  }

}

export default App;
