import React from 'react';

import './Header.css';
import {Logo} from "../Logo/Logo";
import {HeaderBtn} from "../common/HeaderBtn";

export const Header = () => {
  return (
    <header>
      <Logo/>
      <div className="btnWrapper">
        <HeaderBtn text="Zaloguj" btnType="logging"/>
        <HeaderBtn text="Zarejestruj" btnType="registering" last="last"/>
      </div>
    </header>
  );
};
