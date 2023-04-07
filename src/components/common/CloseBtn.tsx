import React, {SyntheticEvent, useContext} from "react";

import './CloseBtn.css';
import {AppContext} from "../../contexts/app.context";

export const CloseBtn = () => {
  const {setAppContext} = useContext(AppContext);

  const setAppContextFromLocalState = (e: SyntheticEvent) => {
    e.preventDefault();
    setAppContext('standard');
  };

  return (
    <button type="button" className="btn-close" onClick={setAppContextFromLocalState}>
      Zamknij
    </button>
  );
};
