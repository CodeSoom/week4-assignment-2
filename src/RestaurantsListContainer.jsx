import React from 'react';

import { useSelector } from 'react-redux';

import RestaurantsList from './RestaurantsList';

export default function RestaurantsListContainer() {
  const { restaurants } = useSelector((restaurant) => ({
    restaurants: restaurant.restaurants,
  }));

  return (
    <RestaurantsList
      restaurants={restaurants}
    />
  );
}
