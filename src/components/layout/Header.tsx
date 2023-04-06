import React from 'react';

import './Header.css';
import {Logo} from "../Logo/Logo";

export const Header = () => {
  return (
    <header>
      <Logo/>
      <div className="btnWrapper">
        <div className="btn">Zaloguj</div>
        <div className="btn">Zarejestruj</div>
      </div>
    </header>
  );
};
