import reducer from './reducer';

import {
  updateName,
  updateCategory,
  updateAddress,
  addRestaurantInformation,
} from './actions';

describe('reduecer', () => {
  describe('updatState', () => {
    const previouState = {
      name: '',
      cartegory: '',
      address: '',
      restaurants: [],
    };

    it('renders updateName', () => {
      const restaurant = reducer(previouState, updateName('마녀주방'));

      expect(restaurant.name).toBe('마녀주방');
    });

    it('renders updateCategory', () => {
      const restaurant = reducer(previouState, updateCategory('한식'));
      expect(restaurant.category).toBe('한식');
    });

    it('renders updateAddress', () => {
      const restaurant = reducer(previouState, updateAddress('서울시 강남구'));

      expect(restaurant.address).toBe('서울시 강남구');
    });
  });

  describe('with Iunput text', () => {
    it('adds and views new input text', () => {
      const previouState = {
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
        restaurants: [],
      };

      const restaurant = reducer(previouState, addRestaurantInformation());

      expect(restaurant.restaurants[0].name).toBe('마녀주방');
      expect(restaurant.restaurants[0].category).toBe('한식');
      expect(restaurant.restaurants[0].address).toBe('서울시 강남구');
    });
  });

  describe('without Iunput text', () => {
    it('no changes', () => {
      const previouState = {
        name: '',
        category: '',
        address: '',
        restaurants: [],
      };

      const restaurant = reducer(previouState, addRestaurantInformation());

      expect(restaurant.restaurants).toHaveLength(0);
    });
  });

  describe('without actions', () => {
    it('returns previouState', () => {
      const previouState = {
        name: '',
        restaurants: [],
      };
      const action = {};

      const restaurant = reducer(previouState, action);

      expect(restaurant.name).toBe('');
    });
  });

  describe('without state and actions', () => {
    it('retuens initailState', () => {
      const restaurant = reducer();

      expect(restaurant.name).toBe('');
      expect(restaurant.category).toBe('');
      expect(restaurant.address).toBe('');
    });
  });
});
