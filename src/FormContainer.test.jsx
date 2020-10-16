import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import FormContainer from './FormContainer';

jest.mock('react-redux');

describe('FormContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      name: '마녀주방',
      classification: '한식',
      location: '서울시 강남구',
    },
  }));

  function renderFormContainer() {
    return render((
      <FormContainer />
    ));
  }

  it('renders restaurant', () => {
    const { getByDisplayValue } = renderFormContainer();

    expect(getByDisplayValue(/마녀주방/)).not.toBeNull();
    expect(getByDisplayValue(/한식/)).not.toBeNull();
    expect(getByDisplayValue(/서울시 강남구/)).not.toBeNull();
  });

  it('renders “등록” button to add task', () => {
    const { getByText } = renderFormContainer();

    expect(getByText(/등록/)).not.toBeNull();
  });

  describe('handleChangeRestaurant', () => {
    it('dispatchs updateRestaurant action', () => {
      const { getByPlaceholderText } = renderFormContainer();

      fireEvent.change(getByPlaceholderText('이름'), {
        target: { value: '시카고피자' },
      });

      expect(dispatch).toBeCalledWith(
        {
          type: 'updateRestaurant',
          payload: {
            placeholder: '이름',
            value: '시카고피자',
          },
        },
      );
    });
  });

  describe('handleClickAddRestaurant', () => {
    it('dispatchs addRestaurant action', () => {
      const { getByText } = renderFormContainer();

      fireEvent.click(getByText(/등록/));

      expect(dispatch).toBeCalledWith({ type: 'addRestaurant' });
    });
  });
});
