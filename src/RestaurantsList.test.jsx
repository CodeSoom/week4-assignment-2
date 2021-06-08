import { render } from '@testing-library/react';

import RestaurantsList from './RestaurantsList';

import restaurants from '../fixtures/restaurants';

describe('RestaurantsList', () => {
  context('with restaurants', () => {
    it('renders restaurants', () => {
      const { getByText } = render(
        <RestaurantsList
          restaurants={restaurants}
        />,
      );

      expect(getByText(/마녀주방/)).not.toBeNull();
      expect(getByText(/한식/)).not.toBeNull();
      expect(getByText(/서울시 강남구/)).not.toBeNull();
    });
  });
});
