import React from 'react';
import {PreserveEntityReadyToSend} from "types";

interface Props {
  preserve: PreserveEntityReadyToSend;
}

export const PreserveTableRow = (props: Props) => {
  return (
    <tr>
      <td>{props.preserve.name}</td>
      <td>{props.preserve.typeName}</td>
      <td>{props.preserve.description}</td>
      <td>
        <a href="#">Usuń️</a>
      </td>
    </tr>
  );
};
