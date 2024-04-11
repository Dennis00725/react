import resList from "./utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  const filterTopRatedRestaurants = () => {
    const filteredList = listOfRestaurant.map((listItem) => ({
      ...listItem,
      restaurants: listItem.restaurants.filter(
        (restaurant) => parseFloat(restaurant.avgRatingString) > 4
      ),
    }));
    setListOfRestaurant(filteredList);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="fltr-btn" onClick={filterTopRatedRestaurants}>
          Top-Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((listItem) =>
          listItem.restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
