import React from 'react';

import './Header.css';
import {Logo} from "../Logo/Logo";
import {HeaderBtn} from "../common/HeaderBtn";

export const Header = () => {
  return (
    <header>
      <Logo/>
      <div className="btnWrapper">
        <div className="btn">Zaloguj</div>
        <HeaderBtn text="Zarejestruj"/>
      </div>
    </header>
  );
};
