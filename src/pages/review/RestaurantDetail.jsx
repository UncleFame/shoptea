import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Star } from "../../components/destination/Star";
import { LuCupSoda } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";
import { getRestaurantInfoById } from "../../models/restaurant";
import { getAllRestaurantSubImagesPublicUrl } from "../../models/storage.ts";
import { MdOutlineBookmarkAdd } from "react-icons/md";


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
            <span className="m-0 flex text-slate-800 font-bold  justify-between">
              <p className="box-border p-0 m-0 text-gray-200">{firstRestaurant.name}</p>
              <MdOutlineBookmarkAdd size={20} />
            </span>

            <Star rating={firstRestaurant.star} />
            <p className="m-0 text-gray-100 text-sm">
              <span>Open {firstRestaurant.open}- {firstRestaurant.close}</span>
            </p>
            <p className="m-0 text-gray-200 text-sm">
              <span>ราคา {firstRestaurant.price}</span>
            </p>

            <p className="m-0  text-gray-200">{firstRestaurant.review}</p>
            <p className="m-0  text-gray-200 text-sm">เบอร์ {firstRestaurant.phoneNum}</p>

            <p className="text-gray-200 font-bold text-sm">Recommended</p>
            <div className="flex flex-row">
              <LuCupSoda size={"40"} />
              <div className="flex flex-col ">
                <p className="m-0 font-medium">{firstRestaurant.FavMenu}</p>
                <p className=" text-gray-200 m-0 font-semibold">
                  {firstRestaurant.FavMenuPrice}บาท
                </p>
              </div>
            </div>

            <p>{firstRestaurant.recommeded}</p>

            <p>{firstRestaurant.recommededmenuprice}</p>
            <SubImages images={subImages} />

            <div className="flex flex-col text-slate-500 my-5">
              <h3 className="text-gray-200 p-0 m-0 text-sm">Location</h3>
              <span className="flex items-center gap-x-1"><CiLocationOn /> <p className="m-0 p-0 translate-y-[-3px]">จ.{firstRestaurant.province}</p></span>
              <img className="w-full rounded-2xl mt-3" src="Mappic.jpg" alt="ffds" onClick={GotoMap} />
            </div>

            <div className="w-full h-[2px] bg-gray-300"></div>

            <div className="flex flex-col gap gap-y-5 mt-3">
              <h3 className="text-gray-200 font-semibold text-sm">Review</h3>
              <OwnerReview firstRestaurant={firstRestaurant}/>
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

const OwnerReview = ({firstRestaurant}) => {
  const ownerId = firstRestaurant.user_id
  
  return (
    <>
      <div className="flex gap-y-5 ">
        <img src="profileicon.png" alt="" className="h-[50px] w-[50px]" />

        <p>Profile Name</p>
      </div>
      <p>{firstRestaurant.Comment}</p>
    </>
  )
}

const SubImages = ({ images }) => {
  return (
    <div className="flex flex-col w-full items-start justify-center box-border">
      <h1 className="text-[17px] text-gray-500">รูปภาพย่อยของร้าน</h1>
      <ul className="flex w-full h-[200px] gap-x-5 box-border p-0 m-0">
        {images?.map((image) => (
          <SubImage key={image} image={image} />
        ))}
      </ul>
    </div>
  );
};

const SubImage = ({ image }) => {
  const [isImageFound, setIsImageFound] = useState(true);
  return (
    <div className="rounded-2xl overflow-hidden w-full">
      {isImageFound ? (
        <img
          onError={() => {
            setIsImageFound(false);
          }}
          key={image}
          className="h-full object-cover w-full box-border"
          src={image}
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-full w-full bg-gray-300 rounded-2xl">
          <p className="text-[14px] text-center">ไม่มีรูปภาพย่อยร้านค้า</p>
        </div>
      )}
    </div>
  );
};