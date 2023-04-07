import React, {useContext, useState} from 'react';

import './LogIn.css';
import {AppContext} from "../../contexts/app.context";
import {CloseBtn} from "../common/CloseBtn";

export const LogIn = () => {
  const {appContext} = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    login: '',
    pwd: '',
  });

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
    <form action="" className="log-in-form" style={{display: appContext === 'logging' ? 'block' : 'none'}}>
      <h2>Logowanie</h2>
      <p>
        <label>
          <div className="label-name">Login:</div>
          <div className="label-field"><input
            type="text"
            name="login"
            required
            maxLength={20}
            value={form.login}
            onChange={e => updateForm('login', e.target.value)}
          /></div>
        </label>
      </p>
      <p>
        <label>
          <div className="label-name">Hasło:</div>
          <div className="label-field"><input
            type="password"
            name="pwd"
            required
            maxLength={20}
            value={form.pwd}
            onChange={e => updateForm('pwd', e.target.value)}
          /></div>
        </label>
      </p>
      <p className="btn-log-in-wrapper">
        <input
          className="btn-log-in"
          type="submit"
          value="Zaloguj"
        />
      </p>
      <p className="btn-log-in-wrapper">
        <CloseBtn/>
      </p>
    </form>
  );
};
