import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./loginsystem";
import BottomBar from "../components/BottomBar";
import { IoIosArrowBack } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Star } from "../components/destination/Star";

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
        let nameResults = [];
        let provinceResults = [];
  
        if (searchTerm !== '') {
          // Convert the search term to lowercase
          const searchTermLower = searchTerm.toLowerCase();
  
          // Fetch data for name search
          const { data: nameData, error: nameError } = await supabase
            .from("restaurant_details")
            .select()
            .textSearch(["name"], searchTermLower);
  
          if (nameError) {
            console.error("Error fetching data by name:", nameError.message);
          } else {
            nameResults = nameData.filter(restaurant => restaurant.name.toLowerCase().startsWith(searchTermLower));
          }
  
          
          const { data: provinceData, error: provinceError } = await supabase
            .from("restaurant_details")
            .select()
            .textSearch(["province"], searchTermLower);
  
          if (provinceError) {
            console.error("Error fetching data by province:", provinceError.message);
          } else {
            provinceResults = provinceData.filter(restaurant => restaurant.province.toLowerCase().startsWith(searchTermLower));
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
      <div className="flex flex-row items-center w-full" onClick={goToLandingPage}>
        <IoIosArrowBack className="" />
      <p>Home</p>
      </div>
      <p className="flex row-auto justify-center text-gray-500 font-bold">All</p>
      <SearchBar onSearch={handleSearch} 
        className="bg-gray-200 "  
      />
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
              <Star rating={restaurant.star}/>
            </div>
            <BottomBar />
          </div>
        ))}
      </div>
    </>
  );
};

export default All;
