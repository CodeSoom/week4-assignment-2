const initialRestaurant = {
  name: '',
  category: '',
  address: '',
};

const initialState = {
  newId: 100,
  restaurants: [],
  restaurant: initialRestaurant,
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRestaurants') {
    console.log(action);
    const { restaurants } = action.payload;
    return {
      ...state,
      restaurants,
    };
  }

  if (action.type === 'changeRestaurantField') {
    console.log(action);
    const { name, value } = action.payload;
    return {
      ...state,
      restaurant: {
        ...state.restaurant,
        [name]: value,
      },
    };
  }

  if (action.type === 'addRestaurants') {
    console.log(action);
    const { newId, restaurants, restaurant } = state;

    return {
      ...state,
      newId: newId + 1,
      restaurants: [...restaurants, { ...restaurant, id: newId }],
      restaurant: initialRestaurant,
    };
  }
  return state;
}
