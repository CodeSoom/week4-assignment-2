const initialState = {
  newId: 100,
  name: '',
  category: '',
  address: '',
  restaurants: [],
};

const reducers = {
  updateName(state, action) {
    return {
      ...state,
      name: action.payload.name,
    };
  },

  updateCategory(state, action) {
    return {
      ...state,
      category: action.payload.category,
    };
  },

  updateAddress(state, action) {
    return {
      ...state,
      address: action.payload.address,
    };
  },

  addRestaurantInformation(state) {
    const {
      newId,
      name,
      category,
      address,
      restaurants,
    } = state;

    if (!name || !category || !address) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      restaurants: [
        ...restaurants,
        {
          id: newId,
          name,
          category,
          address,
        },
      ],
      name: '',
      category: '',
      address: '',
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action = { type: '' }) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
