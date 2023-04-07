import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/layout/Header";
import {MainView} from "./components/MainView/MainView";
import {Register} from "./components/Register/Register";
import {AppContext} from "./contexts/app.context";
import {FormBackground} from "./components/layout/FormBackground";
import {LogIn} from "./components/LogIn/LogIn";

function App() {
  const [appContext, setAppContext] = useState('standard');
  const [user, setUser] = useState('');

  return (
    <AppContext.Provider value={{appContext, setAppContext}}>
      <div className="App">
        <Header/>
        <MainView/>
        <FormBackground/>
        <Register/>
        <LogIn user={user} setUser={setUser}/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
