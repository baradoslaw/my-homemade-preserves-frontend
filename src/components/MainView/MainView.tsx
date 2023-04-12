import React, {useContext, useEffect, useState} from 'react';

import './MainView.css';
import {Logo} from "../Logo/Logo";
import {PreserveEntityReadyToSend} from 'types';

import {AppContext} from "../../contexts/app.context";
import {PreservesTable} from "../Preserves/PreservesTable";
import {SinglePreserveDetails} from "../SinglePreserveDetails/SinglePreserveDetails";
import {ShowAddPreserveBtn} from "../AddPreserve/ShowAddPreserveBtn";
import {AddPreserveForm} from "../AddPreserve/AddPreserveForm";

interface Props {
  user: string;
  items: PreserveEntityReadyToSend[] | null | 'loading';
  setItems: (value: PreserveEntityReadyToSend[] | null | 'loading' | ((prevVal: PreserveEntityReadyToSend[] | null | 'loading') => PreserveEntityReadyToSend[] | null | 'loading')) => void;
}

export const MainView = (props: Props) => {
  const {appContext} = useContext(AppContext);
  const [singleItemView, setSingleItemView] = useState<PreserveEntityReadyToSend | null>(null);
  const [addFormVisibility, setAddFormVisibility] = useState<boolean>(false);

  const refreshItems = async () => {
    props.setItems('loading');

    const res = await fetch(`http://localhost:3001/preserve/for-user/${props.user}`, {
      credentials: "include",
    });
    const data = await res.json();

    props.setItems(data);
  };

  useEffect(() => {
    if (appContext === 'loggedIn') {
      (async () => {
        await refreshItems();
      })();
    }
  }, [appContext]);

  if (props.items === null) {
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

  if (props.items === 'loading') {
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
        <AddPreserveForm addFormVisibility={addFormVisibility} setAddFormVisibility={setAddFormVisibility} user={props.user} refreshItems={refreshItems}/>
        <h1>Twoje wyroby:</h1>
        <PreservesTable preserves={props.items} setSinglePreserve={setSingleItemView} refreshItems={refreshItems}/>
        <div className="btn-wrapper">
          <ShowAddPreserveBtn setAddFormVisibility={setAddFormVisibility}/>
        </div>
      </main>
    </div>
  )
};
