import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import BottomBar from "../components/BottomBar";
import { supabase } from "./loginsystem";
import ProfileAndSearch from "../components/profileandsearch";
import { RestaurantItem } from "../components/RestaurantItem";
import { fetchAllReviewsByRestaurantId } from "../models/review.model";

const LandingPageForReal = () => {
  
  const navigate = useNavigate();
  const { user, loading } = useUser();

  // Handle user authentication navigation
  useEffect(() => {
    
    if (loading) return;
    if (!user) return navigate("/");
  }, [loading]);

  return (
    
    <div className="relative bg-white w-full h-screen text-left text-xl text-black font-inter">
      <ProfileAndSearch isTitleVisible={true} graybar={true} />
      <ImageCover />
      <SectionHeader />
      <RestaurantList />
      <BottomBar />
    </div>
  );
};

const SectionHeader = () => {
  
  const navigate = useNavigate();
  return (
    <div className="flex items-center text-sm w-full mx-auto h-[45px] border-b-2 border-solid border-gray-300">
      <div className="w-full flex justify-end">
        <p className="translate-x-1/2 text-gray-200 hover:text-green-400 transition-all cursor-pointer font-semibold">
          Recommend
        </p>
      </div>
      <div className="w-full flex justify-end">
        <p className="underline underline-offset-4 mr-8 hover:text-green-400 transition-all cursor-pointer"  onClick={() => navigate("/All")}>
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
      const sortedRestaurants = data.sort(async (a, b) => {
        // Review b
        const bReview = await fetchAllReviewsByRestaurantId(b.id);
        const sumBReview = bReview.reduce((accu, review)=> accu + review.star,0);
        const averageBReview = sumBReview / bReview.length;
        // Review a
        const aReview = await fetchAllReviewsByRestaurantId(a.id);
        const sumAReview = aReview.reduce((accu, review)=> accu + review.star,0);
        const averageAReview = sumAReview / aReview.length;
        console.log(`A : ${averageAReview}, B : ${averageBReview}`)
        return  averageBReview - averageAReview 
      });
      sortedRestaurants.reverse()
      setSampleRestaurants(sortedRestaurants);
    };

    fetchRestaurants();
  }, []);

  return (
    <section className="flex flex-col gap-y-5 h-full box-border px-5 pt-5">
      {sampleRestaurants?.map((restaurant) => {
        return <RestaurantItem key={restaurant.id} restaurant={restaurant} />;
      })}
    </section>
  );
};



export default LandingPageForReal;
