import React from 'react';

export default function Input(listNm, listSort, listAddr, onClick, onChange) {
  return (
    <p>
      <input
        id="addr"
        type="text"
        placeholder="이름"
        value={listNm}
        onChange={onChange}
      />
      <input
        id="addr"
        type="text"
        placeholder="분류"
        value={listSort}
        onChange={onChange}
      />
      <input
        id="addr"
        type="text"
        placeholder="주소"
        value={listAddr}
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </p>
  );
}
