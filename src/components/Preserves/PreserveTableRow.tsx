import React from 'react';
import {PreserveEntityReadyToSend} from "types";

interface Props {
  preserve: PreserveEntityReadyToSend;
  setSinglePreserve: (value: PreserveEntityReadyToSend | null | ((prevVal: PreserveEntityReadyToSend | null) => PreserveEntityReadyToSend | null)) => void;
}

export const PreserveTableRow = (props: Props) => {
  return (
    <tr>
      <td><a href="#" onClick={() => props.setSinglePreserve(props.preserve)}>{props.preserve.name}</a></td>
      <td>{props.preserve.typeName}</td>
      <td>{props.preserve.description}</td>
      <td>
        <a href="#">Usuń️</a>
      </td>
    </tr>
  );
};
