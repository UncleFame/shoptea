import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./loginsystem";
import BottomBar from "../components/BottomBar";
import { IoIosArrowBack } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Star } from "../components/destination/Star";
import {RestaurantItem} from "../components/RestaurantItem"

const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onSearch(value);
  };

  return (
    <div className="flex flex-row relative mx-8">
      <input
        className=" bg-gray-400 w-full text-black placeholder-gray-500 rounded-xl px-8"
        type="text"
        placeholder="ค้นหา ชื้อร้านค้า จังหวัด"
        onChange={handleChange}
      />
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <FaMagnifyingGlass 
        size={10}
        className=" text-gray-500" />
      </span>
    </div>
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
        let results = [];
  
        if (searchTerm.trim() === '') {
          // Fetch all restaurants if the search term is empty
          const { data } = await supabase.from("restaurant_details").select();
          results = data;
        } else {
          // Fetch data for name search
          const searchTermLower = searchTerm.toLowerCase();
          const { data: nameData, error: nameError } = await supabase
            .from("restaurant_details")
            .select()
            .textSearch(["name"], searchTermLower);
  
          if (nameError) {
            console.error("Error fetching data by name:", nameError.message);
          } else {
            const nameResults = nameData.filter(restaurant => restaurant.name.toLowerCase().startsWith(searchTermLower));
            results.push(...nameResults);
          }
  
          // Fetch data for province search
          const { data: provinceData, error: provinceError } = await supabase
            .from("restaurant_details")
            .select()
            .textSearch(["province"], searchTermLower);
  
          if (provinceError) {
            console.error("Error fetching data by province:", provinceError.message);
          } else {
            const provinceResults = provinceData.filter(restaurant => restaurant.province.toLowerCase().startsWith(searchTermLower));
            results.push(...provinceResults);
          }
        }
  
        setFilteredRestaurants(results);
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
      <div className="flex flex-row items-center w-full" onClick={goToLandingPage}>
        <IoIosArrowBack className="" />
      <p>Home</p>
      </div>
      <p className="flex row-auto justify-center text-gray-500 font-bold">All</p>
      <SearchBar onSearch={handleSearch} 
        className="bg-gray-200 "  
      />
      <div className="flex flex-col mx-0 p-5 gap-y-5 font-sans">
        {filteredRestaurants?.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant}/>
        ))}
      </div>
    </>
  );
};

export default All;
