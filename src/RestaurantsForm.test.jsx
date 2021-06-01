import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import RestaurantsForm from './RestaurantsForm';

jest.mock('react-redux');

test('RestaurantsForm', () => {
  const restaurant = {
    name: '마법사주방',
    category: '이탈리안',
    address: '서울시 강남구 역삼동',
  };
  const handleChange = jest.fn();
  const handleClick = jest.fn();
  const { getByText, getByDisplayValue } = render((
    <RestaurantsForm
      restaurant={restaurant}
      onChange={handleChange}
      onClick={handleClick}
    />
  ));
  expect(getByDisplayValue('이탈리안')).not.toBeNull();
  expect(getByDisplayValue('마법사주방')).not.toBeNull();
  expect(getByDisplayValue('서울시 강남구 역삼동')).not.toBeNull();

  fireEvent.change(getByDisplayValue('서울시 강남구 역삼동'), {
    target: { value: '서울시 강남구 약' },
  });

  expect(handleChange).toBeCalledWith({
    name: 'address',
    value: '서울시 강남구 약',
  });
  expect(getByText(/등록/)).not.toBeNull();

  fireEvent.click(getByText(/등록/));

  expect(handleClick).toBeCalled();
});
