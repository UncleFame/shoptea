import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./loginsystem";
import BottomBar from "../components/BottomBar";

const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onSearch(value);
  };

  return (
    <input
      className="  w-[480px] flex flex-row mx-auto"
      type="text"
      placeholder="ค้นชื้อร้านค้า"
      onChange={handleChange}
    />
  );
};

const All = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sampleRestaurants, setSampleRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const { data } = await supabase.from("restaurant_details").select();
        setSampleRestaurants(data);
        setFilteredRestaurants(data); // Initialize filtered restaurants with all restaurants
      } catch (error) {
        console.error("Error fetching restaurants:", error.message);
      }
    };

    fetchRestaurants();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let nameResults = [];
        let provinceResults = [];
  
        if (searchTerm !== '') {
          const { data: nameData, error: nameError } = await supabase
            .from("restaurant_details")
            .select()
            .textSearch(["name"], searchTerm);
  
          if (nameError) {
            console.error("Error fetching data by name:", nameError.message);
          } else {
            nameResults = nameData;
          }
  
          const { data: provinceData, error: provinceError } = await supabase
            .from("restaurant_details")
            .select()
            .textSearch(["province"], searchTerm);
  
          if (provinceError) {
            console.error("Error fetching data by province:", provinceError.message);
          } else {
            provinceResults = provinceData;
          }
        }
  
        const mergedResults = [...nameResults, ...provinceResults];
  
        setFilteredRestaurants(mergedResults);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
  
    fetchData();
  }, [searchTerm]);
  
  const handleSearch = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  const goToLandingPage = useCallback(() => {
    navigate("/landing-page-for-real");
  }, [navigate]);

  return (
    <>
      <div className="flex flex-row" onClick={goToLandingPage}>
        <p>Home</p>
      </div>
      <SearchBar onSearch={handleSearch} />
      <div className="flex flex-col mx-0 p-10 gap-y-5 ">
        {filteredRestaurants?.map((restaurant) => (
          <div className="flex gap-x-5 " key={restaurant.id}>
            <img src={restaurant.imageUrl} className=" rounded-lg max-w-[150px]" alt={restaurant.name} />
            <div className="flex flex-col">
              <p className="m-0">{restaurant.name}</p>
              <p className="m-0">ราคา {restaurant.price}</p>
              <p className="m-0">สถานที่ {restaurant.province}</p>
              <p className="m-0">เวลาเปิด {restaurant.open}</p>
              <p className="m-0">{restaurant.review}</p>
              <p className="m-0">{restaurant.phoneNum}</p>
              <p className="m-0">{restaurant.star} star</p>
            </div>
            <BottomBar />
          </div>
        ))}
      </div>
    </>
  );
};

export default All;
