import React from 'react';

import './ShowAddPreserveBtn.css';

interface Props {
  setAddFormVisibility: (value: boolean| ((prevVal: boolean) => boolean)) => void;
}

export const ShowAddPreserveBtn = (props: Props) => {
  return (
    <button className="btn-show-add-preserve" onClick={() => props.setAddFormVisibility(true)}>
      Dodaj nowy wyrób
    </button>
  )
}
