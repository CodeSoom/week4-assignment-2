import React from 'react';

import RestaurantsListContainer from './RestaurantsListContainer';
import InputContainer from './InputContainer';

export default function App() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsListContainer />
      <InputContainer />
    </div>
  );
}
