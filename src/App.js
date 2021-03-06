import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from "./pages/todo";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo Redux App</h1>
        </header>
        <Todo />
      </div>
    </ReduxProvider>
  );
}

export default App;
