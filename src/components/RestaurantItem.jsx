import { useNavigate } from "react-router-dom";
import { Star } from "../components/destination/Star";
import { useEffect, useState } from "react";
import { fetchAllReviewsByRestaurantId } from "../models/review.model";

export const RestaurantItem = ({ restaurant }) => {
  const navigate = useNavigate();
  const [rating, setRating] = useState({
    star: 0,
    amount: 0,
  });
  const { star, amount } = rating;
  useEffect(() => {
    if (!restaurant) return;

    const fetchRating = async () => {
      const fetchedRating = await fetchAllReviewsByRestaurantId(restaurant.id);
      const averageRating =
        fetchedRating.reduce((accu, item) => accu + item.star, 0) /
        fetchedRating.length;
      setRating((_) => ({
        star: averageRating.toFixed(2),
        amount: fetchedRating.length,
      }));
    };

    fetchRating();
  }, [restaurant]);

  return (
    <div className="flex gap-x-5" key={restaurant.title}>
      <img
        src={`${restaurant.imageUrl}?random=${crypto.randomUUID()}`}
        className="w-[150px] h-[150px] object-cover rounded-lg"
        onClick={() => navigate(`/Review?restaurantId=${restaurant.id}`)}
        alt={restaurant.name}
      />
      <div className="flex flex-col gap-y-[1px]">
        <p className="m-0 text-gray-500 font-bold text-lg">{restaurant.name}</p>
        {star <= 0 || amount <= 0 ? <p className="p-0 m-0 text-gray-200 text-sm font-semibold">0.0</p> : <Star numberOfReview={amount} rating={star} />}
        <p className="m-0 text-sm text-gray-500 font-semibold flex flex-row gap-2">
          <span className="text-gray-200 font-semibold text-sm">Open: </span>{" "}
          {restaurant.open} - {restaurant.close}
        </p>
        <p className="m-0 text-sm text-gray-100">ราคา {restaurant.price} บาท</p>
        <p className="m-0 text-sm text-gray-200">จ. {restaurant.province}</p>
        <p className="m-0 text-sm text-gray-200">
          เปิดบริการ
          {restaurant.operationDay
            ? restaurant.operationDay
            : "-"}
        </p>
      </div>
    </div>
  );
};
