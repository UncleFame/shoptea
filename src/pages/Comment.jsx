import { useEffect, useRef, useState } from "react";
import { useUser } from "../hooks/useUser";
import { ProfileImage } from "../components/profileandsearch";
import { getProfilePublicUrl } from "../models/storage.ts";
import { StarInput } from "../components/form/StarInput";
import { addReview } from "../models/review.model";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getRestaurantInfoById } from "../models/restaurant";
const Comment = () => {
  const [formData, setFormData] = useState({
    comment: "",
    rating: 0,
  });
  const { comment, rating } = formData;
  const { user } = useUser();
  const [searchParams, _] = useSearchParams();
  const restaurantId = searchParams.get("restaurantId");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    const fetchRestaurantInfo = async () => {
      const fetchedRestaurant = await getRestaurantInfoById(restaurantId);
      if (fetchedRestaurant.user_id === user.id) return navigate("/");
    };

    fetchRestaurantInfo();
  }, [user]);

  function handleUpdateFormData(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleAddReview() {
    try {
      const newReview = {
        email: user.email,
        comment,
        star: rating,
        user_id: user.id,
        restaurant_id: restaurantId,
      };
      await addReview(newReview);
      alert("สร้างรีวิวสำเร็จ");
      window.location.href = `/Review?restaurantId=${restaurantId}`;
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="relative bg-white w-full h-[2494px] overflow-hidden text-left text-base text-gray-200 font-inter">
      <div className="flex w-full justify-center mt-50 px-5 box-border font-bold">
        <p>Comment</p>
      </div>

      <CommentInput
        comment={comment}
        handleUpdateFormData={handleUpdateFormData}
        formData={formData}
        setFormData={setFormData}
      />
      <div className="flex justify-between w-full px-6 box-border mt-5">
        <button
          onClick={() => navigate("/")}
          className="bg-red-600 text-left inline-block text-white w-[100px] items-center justify-center py-3 rounded-lg"
        >
          <p className="p-0 m-0 font-semibold font-inter w-min mx-auto">ยกเลิก </p>
        </button>
        <button
          onClick={handleAddReview}
          className="bg-green-600 text-left inline-block w-[100px] items-center justify-center py-3 rounded-lg"
        >
          <p className="text-white p-0 m-0 font-semibold font-inter mx-auto w-min">สร้าง</p>
        </button>
      </div>
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

function CommentInput({
  comment,
  handleUpdateFormData,
  formData,
  setFormData,
}) {
  const { rating } = formData;

  function handleInputStar(star) {
    setFormData((prev) => ({
      ...prev,
      rating: star,
    }));
  }

  return (
    <div className="flex flex-col gap-y-3 font-sans w-[90%] mx-auto">
      <ProfileCard />
      <StarInput onClick={handleInputStar} rating={rating} />
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
