import { useNavigate } from "react-router-dom";
import BottomBar from "../components/BottomBar";
import { useUser } from "../hooks/useUser";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { deleteRestaurantById, getRestaurantsByUserId } from "../models/restaurant";
import { ResPreUploadContext, ResPreUploadProvider } from "../contexts/ResPreUploadContext";
import { getUserInfo } from "../models/users";
import { deleteRestaurantCover } from "../models/storage";


const ResPreupload = () => {

  return (
    <main className="flex flex-col items-center gap-y-5">
      <ResPreUploadProvider>
        <NavBar />
        <DisplayRestaurant />
        <BottomBar />
      </ResPreUploadProvider>
    </main>
  );
};

const DisplayRestaurant = () => {
  const {restaurants} = useContext(ResPreUploadContext);

  return (
    <div className="flex flex-col items-center gap-y-5 w-full">
      <div className="flex flex-col gap-y-3 w-[95%]">
        {
          restaurants?.map(restaurant => 
            <RestaurantItem key={restaurant.id} restaurant={restaurant}/>
            )
        }
      </div>
      {restaurants?.length < 1 && <ReviewButton />}
    </div>
  )
}

const RestaurantItem = ({restaurant}) => {
  const [owner, setOwner] = useState('');
  const {user, setRestaurants} = useContext(ResPreUploadContext);

  async function handleDelete(){
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
    async function fetchUserInfo(){
      const userInfo = await getUserInfo(user.id)
      setOwner(userInfo)
    }

    fetchUserInfo();
  }, [])

  return (
    <div className="flex h-[120px] justify-between gap-x-5 w-full">
      <img className="w-[1/4] h-full object-cover" src={restaurant.imageUrl} alt="restaurant image"/>
      <div className="flex flex-col h-full justify-start items-start">
        <p>{restaurant.name}</p>
        <p>{owner?.email}</p>
      </div>
      <div className="flex flex-col h-full justify-between">
        <button className="rounded-full p-2 font-semibold">Edit</button>
        <button onClick={handleDelete} className="rounded-full p-2 font-semibold">Delete</button>
      </div>
    </div>
  )
}

const ReviewButton = () => {
  const navigate = useNavigate();

  function handleClick(e){
    e.preventDefault();
    navigate('/upload-res')
  }
  return (
    <button onClick={handleClick} className="bg-transparent border-2 border-solid border-green-300 w-[30%] rounded-full hover:scale-105 transition-all cursor-pointer">
      <h1 className="text-green-300 text-sm">Review +</h1>
    </button>
  )
}

const NavBar = () => {
  return (
    <div className="w-[430px] h-[116px] text-base text-gray-200">
      <div className="bg-white box-border w-[430px] h-[116px] border-[1px] border-solid border-gray-300" />
      <img
        className="absolute top-[58px] left-[325px] w-8 h-9 object-cover cursor-pointer"
        alt=""
        src="/vector-search-icon-1@2x.png"
      />
      <img
        className="absolute top-[58px] left-[379px] w-[33px] h-[33px] object-cover cursor-pointer"
        alt=""
        src="/9131529-1@2x.png"
      />
      <div className="absolute top-[67px] left-[calc(50%_-_52px)] font-extrabold inline-block w-[103px] h-[18px]">
        Review
      </div>
    </div>
  )
}

export default ResPreupload;
