import React, { Component } from 'react';
import './App.css';
import ToDoList from './containers/ToDoList/ToDoList';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <h1 className="Title">Todo List</h1>
        <div className='AppCard'>
          <ToDoList />
        </div>
      </div>
    );
  }
}

export default App;
