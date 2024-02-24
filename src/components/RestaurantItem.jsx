import { useNavigate } from "react-router-dom";
import { Star } from "../components/destination/Star";
import { useEffect, useState } from "react";
import { fetchAllReviewsByRestaurantId } from "../models/review.model";

export const RestaurantItem = ({ restaurant }) => {
  const navigate = useNavigate();
  const [rating, setRating] = useState({
    star : 0,
    amount : 0
  });
  const {star, amount} = rating;
  useEffect(() => {
    if (!restaurant) return

    const fetchRating = async () => {
      const fetchedRating = await fetchAllReviewsByRestaurantId(restaurant.id);
      const averageRating = fetchedRating.reduce((accu, item) => accu + item.star,0);
      setRating(_ => ({
        star : averageRating,
        amount : fetchedRating.length
      }))
    };

    fetchRating();
  }, [restaurant]);

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
        <Star numberOfReview={amount} rating={star} />
        <p className="m-0 text-sm text-gray-500 font-semibold flex flex-row gap-2">
          <span className="text-gray-200 font-semibold text-sm">Open: </span>{" "}
          {restaurant.open} - {restaurant.close}
        </p>
        <p className="m-0 text-sm text-gray-100 ">{restaurant.name}</p>
        <p className="m-0 text-sm text-gray-100">ราคา {restaurant.price}</p>
        <p className="m-0 text-sm text-gray-200">จ. {restaurant.province}</p>
      </div>
    </div>
  );
};
