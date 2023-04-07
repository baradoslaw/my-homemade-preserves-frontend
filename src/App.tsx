import React from 'react';
import './App.css';
import {Header} from "./components/layout/Header";
import {MainView} from "./components/MainView/MainView";
import {Register} from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <Header/>
      <MainView/>
      {/*<Register/>*/}
    </div>
  );
}

export default App;
