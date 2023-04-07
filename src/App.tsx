import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/layout/Header";
import {MainView} from "./components/MainView/MainView";
import {Register} from "./components/Register/Register";
import {AppContext} from "./contexts/app.context";

function App() {
  const [appContext, setAppContext] = useState('standard');

  return (
    <AppContext.Provider value={{appContext, setAppContext}}>
      <div className="App">
        <Header/>
        <MainView/>
        <Register/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
