import { useNavigate } from "react-router-dom";
import BottomBar from "../components/BottomBar";


const ResPreupload = () => {

  return (
    <main className="flex flex-col items-center gap-y-5">
      <NavBar />
      <ReviewButton />
      <BottomBar />
    </main>
  );
};

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
