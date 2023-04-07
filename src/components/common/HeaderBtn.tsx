import React, {SyntheticEvent, useContext} from 'react';

import './HeaderBtn.css';
import {AppContext} from "../../contexts/app.context";

interface Props {
  text: string;
  btnType: 'registering' | 'logging';
}

export const HeaderBtn = (props: Props) => {
  const {appContext, setAppContext} = useContext(AppContext);

  const setAppContextFromLocalState = (e: SyntheticEvent) => {
    setAppContext(props.btnType);
  };

  return (
    <div className="header-btn" onClick={setAppContextFromLocalState}>{props.text}</div>
  );
}
