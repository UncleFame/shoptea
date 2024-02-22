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

export const SubImages = ({ images }) => {
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

export default Review;
