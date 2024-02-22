import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Star } from "../../components/destination/Star";
import { LuCupSoda } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";
import { getRestaurantInfoById } from "../../models/restaurant";
import { getAllRestaurantSubImagesPublicUrl } from "../../models/storage.ts";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { SubImages } from "./Review";


export const RestaurantDetail = () => {
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
    <div className="flex flex-col mx-0 border font-sans">
      {firstRestaurant && (
        <div className="flex flex-col  ">

          <img
            src={firstRestaurant.imageUrl}
            className="object-cover w-full h-[300px]" />

          <div className="p-7 w-full h-full box-border">
            <p className="m-0 flex text-slate-800 font-bold   justify-between">
              {" "}

              {firstRestaurant.name}
              <MdOutlineBookmarkAdd size={20} />

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
              <img src="Mappic.jpg" alt="ffds" onClick={GotoMap} />
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
        </div>
      )}
    </div>
  );
};
