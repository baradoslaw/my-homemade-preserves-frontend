import React from 'react';
import {PreserveEntityReadyToSend} from "types";
import {PreserveTableRow} from "./PreserveTableRow";

import './PreservesTable.css';

interface Props {
  preserves: PreserveEntityReadyToSend[];
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
        <PreserveTableRow preserve={preserve} key={preserve.id}/>
      ))
    }
    </tbody>
  </table>
);
