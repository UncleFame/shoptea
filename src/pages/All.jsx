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
      className="flex flex-row mx-auto"
      type="text"
      placeholder="Search..."
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
        const { data, error } = await supabase
          .from("restaurant_details")
          .select()
          .textSearch("name", searchTerm);

        if (error) {
          console.error("Error fetching data:", error.message);
        } else {
          setFilteredRestaurants(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    if (searchTerm !== '') {
      fetchData();
    } else {
      setFilteredRestaurants(sampleRestaurants); // Reset filtered restaurants when search term is empty
    }
  }, [searchTerm, sampleRestaurants]);

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
      <div className="flex flex-col mx-0 p-10 gap-y-5">
        {filteredRestaurants?.map((restaurant) => (
          <div className="flex gap-x-5" key={restaurant.id}>
            <img src={restaurant.imageUrl} className="max-w-[150px]" alt={restaurant.name} />
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
