import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "../utils/auth";
import { IoChevronBack } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import { IoLogoFacebook } from "react-icons/io";
import { useUser } from "../hooks/useUser";
import { ProfileImage } from "../components/profileandsearch";
import { getProfilePublicUrl } from "../models/storage.ts";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  function handleSignOut() {
    try {
      signOut();

      alert("ออกจากระบบสำเร็จ");

      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } catch (error) {
      alert(error.message);
    }
  }

  const onBacktohome1ImageClick = useCallback(() => {
    navigate("/landing-page-for-real");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-ful overflow-hidden text-left font-inter">
      <div className="flex flex-row items-center justify-start">
        <p className="" onClick={onBacktohome1ImageClick}>
          <IoChevronBack />
          Home
        </p>
      </div>
      <div className="flex-col border-solid rounded-xl border-gray-300 border-2 text-center item-center w-[95%] mx-auto justify-center gap-y-[px] mt-[10%]">
        <ProfileCard />
        <div className="container py-10 mx-0 min-w-full flex flex-col items-center">
          <p
            className="text-center button-center w-[100px] py-1.5 px-4 mt-3 rounded-lg  cursor-pointer border-gray-300  border-solid border-2  text-gray-200 "
            onClick={() => navigate(`/EditProfile?userId=${user.id}`)}
          >
            แก้ไข
          </p>
        </div>

      </div>

      <div className="w-full bg-white  box-border mt-4  h-[2px] gap-y-5 border-solid border-gray-400" />
      <div className="w-full bg-darkgray box-border h-[2px] gap-y-5 border-solid border-gray-400" />

      <div className="flex flex-col w-[95%] mx-auto items-center px-4 mt-2 box-border">
        <p
          className=" rounded-lg w-full cursor-pointer py-1 text-center border-gray-300 border-solid border-2 text-gray-200 "
          onClick={handleSignOut}
        >
          ออกระบบ
        </p>
      </div>
    </div>
  );
};

const ProfileCard = () => {
  const [profileImage, setProfileImage] = useState("");
  const { user, loading } = useUser();

  useEffect(() => {
    if (!user) return;
    async function fetchProfileImage() {
      setProfileImage((_) => getProfilePublicUrl(user.id));
    }
    fetchProfileImage();
  }, [user]);

  return (
    <div className="translate-y-[-30%] h-full max-h-[300px] w-max mx-auto">
      <ProfileImage imgSrc={profileImage} size={80} />
      <p className="text-gray-200 font-semibold">{user?.email}</p>
    </div>
  );
};

export default Profile;
