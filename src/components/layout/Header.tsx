import React from 'react';

import './Header.css';
import {Logo} from "../Logo/Logo";
import {HeaderBtn} from "../common/HeaderBtn";

interface Props {
  setUser: (value: string | ((prevVal: string) => string)) => void;
}

export const Header = (props: Props) => {
  return (
    <header>
      <Logo/>
      <div className="btnWrapper">
        <HeaderBtn text="Zaloguj" btnType="logging"/>
        <HeaderBtn text="Zarejestruj" btnType="registering" last="last"/>
        <HeaderBtn text="Wyloguj" btnType="standard" last="last" setUser={props.setUser}/>
      </div>
    </header>
  );
};
