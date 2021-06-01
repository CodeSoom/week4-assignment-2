import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RestaurantsCreateContainer from './RestaurantsCreateContainer';

jest.mock('react-redux');

test('RestaurantsCreateContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      name: '마법사주방', category: '이탈리안', address: '서울시 강남구 역삼동',
    },
  }));

  const { getByText, getByDisplayValue } = render((
    <RestaurantsCreateContainer />
  ));

  fireEvent.change(getByDisplayValue('서울시 강남구 역삼동'), {
    target: { value: '서울시 강남구 약' },
  });

  expect(dispatch).toBeCalledWith({
    type: 'changeRestaurantField',
    payload: {
      name: 'address',
      value: '서울시 강남구 약',
    },
  });

  expect(getByText('등록')).not.toBeNull();

  fireEvent.click(getByText(/등록/));

  expect(dispatch).toBeCalledWith({
    type: 'addRestaurants',
  });
});
