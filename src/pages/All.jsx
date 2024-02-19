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
        className="bg-gray-400 w-full text-black placeholder-gray-500 rounded-xl px-8"
        type="text"
        placeholder="ค้นหา ชื่อร้านค้า หรือ จังหวัด"
        onChange={handleChange}
      />
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <FaMagnifyingGlass size={10} className="text-gray-500" />
      </span>
    </div>
  );
};

const All = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const { data } = await supabase.from("restaurant_details").select();
        setFilteredRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error.message);
      }
    };

    fetchRestaurants();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchTerm.trim() === '') {
          const { data } = await supabase.from("restaurant_details").select();
          setFilteredRestaurants(data);
          return;
        }
  
        const { data, error } = await supabase
          .from("restaurant_details")
          .select()
          .textSearch(["name", "province"], searchTerm.toLowerCase());
  
        if (error) {
          console.error("Error fetching data:", error.message);
          return;
        }
  
        setFilteredRestaurants(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
  
    fetchData();
  }, [searchTerm]);
  
  const goReviewPage = useCallback((index) => {
    navigate(`/Review?restaurantId=${index}`);
  }, [navigate]);

  const handleSearch = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  return (
    <div className="flex flex-col mx-0 p-10 gap-y-5">
      <SearchBar onSearch={handleSearch} />
      {filteredRestaurants.map((restaurant, index) => (
        <div className="flex gap-x-5" key={index}>
          <img
            src={restaurant.imageUrl}
            className="w-[150px] h-[150px] rounded-lg cursor-pointer"
            onClick={() => goReviewPage(index)}
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
      ))}
    </div>
  );
};

export default All;
