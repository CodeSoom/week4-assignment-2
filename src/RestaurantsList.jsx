export default function RestaurantsList({ restaurants }) {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          {restaurant.name}
          {' '}
          |
          {' '}
          {restaurant.category}
          {' '}
          |
          {' '}
          {restaurant.address}
        </li>
      ))}
    </ul>
  );
}
