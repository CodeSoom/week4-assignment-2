import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

import {
  updateAddress,
  updateCategory,
  updateName,
  addRestaurantInformation,
} from './actions';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      name: '시카고피자',
      category: '양식',
      address: '강남구',
      restaurants: [],
    }));
  });

  it('renders handleChangeName', () => {
    const { getByPlaceholderText } = render(<InputContainer />);

    fireEvent.change(
      getByPlaceholderText(/이름/),
      { target: { value: '시카고피자' } },
    );

    expect(dispatch).toBeCalledWith(updateName('시카고피자'));
  });

  it('renders handleChangeCategory', () => {
    const { getByPlaceholderText } = render(<InputContainer />);

    fireEvent.change(
      getByPlaceholderText(/분류/),
      { target: { value: '양식' } },
    );

    expect(dispatch).toBeCalledWith(updateCategory('양식'));
  });

  it('renders handleChangeAddress', () => {
    const { getByPlaceholderText } = render(<InputContainer />);

    fireEvent.change(
      getByPlaceholderText(/주소/),
      { target: { value: '강남구' } },
    );

    expect(dispatch).toBeCalledWith(updateAddress('강남구'));
  });

  it('renders handleClickAddButton', () => {
    const { getByText } = render(<InputContainer />);

    fireEvent.click(getByText(/등록/));

    expect(dispatch).toBeCalledWith(addRestaurantInformation(1));
  });
});
