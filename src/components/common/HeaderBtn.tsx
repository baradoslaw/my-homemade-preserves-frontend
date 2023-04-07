import React, {SyntheticEvent, useContext} from 'react';

import './HeaderBtn.css';
import {AppContext} from "../../contexts/app.context";

interface Props {
  text: string;
  btnType: 'registering' | 'logging';
  last?: 'last';
}

export const HeaderBtn = (props: Props) => {
  const {appContext, setAppContext} = useContext(AppContext);

  const setAppContextFromLocalState = (e: SyntheticEvent) => {
    setAppContext(props.btnType);
  };

  return (
    <div
      className="header-btn"
      onClick={setAppContextFromLocalState}
      style={{borderRight: props.last !== 'last' ? "2px solid #ec5514" : 'none'}}
    >
      {props.text}
    </div>
  );
}
