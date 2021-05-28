import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Input from './Input';

import {
  updateList,
  addList,
} from './actions';

export default function InputContainer() {
  const { listNm, listSort, listAddr } = useSelector((state) => ({
    listNm: state.listNm,
    listSort: state.listSort,
    listAddr: state.listAddr,
  }));

  console.log("inputContainer", listNm[0].title);

  const dispatch = useDispatch();

  function handleClickAddList(event) {
    dispatch(updateList(event.target.value));
  }

  function handleChangeList() {
    dispatch(addList());
  }

  return (
    <Input
      listNm={listNm}
      listSort={listSort}
      listAddr={listAddr}
      onChange={handleChangeList}
      onClick={handleClickAddList}
    />
  );
}
