import React from 'react';

import './Header.css';

export const Header = () => {
  return (
    <header>
      <div className="logo">My Homemade Preserves</div>
      <div className="btnWrapper">
        <div className="btn">Zaloguj</div>
        <div className="btn">Zarejestruj</div>
      </div>
    </header>
  );
};
