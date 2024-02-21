import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import BottomBar from "../components/BottomBar";
import { supabase } from "./loginsystem";
import { Star } from "../components/destination/Star";
import ProfileAndSearch from "../components/profileandsearch";


const LandingPageForReal = () => {
  const navigate = useNavigate();
  const {user, loading} = useUser();

  // Handle user authentication navigation
  useEffect(()=>{
    if (loading) return
    if (!user) return navigate("/")
  }, [loading])
  
  const onVectorSearchIcon1Click = useCallback(() => {
    navigate("/All");
  }, [navigate]);

  const onIconClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onRectangle1Click = useCallback(() => {
    navigate("/review");
  }, [navigate]);

 
  return (
    <div className="relative bg-white w-full h-full overflow-hidden text-left text-xl text-black font-inter">
    
      <ProfileAndSearch isTitleVisible={true} graybar={true}/>
      
      <BottomBar />

      
      <img
        className="object-cover box-border w-[520px]  h-[197px]"
        src="matcha.webp"
        alt="" />

      <div className="flex flex-row mt-3 left-[180px] text-sm w-full mx-auto h-[17px]">
        <div className="w-full flex justify-end">
          <p className="translate-x-1/2 hover:text-green-400 transition-all cursor-pointer font-semibold">Recommend</p>
        </div>
        <div className="w-full flex justify-end">
          <p className="underline underline-offset-4 mr-8 hover:text-green-400 transition-all cursor-pointer">All</p>
        </div>
              
      </div> 

      <RestaurantList />
      

      </div>
     
    
  );
};

export const RestaurantList = () => {
  const navigate = useNavigate();
  const [sampleRestaurants, setSampleRestaurants] = useState(null);

  const goReviewPage = useCallback((restaurantId) => {
    navigate(`/Review?restaurantId=${restaurantId}`);
  }, [navigate]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const { data } = await supabase.from("restaurant_details").select();
      // Sort the restaurants by star rating in descending order
      const sortedRestaurants = data.sort((a, b) => b.star - a.star);
      setSampleRestaurants(sortedRestaurants);
    };

    fetchRestaurants();
  }, []);

  const onSoulGoodMatchacoffeeClick = useCallback(() => {
    navigate("/review");
  }, [navigate]);

  return (
    <div className="flex flex-col mx-0 p-10 gap-y-5 h-[400px] overflow-y-scroll">
      {sampleRestaurants?.map((restaurant, index) => {
        return (
          <div className="flex gap-x-5" key={index}>
            <img
              src={restaurant.imageUrl}
              className="w-[150px] h-[150px] rounded-lg"
              onClick={() => goReviewPage(restaurant.id)}
              alt={restaurant.name}
            />
            <div className="flex flex-col rounded">
              <p className="m-0 text-gray-950">{restaurant.name}</p>
              <Star rating={restaurant.star} />
              <p className="m-0 text-sm text-gray-100 flex flex-row gap-2">
                <span className="text-black">Open </span> {restaurant.open} -{" "}
                {restaurant.close}
              </p>
              <p className="m-0 text-sm text-gray-100 ">{restaurant.name}</p>
              <p className="m-0 text-sm text-gray-100">ราคา {restaurant.price}</p>
              <p className="m-0 text-sm text-gray-200">จ. {restaurant.province}</p>
              
            </div>
            
          </div>
          
        );
      })}
    </div>
  );
};

export default LandingPageForReal;
