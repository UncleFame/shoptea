import { useNavigate } from "react-router-dom";
import BottomBar from "../components/BottomBar";
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  useCallback,
} from "react";
import {
  deleteRestaurantById,
  getRestaurantsByUserId,
} from "../models/restaurant";
import {
  ResPreUploadContext,
  ResPreUploadProvider,
} from "../contexts/ResPreUploadContext";
import { getUserInfo } from "../models/users";
import { deleteRestaurantCover } from "../models/storage.ts";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUserLarge } from "react-icons/fa6";
import { IoMdInformationCircle } from "react-icons/io";

import ProfileAndSearch from "../components/profileandsearch";

const ResPreupload = () => {
  return (
    <main className="flex flex-col overflow-x-hidden w-full items-center gap-y-5 box-border relative font-sans">
      <ResPreUploadProvider>
        <ProfileAndSearch graybar={true} header="Review" />
        <DisplayRestaurant />
        <BottomBar />
      </ResPreUploadProvider>
    </main>
  );
};

const DisplayRestaurant = () => {
  const { restaurants } = useContext(ResPreUploadContext);

  return (
    <div className="flex flex-col items-center gap-y-5 w-[92.5%] mx-auto">
      {restaurants?.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
      {restaurants?.length < 1 && <ReviewButton />}
    </div>
  );
};

const RestaurantItem = ({ restaurant }) => {
  const [owner, setOwner] = useState("");
  const { user, setRestaurants } = useContext(ResPreUploadContext);
  const navigate = useNavigate();
  async function handleDelete() {
    try {
      await deleteRestaurantById(restaurant.id);
      await deleteRestaurantCover(restaurant.name);
      alert("ลบร้านค้าสำเร็จ");
      const latestRestaurants = await getRestaurantsByUserId(user.id);
      // update updated restaurants to UI
      setRestaurants((_) => {
        return latestRestaurants;
      });
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        if (user) {
          const userInfo = await getUserInfo(user.id);

          setOwner(userInfo);
        }
      } catch (error) {
        console.error(error.message);
        alert(error.message);
      }
    }

    fetchUserInfo();
  }, []);

  const navigatetordit = useCallback(
    (restaurantId) => {
      navigate(`/upload-res?method=editing&restaurantId=${restaurantId}`);
    },
    [navigate]
  );

  return (
    <div className="flex h-[150px] box-border border-solid border-2 rounded-lg border-gray-300 justify-between gap-x-5 w-full p-[10px]">
      <div className="flex w-full gap-x-5">
        <div className="flex flex-col w-full h-full ">
          <img
            className=" w-full h-5/6  object-cover rounded-2xl"
            src={restaurant.imageUrl}
            alt="restaurant image"
          />
          <div className="gap-x-1 flex flex-row text-[10px] text-gray-200 items-center h-1/6">
            <IoMdInformationCircle />
            <p>ข้อมูลแก้ไข วว/ดด/ปป</p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-y-1 h-full justify-start items-start py-3">
          <p className=" font-bold text-gray-200 w-full p-0 m-0">{restaurant.name}</p>
          <div className="flex items-center gap-x-2 ">
            <FaUserLarge className="text-gray-200"/>
            <p className="w-full break-words text-slate-300 text-sm p-0 m-0 font-semibold translate-y-[-2px]"> {owner?.email}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-max h-full justify-between">
        <FaRegEdit
          onClick={() => navigatetordit(restaurant.id)}
          className=" p-2 font-semibold"
          size={20}
        />
        <RiDeleteBin6Line
          onClick={handleDelete}
          className="p-2  text-red-600 "
          size={20}
        />
      </div>
    </div>
  );
};

const ReviewButton = () => {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    navigate("/upload-res?method=uploading");
  }
  return (
    <button
      onClick={handleClick}
      className="bg-transparent border-2 border-solid border-green-300 w-[30%] rounded-full hover:scale-105 transition-all cursor-pointer"
    >
      <h1 className="text-green-300 text-sm">Review +</h1>
    </button>
  );
};

export default ResPreupload;
