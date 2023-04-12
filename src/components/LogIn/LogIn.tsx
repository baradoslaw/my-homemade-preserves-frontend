import React, {SyntheticEvent, useContext, useState} from 'react';

import './LogIn.css';
import {AppContext} from "../../contexts/app.context";
import {CloseBtn} from "../common/CloseBtn";

interface Props {
  user: string;
  setUser: (value: string | ((prevVal: string) => string)) => void;
}

export const LogIn = (props: Props) => {
  const {appContext, setAppContext} = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    login: '',
    pwd: '',
  });

  const logIn = async (e: SyntheticEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(`http://localhost:3001/user/log-in`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
        }),
      });

      const data = await res.json();

      if (data.user.id !== undefined) {
        props.setUser(data.user.id);
        document.cookie = `sessionId=${data.sessionId}`;
        document.cookie = `userId=${data.user.id}`;
        setAppContext('loggedIn');
      }
    } finally {
      setLoading(false);
    }
  }

  const updateForm = (key: string, value: any) => {
    setForm(form => ({
      ...form,
      [key]: value,
    }));
  };

  if (loading) {
    return <h2>Trwa logowanie...</h2>
  }

  return (
    <form action="" className="log-in-form" onSubmit={logIn} style={{display: appContext === 'logging' ? 'block' : 'none'}}>
      <h2>Logowanie</h2>
      <div>
        <label>
          <p className="label-name">Login:</p>
          <p className="label-field"><input
            type="text"
            name="login"
            required
            maxLength={20}
            value={form.login}
            onChange={e => updateForm('login', e.target.value)}
          /></p>
        </label>
      </div>
      <div>
        <label>
          <p className="label-name">Hasło:</p>
          <p className="label-field"><input
            type="password"
            name="pwd"
            required
            maxLength={20}
            value={form.pwd}
            onChange={e => updateForm('pwd', e.target.value)}
          /></p>
        </label>
      </div>
      <div className="btn-log-in-wrapper">
        <input
          className="btn-log-in"
          type="submit"
          value="Zaloguj"
        />
      </div>
      <div className="btn-log-in-wrapper">
        <CloseBtn/>
      </div>
    </form>
  );
};
