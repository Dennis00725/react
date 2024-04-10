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

const RestaurantCard = (props) => {
  const resData = props;
  return (
    <div className="res-cards" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.cloudinaryImageId
        }
      />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines}</h4>
      <h4>{resData.avgRatingString}</h4>
      <h4>{resData.costForTwo}</h4>
      <h4>{resData.deliveryTime} minutes</h4>
    </div>
  );
};

const resObj = {
  restaurants: [
    {
      info: {
        id: "747574",
        name: "Wow! Momo",
        cloudinaryImageId: "64fd45fd9f44c1737bc446e470bed666",
        locality: "Kazhutumuttu",
        areaName: "Thoppumpady",
        costForTwo: "₹300 for two",
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
        avgRating: 4.6,
        parentId: "1776",
        avgRatingString: "4.6",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 1.7,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "1.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-04-10 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-e6c995dc-a02a-4ad2-b2a6-c936a901fbba",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/wow-momo-kazhutumuttu-thoppumpady-kochi-747574",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "64240",
        name: "Salkara Grills",
        cloudinaryImageId: "ebp2hliz7kzasufkz1tf",
        locality: "Sheethal Building",
        areaName: "Thopumpady",
        costForTwo: "₹300 for two",
        cuisines: ["South Indian"],
        avgRating: 4.2,
        parentId: "20859",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 17,
          lastMileTravel: 0.8,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "0.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-04-10 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-e6c995dc-a02a-4ad2-b2a6-c936a901fbba",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/salkara-grills-sheethal-building-thopumpady-kochi-64240",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "502506",
        name: "Rozario Bakers And Caterers",
        cloudinaryImageId: "f3e113ea7b0dee961111c08320e1649c",
        locality: "Jacob Road",
        areaName: "Fort Kochi",
        costForTwo: "₹300 for two",
        cuisines: ["Indian", "South Indian", "Chinese"],
        avgRating: 4.5,
        parentId: "301034",
        avgRatingString: "4.5",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 1,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "1.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-04-10 22:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹100 OFF",
          subHeader: "ABOVE ₹499",
          discountTag: "FLAT DEAL",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-e6c995dc-a02a-4ad2-b2a6-c936a901fbba",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/rozario-bakers-and-caterers-jacob-road-fort-kochi-kochi-502506",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "381395",
        name: "Pandari's Biriyani",
        cloudinaryImageId: "v00k9bubcgh0okjnsshv",
        locality: "Mattancherry",
        areaName: "Fort Kochi",
        costForTwo: "₹350 for two",
        cuisines: ["Biryani", "Chinese"],
        avgRating: 4.4,
        parentId: "6421",
        avgRatingString: "4.4",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 3.5,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-04-10 22:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-e6c995dc-a02a-4ad2-b2a6-c936a901fbba",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/pandaris-biriyani-mattancherry-fort-kochi-kochi-381395",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "820029",
        name: "Urban Paratha",
        cloudinaryImageId: "7aa8023e1e371b769ba79f979685c456",
        locality: "Fort Kochi",
        areaName: "Fort Kochi",
        costForTwo: "₹200 for two",
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
        avgRating: 4.6,
        parentId: "19027",
        avgRatingString: "4.6",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 0.7,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "0.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-04-10 23:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-North%20Indian.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-e6c995dc-a02a-4ad2-b2a6-c936a901fbba",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/urban-paratha-fort-kochi-kochi-820029",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "699086",
        name: "Falooda Nation",
        cloudinaryImageId: "bb307b38b4babf5b2ba9f6461c718ae7",
        locality: "Pt Jacob Road",
        areaName: "Fort Kochi",
        costForTwo: "₹200 for two",
        cuisines: ["Desserts", "Ice Cream", "Beverages"],
        avgRating: 4.3,
        veg: true,
        parentId: "20231",
        avgRatingString: "4.3",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 1.5,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "1.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-04-10 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-e6c995dc-a02a-4ad2-b2a6-c936a901fbba",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/falooda-nation-pt-jacob-road-fort-kochi-kochi-699086",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "64001",
        name: "Chicking",
        cloudinaryImageId: "86f52324ecee5fc94cbf63c4a568b672",
        locality: "P T Jacob Road",
        areaName: "Thopumpady",
        costForTwo: "₹300 for two",
        cuisines: [
          "Snacks",
          "Grill",
          "Fast Food",
          "American",
          "Pizzas",
          "Mexican",
          "Beverages",
        ],
        avgRating: 4.2,
        parentId: "251",
        avgRatingString: "4.2",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 1.1,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "1.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-04-11 02:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-e6c995dc-a02a-4ad2-b2a6-c936a901fbba",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/chicking-p-t-jacob-road-thopumpady-kochi-64001",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "150015",
        name: "Cake Hut",
        cloudinaryImageId: "wgq46ryba9c9lp95asnh",
        locality: "Parry Junction",
        areaName: "Chullickal",
        costForTwo: "₹200 for two",
        cuisines: ["Bakery"],
        avgRating: 4.7,
        parentId: "4752",
        avgRatingString: "4.7",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 20,
          lastMileTravel: 0.2,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "0.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-04-10 21:50:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-Desserts.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Delivery!",
                    imageId: "Rxawards/_CATEGORY-Desserts.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "10% OFF",
          subHeader: "UPTO ₹40",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-e6c995dc-a02a-4ad2-b2a6-c936a901fbba",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/cake-hut-parry-junction-chullickal-kochi-150015",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
    {
      info: {
        id: "747573",
        name: "Wow! China",
        cloudinaryImageId: "95982cfa57cb3b7e504f2015c375fd55",
        locality: "Kazhutumuttu",
        areaName: "Thoppumpady",
        costForTwo: "₹400 for two",
        cuisines: [
          "Tibetan",
          "Chinese",
          "Asian",
          "Snacks",
          "Continental",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.2,
        parentId: "226836",
        avgRatingString: "4.2",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 1.7,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "1.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-04-10 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-e6c995dc-a02a-4ad2-b2a6-c936a901fbba",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/wow-china-kazhutumuttu-thoppumpady-kochi-747573",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
    },
  ],
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resObj} />
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
