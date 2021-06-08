import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsListContainer from './RestaurantsListContainer';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantsListContainer 관련 테스트', () => {
  it('레스토랑 목록', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants,
    }));

    const { getByText } = render(<RestaurantsListContainer />);

    expect(getByText(/마녀주방/)).not.toBeNull();
  });
});
