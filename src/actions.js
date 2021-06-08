export function updateName(name) {
  return {
    type: 'updateName',
    payload: {
      name,
    },
  };
}

export function updateCategory(category) {
  return {
    type: 'updateCategory',
    payload: {
      category,
    },
  };
}

export function updateAddress(address) {
  return {
    type: 'updateAddress',
    payload: {
      address,
    },
  };
}

export function addRestaurantInformation() {
  return {
    type: 'addRestaurantInformation',
  };
}
