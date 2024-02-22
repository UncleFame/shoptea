import { useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";
import { RestaurantDetail } from "./RestaurantDetail";

const Review = () => {
  return (
    <main className="flex flex-col">
      <NavBar />
      <RestaurantDetail />
    </main>
  );
};

const NavBar = () => {
  const navigate = useNavigate();
  const GOhomepage = useCallback(() => {
    navigate("/landing-page-for-real");
  }, [navigate]);

  return (
    <nav className="flex items-center gap-x-1 pt-5 px-[5%] justify-start w-full mx-auto font-sans border-b-2 border-solid border-gray-300 font-semibold box-border">
      <IoIosArrowBack className="text-gray-200 text-lg" onClick={GOhomepage}/>
      <p
        className="items-center text-gray-200"
        onClick={GOhomepage}
      >
        Home
      </p>
    </nav>
  )
}


export default Review;
