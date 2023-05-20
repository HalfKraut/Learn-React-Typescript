import React from 'react';
import logo from './logo.svg';
import './App.css';

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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Hello World!</p>

        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



export default App;
