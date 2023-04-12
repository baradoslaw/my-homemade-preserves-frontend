import React, {useContext} from 'react';

import './HeaderBtn.css';
import {AppContext} from "../../contexts/app.context";
import {PreserveEntityReadyToSend} from "types";

interface Props {
  text: string;
  btnType: 'registering' | 'logging' | 'standard';
  last?: 'last';
  setUser?: (value: string | ((prevVal: string) => string)) => void;
  setItems: (value: PreserveEntityReadyToSend[] | null | 'loading' | ((prevVal: PreserveEntityReadyToSend[] | null | 'loading') => PreserveEntityReadyToSend[] | null | 'loading')) => void;
}

export const HeaderBtn = (props: Props) => {
  const {appContext, setAppContext} = useContext(AppContext);

  const setAppContextFromLocalState = async () => {
    if (props.btnType === 'standard' && props.setUser) {
      await fetch(`http://localhost:3001/user/log-out`, {
        method: 'DELETE',
        credentials: "include",
      })

      document.cookie = "sessionId=null; expires=Sat, 20 Jan 1980 12:00:00 UTC"
      document.cookie = "userId=null; expires=Sat, 20 Jan 1980 12:00:00 UTC"
      props.setUser('');
      props.setItems(null);
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
