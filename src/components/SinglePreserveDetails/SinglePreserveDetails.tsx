import React from 'react';
import {PreserveEntityReadyToSend} from "types";

import './SinglePreserveDetails.css';

interface Props {
  preserve: PreserveEntityReadyToSend | null;
  setPreserve: (value: PreserveEntityReadyToSend | null | ((prevVal: PreserveEntityReadyToSend | null) => PreserveEntityReadyToSend | null)) => void;
}

export const SinglePreserveDetails = (props: Props) => {
  if (props.preserve === null) {
    return <></>;
  }

  return (
    <div className="single-preserve-details-box">
      <h2>{props.preserve.name}</h2>
      <p className="preserve-type"><span className="field-name">Rodzaj: </span>{props.preserve.typeName}</p>
      <p className="preserve-description"><span className="field-name">Opis: </span>{props.preserve.description}</p>
      <button type="button" className="btn-close" onClick={() => props.setPreserve(null)}>
        Zamknij
      </button>
    </div>
  );
};
