import React, {SyntheticEvent} from 'react';
import {PreserveEntityReadyToSend} from "types";

interface Props {
  preserve: PreserveEntityReadyToSend;
  setSinglePreserve: (value: PreserveEntityReadyToSend | null | ((prevVal: PreserveEntityReadyToSend | null) => PreserveEntityReadyToSend | null)) => void;
  refreshItems: () => Promise<void>;
}

export const PreserveTableRow = (props: Props) => {
  const deletePreserve = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch(`http://localhost:3001/preserve/delete/${props.preserve.id}`, {
      method: 'DELETE',
    });

    await props.refreshItems();
  };

  return (
    <tr>
      <td><a href="#" onClick={() => props.setSinglePreserve(props.preserve)}>{props.preserve.name}</a></td>
      <td>{props.preserve.typeName}</td>
      <td>{props.preserve.description}</td>
      <td>
        <a href="#" onClick={deletePreserve}>Usuń️</a>
      </td>
    </tr>
  );
};
