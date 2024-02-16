import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { supabase } from "./loginsystem";


const Review = () => {
   
  const navigate = useNavigate();
  const GOhomepage = useCallback(() => {
    navigate("/landing-page-for-real");
  }, [navigate]);



        return(
            

            <div className="flex flex-col">
            <p onClick={GOhomepage}>Homepage </p>

            <RestaurantList/>

            </div>
            )    
    
        }
       
        
        const RestaurantList = () => {
            const navigate = useNavigate();
            const [firstRestaurant, setFirstRestaurant] = useState(null);
          
            useEffect(() => {
              const fetchRestaurants = async () => {
                const { data } = await supabase.from("restaurant_details").select();
                if (data.length > 0) {
                  setFirstRestaurant(data[0]); // Set only the first restaurant
                }
              };
          
              fetchRestaurants();
            }, []);
          
            return (
              <div className="flex flex-col mx-0 p-10 gap-y-5">
                {firstRestaurant && (
                    <div className="flex flex-col">
                      <img src={firstRestaurant.imageUrl} className="w-full h-[350px] mx-auto"  />
                      <p className="m-0 flex flex-col" > {firstRestaurant.name}</p>
                   
                      <p className="m-0">{firstRestaurant.star} star</p>
                      <p className="m-0">{firstRestaurant.open}- {firstRestaurant.close}</p>
                      <p className="m-0">{firstRestaurant.review}</p>
                      <p className="m-0">{firstRestaurant.phoneNum}</p>
                      <p className="m-0">{firstRestaurant.price}</p>
                      <p> recommended</p>
                      <p>{firstRestaurant.recommeded}</p>
                      
                      <p>{firstRestaurant.recommededmenuprice}</p>
                      
                    <div className="flex gap-6 h-[50px] w-[30px]" >
                    <img src={firstRestaurant.imageUrl}  />
                    <img src={firstRestaurant.imageUrl}  />
                    <img src={firstRestaurant.imageUrl}  />
                    </div>
                    <div className="flex flex-col">
                        location
                        <p>{firstRestaurant.province}</p>
                        
                    </div>
                    
                    <div className="flex flex-col gap gap-y-5 ">
                      
                  
                        <img src="chonBuri.jpg"></img>    
                        <span className="-8 w-full h-1 bg-gray-300"></span>
                                           
                        review
                    <div className="flex flex gap-y-5"> 
                        <img src="profileicon.png" alt=""  className="h-[50px] w-[50px]"/>

                    <p>Profile Name</p></div>

                    </div>
                        <p>{firstRestaurant.Review}</p>

                        <button>
                            add review
                        </button>
                                             
                     <div>
                        
                    
                    </div>
                    
                    </div>
                     


                    
                 
                )}
              </div>
            );
          };
          
export default Review;
