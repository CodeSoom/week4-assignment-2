import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

describe('App', () => {
  it('renders App', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants,
    }));

    const { getByText, getByPlaceholderText } = render(<App />);

    expect(getByText(/Restaurants/)).not.toBeNull();
    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByText(/마녀주방/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByText(/한식/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();
    expect(getByText(/서울시 강남구/)).not.toBeNull();
    expect(getByText(/등록/)).not.toBeNull();
  });
});
