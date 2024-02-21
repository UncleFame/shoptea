import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import BottomBar from "../components/BottomBar";
import { supabase } from "./loginsystem";
import { Star } from "../components/destination/Star";
import ProfileAndSearch from "../components/profileandsearch";

const LandingPageForReal = () => {
  const navigate = useNavigate();
  const { user, loading } = useUser();

  // Handle user authentication navigation
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [loading]);

  return (
    <div className="relative bg-white w-full h-screen overflow-hidden text-left text-xl text-black font-inter">
      <ProfileAndSearch isTitleVisible={true} graybar={true} />
      <ImageCover />
      <SectionHeader />
      <RestaurantList />
      <BottomBar />
    </div>
  );
};

const SectionHeader = () => {
  return (
    <div className="flex items-center text-sm w-full mx-auto h-[45px] border-b-2 border-solid border-gray-300">
      <div className="w-full flex justify-end">
        <p className="translate-x-1/2 text-gray-200 hover:text-green-400 transition-all cursor-pointer font-semibold">
          Recommend
        </p>
      </div>
      <div className="w-full flex justify-end">
        <p className="underline underline-offset-4 mr-8 hover:text-green-400 transition-all cursor-pointer">
          All
        </p>
      </div>
    </div>
  );
};

const ImageCover = () => {
  return (
    <img
      className="object-cover box-border w-full  h-[210px]"
      src="matcha.webp"
      alt=""
    />
  );
};

export const RestaurantList = () => {
  const [sampleRestaurants, setSampleRestaurants] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const { data } = await supabase.from("restaurant_details").select();
      // Sort the restaurants by star rating in descending order
      const sortedRestaurants = data.sort((a, b) => b.star - a.star);
      setSampleRestaurants(sortedRestaurants);
    };

    fetchRestaurants();
  }, []);

  return (
    <section className="flex flex-col gap-y-5 h-[40%] box-border overflow-y-scroll px-5 pt-5">
      {sampleRestaurants?.map((restaurant) => {
        return <RestaurantItem restaurant={restaurant} />;
      })}
    </section>
  );
};

const RestaurantItem = ({ restaurant }) => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-x-5" key={restaurant.title}>
      <img
        src={restaurant.imageUrl}
        className="w-[150px] h-[150px] rounded-lg"
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

export default LandingPageForReal;
