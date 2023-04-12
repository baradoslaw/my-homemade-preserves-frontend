import React, {useContext, useEffect, useState} from 'react';

import './MainView.css';
import {Logo} from "../Logo/Logo";
import {PreserveEntityReadyToSend} from 'types';

import {AppContext} from "../../contexts/app.context";
import {PreservesTable} from "../Preserves/PreservesTable";
import {SinglePreserveDetails} from "../SinglePreserveDetails/SinglePreserveDetails";

interface Props {
  user: string;
}

export const MainView = (props: Props) => {
  const {appContext} = useContext(AppContext);
  const [items, setItems] = useState<PreserveEntityReadyToSend[] | null | 'loading'>(null);
  const [singleItemView, setSingleItemView] = useState<PreserveEntityReadyToSend | null>(null);

  const refreshItems = async () => {
    setItems('loading');

    const res = await fetch(`http://localhost:3001/preserve/for-user/${props.user}`);
    const data = await res.json();

    setItems(data);
  };

  useEffect(() => {
    if (appContext === 'loggedIn') {
      (async () => {
        await refreshItems();
      })();
    }
  }, [appContext]);

  if (items === null) {
    return (
      <div className="wrapper">
        <main>
          <Logo/>
          <p className="main-text">My Homemade Preserves pozwala na zapisywanie informacji na temat domowych przetworów,
            jakimi się zajmujesz.</p>
        </main>
      </div>
    );
  }

  if (items === 'loading') {
    return (
      <div className="wrapper">
        <main>
          <Logo/>
          <p className="main-text">Wczytywanie wyrobów...</p>
        </main>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <main>
        <SinglePreserveDetails preserve={singleItemView} setPreserve={setSingleItemView}/>
        <h1>Twoje wyroby:</h1>
        <PreservesTable preserves={items} setSinglePreserve={setSingleItemView}/>
      </main>
    </div>
  )
};
