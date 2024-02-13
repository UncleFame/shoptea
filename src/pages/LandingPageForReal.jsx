import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import BottomBar from "../components/BottomBar";
import { supabase } from "./loginsystem";



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
    <div className="flexrelative bg-white w-full h-[957px] overflow-hidden text-left text-xl text-black font-inter">
      <div className="flex[20px] left-[6px] inline-block w-[215px] h-[111px] text-gray-100">
        <p className="m-0">{`MatCha&Tea`}</p>
        <p className="m-0 text-seagreen">เรานำชามาให้คุณ</p>
      </div>
      <div className="flex flex-row-reverse gap-3  h-9 object-cover cursor-pointer">
        
      <img
        
        alt=""
        src="/vector-search-icon-1@2x.png"
        onClick={onVectorSearchIcon1Click}
      />
       <img
        className="flex flex-row reverse w-[33px] h-[33px] object-cover cursor-pointer"
        alt=""
        src="profileicon.png"
        onClick={onIconClick}

     
     
           //first box under
      />
        
        </div>


      <div className="mx-auto bg-gainsboro w-full  h-[197px]" />
      
    
      <div className=" flex flex-row gap-5  mt-3 mx-auto [412px] left-[180px] text-sm inline-block w-44 h-[17px]">
        
      <div>
      recommended  
      </div>
      all
                
      <BottomBar />
        
     
      </div>
      <RestaurantList />
      
      
  
    </div>
    
  );
};

function RestaurantList(){
  const navigate = useNavigate();
  const [sampleRestaurants, setSampleRestaurants] = useState(null);
  
  
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
    <div className="flex flex-col mx-0 p-10 gap-y-5">
      {
        sampleRestaurants?.map((restaurant)=>{
     
          return (
            <div className=" flex gap-x-5">
              <img src={restaurant.imageUrl} className="max-w-[150px]" />
              
              
             
              <div  className="flex flex-col ">
                
                <p className="m-0">{restaurant.name}</p>
                <p className="m-0">ราคา  {restaurant.price}</p>
                <p className="m-0">สถานที่  {restaurant.province}</p>
                <p className="m-0">เวลาเปิด  {restaurant.open}</p>
                <p className="m-0">{restaurant.review}</p>
                <p className="m-0">{restaurant.phoneNum}</p>
                <p className="m-0">{restaurant.star}  star</p>
              </div>

              
            </div>




          )

        })
      }
    </div>
    
  )
}



export default LandingPageForReal;
