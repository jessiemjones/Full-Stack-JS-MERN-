import React from 'react';
import './App.css';
import Form from './Form';
import TodoList from './TodoList';

const App = (props) => {
  return (
    <div>
      <Form button="Submit" type="add"/>
      <TodoList  age={45} isAlive={true}/> 
    </div>
  );
};

export default App;

//age and isAlive would be the props at the bottom of TodoProvider.  Provider has ...props, so ALL props are available

