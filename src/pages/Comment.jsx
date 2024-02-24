import { useEffect, useRef, useState } from "react";
import { useUser } from "../hooks/useUser";
import { ProfileImage } from "../components/profileandsearch";
import { getProfilePublicUrl } from "../models/storage.ts";
import {StarInput} from "../components/form/StarInput"
import { addReview } from "../models/review.model";
import { useSearchParams } from "react-router-dom";
const Comment = () => {
  const [formData, setFormData] = useState({
    comment: "",
    rating: 0,
  });
  const { comment, rating } = formData;
  const {user} = useUser();
  const [searchParams, _] = useSearchParams();
  const restaurantId = searchParams.get('restaurantId');

  function handleUpdateFormData(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleAddReview(){
    try {
      const newReview = {
        email : user.email,
        comment,
        star : rating,
        user_id : user.id,
        restaurant_id : restaurantId
      }
      await addReview(newReview)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="relative bg-white w-full h-[2494px] overflow-hidden text-left text-base text-gray-200 font-inter">
      <div className="flex w-full justify-between mt-50 px-5 box-border font-bold">
        <button className="text-material-theme-sys-dark-error-container bg-transparent text-left inline-block">
          <p>ยกเลิก </p>
        </button>
        <p>Comment</p>
        <button className="text-material-theme-sys-light-primary-fixed text-left inline-block bg-transparent">
          สร้าง
        </button>
      </div>

      <CommentInput
        comment={comment}
        handleUpdateFormData={handleUpdateFormData}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};
export default Comment;

function ProfileCard({}) {
  const { user } = useUser();
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    if (!user) return;
    const fetchProfileImage = () => {
      const fetchedProfileImage = getProfilePublicUrl(user.id);
      setImgSrc(fetchedProfileImage);
    };

    fetchProfileImage();
  }, [user]);
  return (
    <div className="flex gap-x-2">
      <ProfileImage imgSrc={imgSrc} size={50} />
      <p className="font-semibold">{user?.email}</p>
    </div>
  );
}

function CommentInput({ comment, handleUpdateFormData, formData, setFormData }) {
  const {rating} = formData;

  function handleInputStar(star){
    setFormData(prev => ({
      ...prev,
      rating : star
    }))
  }

  return (
    <div className="flex flex-col gap-y-3 font-sans w-[90%] mx-auto">
      <ProfileCard />
      <StarInput onClick={handleInputStar} rating={rating}/>
      <textarea
        className="w-full h-[120px] bg-gray-300 rounded-lg p-4 box-border"
        name="comment"
        value={comment}
        onChange={handleUpdateFormData}
        placeholder="comment"
      ></textarea>
    </div>
  );
}
