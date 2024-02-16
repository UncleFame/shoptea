import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import BottomBar from "../components/BottomBar";
import { supabase } from "./loginsystem";
import { Star } from "../components/destination/Star";

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
      <BottomBar />
     <div className="flex justify-between py-5 px-5">
      <div className="flex flex-col">
        <p className="m-0 ">{`MatCha&Tea`}</p>
        <p className="m-0 text-seagreen">เรานำชามาให้คุณ</p>
      </div>
      <div className="flex flex-row-reverse gap-3  h-9  ">
        <img
          className=" w-[33px] h-[33px] object-cover cursor-pointer"
          alt=""
          src="profileicon.png"
          onClick={onIconClick}
              
        />
        <img
          
          alt=""
          src="/vector-search-icon-1@2x.png"
          onClick={onVectorSearchIcon1Click}
        />
      
      </div>
     </div>
      <img
        className=" box-border w-[520px]  h-[197px]"
        src="matcha.webp"
        alt="" />
    
      <div className=" flex flex-row mt-3 [412px] left-[180px] text-sm w-full mx-auto h-[17px]">
        <div className="w-full flex justify-end">
          <p className="translate-x-1/2">Recommended</p>
        </div>
        <div className="w-full flex justify-end">
          <p>All</p>
        </div>
              
      </div>
      <RestaurantList />
      
    </div>
    
  );
};

export const RestaurantList = () =>{
  const navigate = useNavigate();
  const [sampleRestaurants, setSampleRestaurants] = useState(null);
  const goReviewPage = useCallback((index) => {
    navigate(`/Review?restaurantId=${index}`);
  }, [navigate]);
  
  
  useEffect(()=>{
    const fetchRestaurants = async () => {
      const {data} = await supabase.from("restaurant_details")
      .select()
      setSampleRestaurants(data);
    }

    fetchRestaurants();
  }, [])


  const onSoulGoodMatchacoffeeClick = useCallback(() => {
    navigate("/review");
  }, [navigate]);

  return (
    <div className="flex flex-col mx-0 p-10 gap-y-5 ">
      {
        sampleRestaurants?.map((restaurant,index)=>{
          
          return (
            <div className=" flex gap-x-5">
              <img src={restaurant.imageUrl} className="w-[150px] h-[150px]  rounded-lg" 
              onClick={goReviewPage}/>
              
              
             
              <div  className="flex flex-col rounded ">
              
                <p className="m-0  text-gray-950">{restaurant.name}</p>
                <Star rating={restaurant.star}/>
                <p className="m-0 text-sm text-gray-100  ">{restaurant.name}</p>
                <p className="m-0 text-sm text-gray-100">ราคา  {restaurant.price}</p>
                <p className="m-0  text-sm text-gray-200">จ.  {restaurant.province}</p>
                
              </div>        
              
            </div>
          )

        })
        
      }
      
    </div>
    
  )
}



export default LandingPageForReal;
