import { useNavigate } from "react-router-dom";
import {Star} from "../components/destination/Star"

export const RestaurantItem = ({ restaurant }) => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-x-5" key={restaurant.title}>
      <img
        src={restaurant.imageUrl}
        className="w-[150px] h-[150px] object-cover rounded-lg"
        onClick={() => navigate(`/Review?restaurantId=${restaurant.id}`)}
        alt={restaurant.name}
      />
      <div className="flex flex-col gap-y-[1px]">
        <p className="m-0 text-gray-500 font-bold text-lg">{restaurant.name}</p>
        <Star rating={restaurant.star} />
        <p className="m-0 text-sm text-gray-500 font-semibold flex flex-row gap-2">
          <span className="text-gray-200 font-semibold text-sm">Open: </span> {restaurant.open} -{" "}
          {restaurant.close}
        </p>
        <p className="m-0 text-sm text-gray-100 ">{restaurant.name}</p>
        <p className="m-0 text-sm text-gray-100">ราคา {restaurant.price}</p>
        <p className="m-0 text-sm text-gray-200">จ. {restaurant.province}</p>
      </div>
    </div>
  );
};
  