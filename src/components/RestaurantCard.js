import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info;

  const { slaString } = resData?.info.sla;

  return (
    <div
      data-testid="resCard"
      className="res-card m-4 p-4 w-[250px] rounded-lg  bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="res-logo rounded-lg w-[200px] h-[200px]"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{slaString} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
