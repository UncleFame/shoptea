import { useCallback, useEffect, useState } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { Star } from "../components/destination/Star";
import { LuCupSoda } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";

import { IoMdAddCircleOutline } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { getRestaurantInfoById } from "../models/restaurant";
import { getAllRestaurantSubImagesPublicUrl } from "../models/storage.ts";

const Review = () => {
  const navigate = useNavigate();
  const GOhomepage = useCallback(() => {
    navigate("/landing-page-for-real");
  }, [navigate]);
  return (
    <div className="flex flex-col">
      <p
        className="mx-5 my-5 items-center text-gray-200  font-semibold "
        onClick={GOhomepage}
      >
        <IoIosArrowBack />
        Home{" "}
      </p>

      <RestaurantList />
    </div>
  );
};

const RestaurantList = () => {
  const [searchParams, _] = useSearchParams();
  const restaurantId = searchParams.get("restaurantId");
  const navigate = useNavigate();
  const [firstRestaurant, setFirstRestaurant] = useState(null);
  const [subImages, setSubImages] = useState(null);
  const GotoMap = useCallback(() => {
    window.location.href = firstRestaurant && firstRestaurant.googlemap;
  }, [firstRestaurant]);
  const GoComment = useCallback(() => {
    navigate("/Comment");
  }, [navigate]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const fetchedRestaurant = await getRestaurantInfoById(restaurantId);
      setFirstRestaurant(fetchedRestaurant);
      // get public url for sub images of the restaurant
      const fetchedSubImages = getAllRestaurantSubImagesPublicUrl(
        fetchedRestaurant.name
      );
      console.log(fetchedSubImages);
      setSubImages(fetchedSubImages);
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="flex flex-col mx-0 p-10 border">
      {firstRestaurant && (
        <div className="flex flex-col  ">
          <img
            src={firstRestaurant.imageUrl}
            className=" object-cover  w-full h-[350px] mx-auto "
          />
          <p className="m-0 flex flex-col text-neutral-400">
            {" "}
            {firstRestaurant.name}
          </p>
          <Star rating={firstRestaurant.star} />
          <p className="m-0 text-gray-100 ">
            <span>Open</span>
            {firstRestaurant.open}- {firstRestaurant.close}
          </p>
          <p className="m-0 text-slate-500">
            <span>ราคา</span>
            {firstRestaurant.price}
          </p>

          <p className="m-0  text-slate-500">{firstRestaurant.review}</p>
          <p className="m-0  text-slate-500">{firstRestaurant.phoneNum}</p>

          <p className=" font-bold "> Recommended</p>
          <div className="flex flex-row">
            <LuCupSoda size={"40"} />
            <div className="flex flex-col ">
              <p className="m-0 font-medium">{firstRestaurant.FavMenu}</p>
              <p className=" text-gray-500 m-0">
                {firstRestaurant.FavMenuPrice}บาท
              </p>
            </div>
          </div>

          <p>{firstRestaurant.recommeded}</p>

          <p>{firstRestaurant.recommededmenuprice}</p>
          <SubImages images={subImages} />
          <div className="flex flex-col  text-slate-500 ">
            Location
            <p>
              {" "}
              <CiLocationOn /> จ.{firstRestaurant.province}
            </p>
          </div>

          <div className="flex flex-col gap gap-y-5  ">
            <p
              src="https://www.google.com/maps/search/assumption+university/@13.61772,100.8255361,13z/data=!3m1!4b1?hl=en&entry=ttu"
              onClick={GotoMap}
            >
              {" "}
              {firstRestaurant.googlemap}{" "}
            </p>
            <span className="-8 w-full h-1 bg-gray-300"></span>
            review
            <div className="flex gap-y-5 ">
              <img src="profileicon.png" alt="" className="h-[50px] w-[50px]" />

              <p>Profile Name</p>
            </div>
            <p>{firstRestaurant.Comment}</p>
          </div>

          <div className="flex justify-center">
            <IoMdAddCircleOutline size={"30"} onClick={GoComment} />
          </div>
        </div>
      )}
    </div>
  );
};

const SubImages = ({ images }) => {
  return (
    <div className="flex gap-6 h-[200px] ">
      {images?.map((image) => (
        <SubImage key={image} image={image} />
      ))}
    </div>
  );
};

const SubImage = ({ image }) => {
  const [isImageFound, setIsImageFound] = useState(true);
  return (
    <>
      {isImageFound ? (
        <img
          onError={() => {
            setIsImageFound(false);
          }}
          key={image}
          className="h-full object-cover w-1/3"
          src={image}
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-full w-1/3 bg-gray-300 rounded-2xl">
          <p className="text-[14px] text-center">ไม่มีรูปภาพย่อยร้านค้า</p>
        </div>
      )}
    </>
  );
};

export default Review;
