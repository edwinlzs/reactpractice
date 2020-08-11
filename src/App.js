import React, { Component } from 'react';
import Button from './components/Button';
import "./css/app.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="title">
          To-do list
        </div>
        <div className="add-button">
          <input className='text-box' type='text' placeholder='Add to list'/>
          <Button displayText='Add' backgroundColor='#ffc021' fontColor='white'/>
        </div>
      </div>
    )
  }
}

export default App;
