import React from 'react';

import Item from './Item';

export default function List({ lists }) {
  return (
    <ol>
      {lists.map((list) => (
        <Item
          key={lists.id}
          list={list}
        />
      ))}
    </ol>
  );
}
