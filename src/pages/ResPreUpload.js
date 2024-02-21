import { useNavigate } from "react-router-dom";
import BottomBar from "../components/BottomBar";
import { useContext, useEffect, useLayoutEffect, useState, useCallback } from "react";
import { deleteRestaurantById, getRestaurantsByUserId } from "../models/restaurant";
import { ResPreUploadContext, ResPreUploadProvider } from "../contexts/ResPreUploadContext";
import { getUserInfo } from "../models/users";
import { deleteRestaurantCover } from "../models/storage.ts";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

import ProfileAndSearch from "../components/profileandsearch";


const ResPreupload = () => {

  return (
    <main className="flex flex-col overflow-x-hidden w-full items-center gap-y-5 px-5 box-border relative">
      <ResPreUploadProvider>
        <ProfileAndSearch header="Review" />
        <DisplayRestaurant />
        <BottomBar />
      </ResPreUploadProvider>
    </main>
  );
};

const DisplayRestaurant = () => {
  const { restaurants } = useContext(ResPreUploadContext);

  return (
    <div className="flex flex-col items-center gap-y-5 w-full">

      <span className="bg-gray-300 w-full h-[2px]">  </span>

      <div className="flex flex-col gap-y-3 w-full px-5">
        {
          restaurants?.map(restaurant =>
            <RestaurantItem key={restaurant.id} restaurant={restaurant} />
          )
        }
      </div>
      {restaurants?.length < 1 && <ReviewButton />}
    </div>
  )
}

const RestaurantItem = ({ restaurant }) => {
  const [owner, setOwner] = useState('');
  const { user, setRestaurants } = useContext(ResPreUploadContext);
  const navigate = useNavigate();
  async function handleDelete() {
    try {
      await deleteRestaurantById(restaurant.id);
      await deleteRestaurantCover(restaurant.name);
      alert("ลบร้านค้าสำเร็จ")
      const latestRestaurants = await getRestaurantsByUserId(user.id)
      // update updated restaurants to UI
      setRestaurants(_ => {
        return latestRestaurants
      })
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        if (user) {
          const userInfo = await getUserInfo(user.id)

          setOwner(userInfo)
        }
      } catch (error) {
        console.error(error.message)
        alert(error.message)
      }
    }

    fetchUserInfo();
  }, [])


  const navigatetordit = useCallback((restaurantId) => {
    navigate(`/upload-res?method=editing&restaurantId=${restaurantId}`);
  }, [navigate]);

  return (
    <div className="flex h-[150px] justify-between gap-x-5 w-full">
      <img className="w-full h-full object-cover rounded-2xl" src={restaurant.imageUrl} alt="restaurant image" />
      <div className="flex w-1/3 flex-col h-full justify-start items-start">
        <p className="w-full">{restaurant.name}</p>
        <p className="w-full break-words">{owner?.email}</p>
      </div>
      <div className="flex flex-col w-full h-full justify-between">
        <FaRegEdit onClick={() => navigatetordit(restaurant.id)} className=" p-2 font-semibold"
          size={20} />
        <RiDeleteBin6Line onClick={handleDelete} className="p-2  " size={20} />


      </div>
    </div>
  )
}

const ReviewButton = () => {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate('/upload-res?method=uploading')
  }
  return (
    <button onClick={handleClick} className="bg-transparent border-2 border-solid border-green-300 w-[30%] rounded-full hover:scale-105 transition-all cursor-pointer">
      <h1 className="text-green-300 text-sm">Review +</h1>
    </button>
  )
}


export default ResPreupload;
