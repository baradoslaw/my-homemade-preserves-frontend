import React, {useContext} from 'react';

import './HeaderBtn.css';
import {AppContext} from "../../contexts/app.context";

interface Props {
  text: string;
  btnType: 'registering' | 'logging' | 'standard';
  last?: 'last';
  setUser?: (value: string | ((prevVal: string) => string)) => void;
}

export const HeaderBtn = (props: Props) => {
  const {appContext, setAppContext} = useContext(AppContext);

  const setAppContextFromLocalState = () => {
    if (props.btnType === 'standard' && props.setUser) {
      props.setUser('');
    }

    setAppContext(props.btnType);
  };

  return (
    <div
      className="header-btn"
      onClick={setAppContextFromLocalState}
      style={{
        borderRight: props.last !== 'last' ? "2px solid #ec5514" : 'none',
        display: (appContext === 'loggedIn' && props.btnType === 'standard') || (appContext !== 'loggedIn' && props.btnType !== 'standard') ? 'inline-block' : 'none'
      }}
    >
      {props.text}
    </div>
  );
}
