import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsForm from './RestaurantsForm';

import {
  changeRestaurantField,
  addRestaurants,
} from './actions';

export default function RestaurantsCreateContainer() {
  const dispatch = useDispatch();
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));
  function handleChange({ name, value }) {
    dispatch(changeRestaurantField({ name, value }));
  }

  function handleClick() {
    dispatch(addRestaurants());
  }

  return (
    <RestaurantsForm
      restaurant={restaurant}
      onChange={handleChange}
      onClick={handleClick}
    />
  );
}
