import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';

//Define a new type Person
type Person = {
  id: number;
  name: string;
  age?: number; //Add ? to make the age optional for the type
}

//Extend a type to add additional properties
type PersonExt = Person & { //You can use an interface to extend as an alternative
  favoriteSnack: string;
}

//Interfaces are similar to types
interface Person2 {
  id: number;
  name: string;
  age?: number | string; //Use | to allow an alternate type
}

//Extend the Person2 interface
interface Person2Ext extends Person2 { //You can use a type to extend as well
  favoriteSnack: string | null;
}

 

const App: React.FC = () => {

  //Gets the state for the InputField for new tasks.
  const [todo, setTodo] = useState<string>("");
  
  //State to track the todo list items added to the list.
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (e:React.FormEvent) => {
    e.preventDefault();

    if (todo.length !== 0) {
      setTodos([...todos, {id: Date.now(), todo, isDone: false}]);
      setTodo("");
    }
      
  };
  
  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Tasky McTaskFace</span>
      {/* Add component containing input field to get new tasks */}
      <InputField todo={todo} setTodo={setTodo} addTodo={addTodo}/>

      {/* List of Todo items rendered for the user */}
      <TodoList todos={todos} setTodos={setTodos}/>

    </div>
  );

  // Original app that was returned 
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <p>Hello World!</p>

        
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}



export default App;
