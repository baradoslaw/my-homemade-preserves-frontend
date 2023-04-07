import React, {useContext} from 'react';

import './FormBackground.css';
import {AppContext} from "../../contexts/app.context";

export const FormBackground = () => {
  const {appContext, setAppContext} = useContext(AppContext);

  const setAppContextFromLocalState = () => {
    setAppContext('standard');
  };

  return (
    <div
      className="form-background"
      style={{display: appContext === 'registering' || appContext === 'logging' ? 'block' : 'none'}}
      onClick={setAppContextFromLocalState}
    />
  );
};
