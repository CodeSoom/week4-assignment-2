export const useDispatch = jest.fn();

export const useSelector = jest.fn((selector) => selector({
  listNm: [
    { id: 1, title: '마녀주방' },
  ],
  listSort: [
    { id: 1, title: '한식' },
  ],
  listAddr: [
    { id: 1, title: '서울시 강남구' },
  ],
}));
