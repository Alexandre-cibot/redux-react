import React, { Component } from 'react';
import './App.css';

import InputTodo from './components/inputTodo';
import TodoList from './components/todoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;
