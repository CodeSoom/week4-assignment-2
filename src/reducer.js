const initialState = {
  newId: 100,
  listNm: [
    { id: 1, title: '마녀주방' },
  ],
  listSort: [
    { id: 1, title: '한식' },
  ],
  listAddr: [
    { id: 1, title: '서울시' },
  ],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateList') {
    return {
      ...state,
    };
  }

  if (action.type === 'addList') {
    const { newId, lists } = state;

    return {
      ...state,
      newId: newId + 1,
      lists: [...lists,
        { id: newId, title: lists.listNm },
        { id: newId, title: lists.listSort },
        { id: newId, title: lists.listAddr },
      ],
    };
  }

  return state;
}
