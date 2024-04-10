import React from "react";

import ReactDOM from "react-dom";

/**
 * * -Header
 * *  -Logo
 * *  -nav items
 * * -Body
 * *  -search
 * *  -Restaurant container
 * *  -Restaurant card
 **    -images,
 **       name of res., star rating, Cuisines, delv. time
 * * -Footer
 * *  -copyright
 * *  -links
 * *  -addresses
 * *  -contact
 **/
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://r2.erweima.ai/ideogram/kkPw7ZAcSf-OCJqNcT6Hww.jpg"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData ?? {};
  return (
    <div className="res-cards" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

const resList = [
  {
    restaurants: [
      {
        id: "747574",
        name: "Wow! Momo",
        cloudinaryImageId: "64fd45fd9f44c1737bc446e470bed666",
        cuisines: [
          "Tibetan",
          "Healthy Food",
          "Asian",
          "Chinese",
          "Snacks",
          "Continental",
          "Desserts",
          "Beverages",
        ],
        avgRatingString: "4.6",
        costForTwo: "₹300 for two",
        deliveryTime: 34,
      },
      {
        id: "64240",
        name: "Salkara Grills",
        cloudinaryImageId: "ebp2hliz7kzasufkz1tf",
        cuisines: ["South Indian"],
        avgRatingString: "4.2",
        costForTwo: "₹300 for two",
        deliveryTime: 17,
      },
      {
        id: "502506",
        name: "Rozario Bakers And Caterers",
        cloudinaryImageId: "f3e113ea7b0dee961111c08320e1649c",
        cuisines: ["Indian", "South Indian", "Chinese"],
        avgRatingString: "4.5",
        costForTwo: "₹300 for two",
        deliveryTime: 19,
      },
      {
        id: "381395",
        name: "Pandari's Biriyani",
        cloudinaryImageId: "v00k9bubcgh0okjnsshv",
        cuisines: ["Biryani", "Chinese"],
        avgRatingString: "4.4",
        costForTwo: "₹350 for two",
        deliveryTime: 28,
      },
      {
        id: "820029",
        name: "Urban Paratha",
        cloudinaryImageId: "7aa8023e1e371b769ba79f979685c456",
        cuisines: [
          "North Indian",
          "Chinese",
          "Tandoor",
          "Kebabs",
          "Biryani",
          "Seafood",
          "Snacks",
          "Beverages",
        ],
        avgRatingString: "4.6",
        costForTwo: "₹200 for two",
        deliveryTime: 36,
      },
      {
        id: "699086",
        name: "Falooda Nation",
        cloudinaryImageId: "bb307b38b4babf5b2ba9f6461c718ae7",
        cuisines: ["Desserts", "Ice Cream", "Beverages"],
        avgRatingString: "4.3",
        costForTwo: "₹200 for two",
        deliveryTime: 28,
      },
      {
        id: "64001",
        name: "Chicking",
        cloudinaryImageId: "86f52324ecee5fc94cbf63c4a568b672",
        cuisines: [
          "Snacks",
          "Grill",
          "Fast Food",
          "American",
          "Pizzas",
          "Mexican",
          "Beverages",
        ],
        avgRatingString: "4.2",
        costForTwo: "₹300 for two",
        deliveryTime: 33,
      },
      {
        id: "150015",
        name: "Cake Hut",
        cloudinaryImageId: "wgq46ryba9c9lp95asnh",
        cuisines: ["Bakery"],
        avgRatingString: "4.7",
        costForTwo: "₹200 for two",
        deliveryTime: 20,
      },
      {
        id: "747573",
        name: "Wow! China",
        cloudinaryImageId: "95982cfa57cb3b7e504f2015c375fd55",
        cuisines: [
          "Tibetan",
          "Chinese",
          "Asian",
          "Snacks",
          "Continental",
          "Desserts",
          "Beverages",
        ],
        avgRatingString: "4.2",
        costForTwo: "₹400 for two",
        deliveryTime: 33,
      },
      {
        id: "557865",
        name: "Spice Kerala",
        cloudinaryImageId: "fl_lossy,f_auto,q_auto,w_660/lhmrcfvfgpuy3effhcrn",
        cuisines: ["Kerala", "Seafood", "South Indian"],
        avgRatingString: "4.5",
        costForTwo: "₹400 for two",
        deliveryTime: 25,
      },
      {
        id: "303028",
        name: "Saravana Bhavan",
        cloudinaryImageId: "fl_lossy,f_auto,q_auto,w_660/n0rwygs8rzjey8ixodyw",
        cuisines: ["South Indian", "North Indian", "Vegetarian"],
        avgRatingString: "4.8",
        costForTwo: "₹500 for two",
        deliveryTime: 40,
      },
      {
        id: "780034",
        name: "Italian Delight",
        cloudinaryImageId: "fl_lossy,f_auto,q_auto,w_660/fallovrabd8hftqphizq",
        cuisines: ["Italian", "Pizza", "Pasta"],
        avgRatingString: "4.6",
        costForTwo: "₹600 for two",
        deliveryTime: 30,
      },
      {
        id: "490973",
        name: "Sushi Corner",
        cloudinaryImageId:
          "fl_lossy,f_auto,q_auto,w_660/96a9583549db0c437881c963f53d0bae",
        cuisines: ["Japanese", "Sushi", "Asian"],
        avgRatingString: "4.4",
        costForTwo: "₹800 for two",
        deliveryTime: 35,
      },
      {
        id: "932671",
        name: "Taco Haven",
        cloudinaryImageId:
          "fl_lossy,f_auto,q_auto,w_660/516f524eae0c6cdfcb28a4be9d95c774",
        cuisines: ["Mexican", "Tacos", "Fast Food"],
        avgRatingString: "4.3",
        costForTwo: "₹350 for two",
        deliveryTime: 20,
      },
      {
        id: "872014",
        name: "Greek Delights",
        cloudinaryImageId: "fl_lossy,f_auto,q_auto,w_660/uuly6wak2ikwju3mpts5",
        cuisines: ["Greek", "Mediterranean"],
        avgRatingString: "4.7",
        costForTwo: "₹700 for two",
        deliveryTime: 45,
      },
    ],
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
