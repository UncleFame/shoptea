import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { getProfilePublicUrl } from "../models/storage.ts";
import {useUser} from "../hooks/useUser.jsx"

export const ProfileAndSearch = ({
  isTitleVisible = false,
  header,
  graybar = false,
}) => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState("");
  const {user} = useUser();

  useEffect(() => {
    const fetchProfileImage = () => {
      if (!user) return
      const fetchedUrl = getProfilePublicUrl(user.id)
      setProfileImage(fetchedUrl);
    }

    fetchProfileImage();
  }, [user]);

  return (
    <nav
      className={`flex relative items-center w-full justify-between gap-4 py-5 box-border px-5 ${graybar ? "border-solid border-b-2 border-gray-300" : ""}`}
    >
      {isTitleVisible && (
        <div className="flex flex-col gap-y-2">
          <p className="m-0 text-[16px] font-bold text-gray-200">MatCha&Tea</p>
          <p className="m-0 text-green-700 font-semibold text-[16px]">
            เรานำชามาให้คุณ
          </p>
        </div>
      )}
      <p className="absolute left-1/2 translate-x-[-50%] text-gray-500 font-bold font-sans">
        {header}
      </p>
      <span
        className={`flex gap-x-2.5 ${isTitleVisible ? "" : "ml-auto"} justify-end`}
      >
        <IoSearchOutline
          className="text-black bg-gray-300 p-[9px] rounded-full"
          size={17}
          onClick={() => navigate("/All")}
        />
        <ProfileImage imgSrc={profileImage} onClick={() => navigate("/profile")} />
      </span>
    </nav>
  );
};

export const ProfileImage = ({ onClick, size = 35, imgSrc = "" }) => {
  if (!imgSrc)
    return (
      <div
        onClick={onClick}
        className={`w-[${size}px] h-[${size}px] rounded-full bg-gray-300`}
      ></div>
    );

  if (size === "full")
    return (
      <img
        className="object-cover rounded-full w-full h-full"
        onClick={onClick}
        src={imgSrc}
      />
    );

  return (
    <img
      style={{
        width: `${size}px`,
        heigth: `${size}px`,
      }}
      className="object-cover rounded-full"
      onClick={onClick}
      src={imgSrc}
    />
  );
};

export default ProfileAndSearch;
