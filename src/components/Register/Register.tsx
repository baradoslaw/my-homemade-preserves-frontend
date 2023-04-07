import React, {SyntheticEvent, useState} from "react";

import './Register.css';

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    login: '',
    pwd: '',
    confirmPwd: '',
    email: '',
    name: '',
    surname: '',
  });

  const register = async (e: SyntheticEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(`http://localhost:3001/user/new-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: form.login,
          pwd: form.pwd,
          email: form.email,
          name: form.name,
          surname: form.surname,
        }),
      });

      const data = await res.json();
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
    return <h2>Trwa rejestracja...</h2>
  }

  return (
    <form action="" className="register-form" onSubmit={register}>
      <h2>Rejestracja</h2>
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
      <p>
        <label>
          <div className="label-name">Potwierdź hasło:</div>
          <div className="label-field"><input
            type="password"
            name="pwd"
            required
            maxLength={20}
            value={form.confirmPwd}
            onChange={e => updateForm('confirmPwd', e.target.value)}
          /></div>
        </label>
      </p>
      <p>
        <label>
          <div className="label-name">Adres e-mail:</div>
          <div className="label-field"><input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={e => updateForm('email', e.target.value)}
          /></div>
        </label>
      </p>
      <p>
        <label>
          <div className="label-name">Imię:</div>
          <div className="label-field"><input
            type="text"
            name="name"
            value={form.name}
            onChange={e => updateForm('name', e.target.value)}
          /></div>
        </label>
      </p>
      <p>
        <label>
          <div className="label-name">Nazwisko:</div>
          <div className="label-field"><input
            type="text"
            name="surname"
            value={form.surname}
            onChange={e => updateForm('surname', e.target.value)}
          /></div>
        </label>
      </p>
      <p className="btn-register-wrapper">
        <input
          className="btn-register"
          type="submit"
          value="Zarejestruj"
        />
      </p>
    </form>
  );
};
