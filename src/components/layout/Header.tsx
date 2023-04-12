import React from 'react';

import './Header.css';
import {HeaderBtn} from "../common/HeaderBtn";
import {PreserveEntityReadyToSend} from "types";

interface Props {
  setUser: (value: string | ((prevVal: string) => string)) => void;
  setItems: (value: PreserveEntityReadyToSend[] | null | 'loading' | ((prevVal: PreserveEntityReadyToSend[] | null | 'loading') => PreserveEntityReadyToSend[] | null | 'loading')) => void;
}

export const Header = (props: Props) => {
  return (
    <header>
      <div className="app-name">My Homemade Preserves</div>
      <div className="btnWrapper">
        <HeaderBtn text="Zaloguj" btnType="logging" setItems={props.setItems}/>
        <HeaderBtn text="Zarejestruj" btnType="registering" last="last" setItems={props.setItems}/>
        <HeaderBtn text="Wyloguj" btnType="standard" last="last" setUser={props.setUser} setItems={props.setItems}/>
      </div>
    </header>
  );
};
