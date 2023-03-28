import React from 'react';
import './App.css';
import {Header} from "./components/layout/Header";
import {MainView} from "./components/MainView/MainView";

function App() {
  return (
    <div className="App">
      <Header/>
      <MainView/>
    </div>
  );
}

export default App;
