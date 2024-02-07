import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./loginsystem";

import BottomBar from "../components/BottomBar";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("restarant_details")
          .select()
          .textSearch("name", searchTerm);
        
        // Handle the fetched data or error here
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    if (searchTerm !== '') {
      fetchData();
    }
  }, [searchTerm]);

  return (
    <input className="mx-auto"
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

const All = () => {
  
  const [sampleRestaurants, setSampleRestaurants] = useState(null);
  const navigate = useNavigate();
  useEffect(()=>{
    const fetchRestaurants = async () => {
      const {data} = await supabase.from("restaurant_details")
      .select()
      setSampleRestaurants(data);
    }

    fetchRestaurants();
  }, [])

  const LandingPageForReal = useCallback(() => {
    navigate("/landing-page-for-real");
  }, [navigate]);

  return (
    <>
      <div className="flex flex-row" onClick={LandingPageForReal}>
        <p>home</p>
      </div>
      <SearchBar onSearch={(value) => console.log("Searching for:", value)} />
      
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

              <BottomBar />
            </div>




          )

        })
      }
    </div>
    
    </>
  );
};

export default All;
