import React from 'react';
import {PreserveEntityReadyToSend} from "types";
import {PreserveTableRow} from "./PreserveTableRow";

import './PreservesTable.css';

interface Props {
  preserves: PreserveEntityReadyToSend[];
  setSinglePreserve: (value: PreserveEntityReadyToSend | null | ((prevVal: PreserveEntityReadyToSend | null) => PreserveEntityReadyToSend | null)) => void;
}

export const PreservesTable = (props: Props) => (
  <table>
    <thead>
    <tr>
      <th>Nazwa</th>
      <th>Rodzaj</th>
      <th className="description">Opis</th>
      <th>Usuwanie</th>
    </tr>
    </thead>
    <tbody>
    {
      props.preserves.map(preserve => (
        <PreserveTableRow preserve={preserve} key={preserve.id} setSinglePreserve={props.setSinglePreserve}/>
      ))
    }
    </tbody>
  </table>
);
