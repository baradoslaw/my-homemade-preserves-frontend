import React from 'react';

import './Header.css';
import {HeaderBtn} from "../common/HeaderBtn";

interface Props {
  setUser: (value: string | ((prevVal: string) => string)) => void;
}

export const Header = (props: Props) => {
  return (
    <header>
      <div className="app-name">My Homemade Preserves</div>
      <div className="btnWrapper">
        <HeaderBtn text="Zaloguj" btnType="logging"/>
        <HeaderBtn text="Zarejestruj" btnType="registering" last="last"/>
        <HeaderBtn text="Wyloguj" btnType="standard" last="last" setUser={props.setUser}/>
      </div>
    </header>
  );
};
