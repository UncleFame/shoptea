import { useEffect, useRef, useState } from "react";
import { useUser } from "../hooks/useUser";
import { ProfileImage } from "../components/profileandsearch";
import { getProfilePublicUrl } from "../models/storage.ts";

const Comment = () => {
  const [formData, setFormData] = useState({
    comment: "",
    rating: 0,
  });
  const { comment, rating } = formData;

  const handleUploadImage = () => {};

  return (
    <div className="relative bg-white w-full h-[2494px] overflow-hidden text-left text-base text-gray-200 font-inter">
      <div className="flex w-full justify-between mt-50 px-5 box-border font-bold">
        <button className="text-material-theme-sys-dark-error-container bg-transparent text-left inline-block">
          <p>ยกเลิก </p>
        </button>
        <p>rest</p>
        <button
          onClick={handleUploadImage}
          className="text-material-theme-sys-light-primary-fixed text-left inline-block bg-transparent"
        >
          สร้าง
        </button>
      </div>

      <div className="flex flex-col">
        <ProfileCard />

        <input
          className="mx-8 rounded-lg"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="comment"
        />
      </div>
    </div>
  );
};
export default Comment;

function ProfileCard({}) {
  const {user} = useUser();
  const [imgSrc, setImgSrc] = useState("");

  useEffect(()=>{
    if (!user) return 
    const fetchProfileImage = () => {
      const fetchedProfileImage = getProfilePublicUrl(user.id)
      setImgSrc(fetchedProfileImage);
    }

    fetchProfileImage()
  }, [user])
  return (
    <div className="flex gap-x-2">
      <ProfileImage imgSrc={imgSrc} size={50}/>
      <p className="font-semibold">{user?.email}</p>
    </div>
  );
}
