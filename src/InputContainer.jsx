import React from 'react';

import { useDispatch } from 'react-redux';

import {
  updateName,
  updateCategory,
  updateAddress,
  addRestaurantInformation,
} from './actions';

export default function InputContainer() {
  const dispatch = useDispatch();

  function handleChangeName(event) {
    dispatch(updateName(event.target.value));
  }
  function handleChangeCategory(event) {
    dispatch(updateCategory(event.target.value));
  }

  function handleChangeAddress(event) {
    dispatch(updateAddress(event.target.value));
  }

  function handleClickAddButton() {
    dispatch(addRestaurantInformation());
  }

  return (
    <div>
      <input name="name" type="text" placeholder="이름" onChange={handleChangeName} />
      <input name="category" type="text" placeholder="분류" onChange={handleChangeCategory} />
      <input name="address" type="text" placeholder="주소" onChange={handleChangeAddress} />
      <button type="button" onClick={handleClickAddButton}>등록</button>
    </div>
  );
}
