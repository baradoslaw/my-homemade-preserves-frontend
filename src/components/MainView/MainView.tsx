import React from 'react';

import './MainView.css';
import {Logo} from "../Logo/Logo";

export const MainView = () => {
  return (
    <div className="wrapper">
      <main>
        <Logo/>
        <p className="main-text">My Homemade Preserves pozwala na zapisywanie informacji na temat domowych przetworów, jakimi się zajmujesz.</p>
      </main>
    </div>
  );
};
