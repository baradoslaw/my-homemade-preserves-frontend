import React, {SyntheticEvent, useState} from 'react';

import './AddPreserveForm.css';

interface Props {
  addFormVisibility: boolean;
  setAddFormVisibility: (value: boolean | ((prevVal: boolean) => boolean)) => void;
  user: string;
  refreshItems: () => Promise<void>
}

export const AddPreserveForm = (props: Props) => {
  const [form, setForm] = useState({
    name: '',
    typeName: 'Inne',
    description: '',
  });

  const addPreserve = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch(`http://localhost:3001/preserve/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...form,
        userId: props.user,
      }),
    });

    await props.refreshItems();
    props.setAddFormVisibility(false);
  }

  const updateForm = (key: string, value: any) => {
    setForm(form => ({
      ...form,
      [key]: value,
    }));
  };

  return (
    <form action="" className="add-preserve-form" onSubmit={addPreserve}
          style={{display: props.addFormVisibility ? 'block' : 'none'}}>
      <h2>Dodawanie przetworu</h2>
      <div>
        <label>
          <p className="label-name">Nazwa:</p>
          <p className="label-field"><input
            type="text"
            name="name"
            required
            maxLength={20}
            value={form.name}
            onChange={e => updateForm('name', e.target.value)}
          /></p>
        </label>
      </div>
      <div>
        <label>
          <p className="label-name">Typ przetworu:</p>
          <p className="label-field"><select
            name="typeName"
            required
            value={form.typeName}
            onChange={e => updateForm('typeName', e.target.value)}
          >
            <option value="Marmolada">Marmolada</option>
            <option value="Dżem">Dżem</option>
            <option value="Piwo">Piwo</option>
            <option value="Wino">Wino</option>
            <option value="Kiszonka">Kiszonka</option>
            <option value="Sok">Sok</option>
            <option value="Nalewka">Nalewka</option>
            <option value="Kandyzowane owoce">Kandyzowane owoce</option>
            <option value="Suszonka">Suszonka</option>
            <option value="Konserwa">Konserwa</option>
            <option value="Inne">Inne</option>
          </select></p>
        </label>
      </div>
      <div>
        <label>
          <p className="label-name">Opis:</p>
          <p className="label-field"><textarea
            name="description"
            required
            value={form.description}
            onChange={e => updateForm('description', e.target.value)}
          /></p>
        </label>
      </div>
      <div className="btn-add-preserve-wrapper">
        <input
          className="btn-add-preserve"
          type="submit"
          value="Dodaj"
        />
      </div>
      <div className="btn-add-preserve-wrapper">
        <button className="btn-add-preserve" onClick={() => props.setAddFormVisibility(false)}>
          Zamknij
        </button>
      </div>
    </form>
  );
};
