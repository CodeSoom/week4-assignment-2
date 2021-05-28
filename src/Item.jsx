import React from 'react';

export default function Item({ list }) {
  return (
    <li>
      {list.listNm}
      {list.listSort}
      {list.listAddr}
    </li>
  );
}
