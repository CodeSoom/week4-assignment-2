import React from 'react';

import { useSelector } from 'react-redux';

import List from './List';

export default function ListContainer() {
  const { lists } = useSelector((state) => ({
    lists: state.list,
  }));

  return (
    <List
      lists={lists}
    />
  );
}
