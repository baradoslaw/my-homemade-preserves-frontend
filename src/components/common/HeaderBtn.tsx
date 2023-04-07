import React from 'react';

import './HeaderBtn.css';

interface Props {
  text: string;
}

export const HeaderBtn = (props: Props) => {
  return (
    <div className="header-btn">{props.text}</div>
  );
}
