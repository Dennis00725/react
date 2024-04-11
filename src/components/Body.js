import resList from "./utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="fltr-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (restaurant) => restaurant.avgRatingString > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top-Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {resList.map((listItem) =>
          listItem.restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
