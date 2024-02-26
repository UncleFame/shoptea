import { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Star } from "../../components/destination/Star";
import { LuCupSoda } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";
import { getRestaurantInfoById } from "../../models/restaurant";
import { getAllRestaurantSubImagesPublicUrl, getProfilePublicUrl } from "../../models/storage.ts";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { useFetchUser } from "../../hooks/useFetchUser";
import {
  deleteReviewById,
  fetchAllReviewsByRestaurantId,
} from "../../models/review.model";
import { FaMap, FaTrash } from "react-icons/fa";
import { useUser } from "../../hooks/useUser";

export const RestaurantDetail = () => {
  const [searchParams, _] = useSearchParams();
  const restaurantId = searchParams.get("restaurantId");
  const navigate = useNavigate();
  const [firstRestaurant, setFirstRestaurant] = useState(null);
  const [subImages, setSubImages] = useState(null);
  const [restaurantReview, setRestaurantReview] = useState(0);
  const GoComment = useCallback(() => {
    navigate(`/Comment?restaurantId=${restaurantId}`);
  }, [navigate]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const fetchedRestaurant = await getRestaurantInfoById(restaurantId);
      setFirstRestaurant(fetchedRestaurant);
      // get public url for sub images of the restaurant
      const fetchedSubImages = getAllRestaurantSubImagesPublicUrl(
        fetchedRestaurant.name
      );
      console.log(fetchedSubImages);
      setSubImages(fetchedSubImages);
      // Get restaurant reviews
      const fetchedReviews = await fetchAllReviewsByRestaurantId(restaurantId);
      const sumReview = fetchedReviews.reduce((accu, review)=> accu + review.star,0);
      const averageReview = sumReview / fetchedReviews.length
      setRestaurantReview(averageReview);

    };

    fetchRestaurants();
  }, []);

  return (
    <div className="flex flex-col mx-0 border font-sans">
      {firstRestaurant && (
        <div className="flex flex-col  ">
          <img
            src={`${firstRestaurant.imageUrl}?random=${crypto.randomUUID()}`}
            className="object-cover w-full h-[300px]"
          />

          <div className="p-7 w-full h-full box-border">
            <span className="m-0 flex text-slate-800 font-bold  justify-between">
              <p className="box-border p-0 m-0 text-gray-200">
                {firstRestaurant.name}
              </p>
            </span>

            <Star rating={firstRestaurant.star} />
            <p className="m-0 text-gray-100 text-sm">
              <span>
                Open {firstRestaurant.open}- {firstRestaurant.close}
              </span>
            </p>
            <p className="m-0 text-gray-200 text-sm">
              <span>ราคา {firstRestaurant.price} บาท</span>
            </p>

            <p className="m-0  text-gray-200 text-sm">
              เบอร์ {firstRestaurant.phoneNum}
            </p>

            <p className="text-gray-200 font-bold text-sm">Recommended</p>
            <div className="flex flex-row items-center">
              <LuCupSoda size={"40"} />
              <div className="flex flex-col">
                <p className="m-0 font-medium">{firstRestaurant.FavMenu}</p>
              </div>
            </div>

            <p>{firstRestaurant.recommededmenuprice}</p>
            <SubImages images={subImages} />

            <div className="flex flex-col text-slate-500 my-5">
              <h3 className="text-gray-200 p-0 m-0 text-sm">Location</h3>
              <span className="flex items-center gap-x-1">
                <CiLocationOn />{" "}
                <p className="m-0 p-0 translate-y-[-3px]">
                  จ.{firstRestaurant.province}
                </p>
              </span>
              <div
                onClick={() => window.open(firstRestaurant.googlemap, "_blank")}
                className="flex items-center gap-x-2"
              >
                <img
                  className="w-[30px] h-[30px] object-cover"
                  src="https://miro.medium.com/v2/resize:fit:1024/0*oJK4t4_NTgdBPPgz.png"
                />
                <p className="p-0 m-0 font-semibold text-blue-500">Link</p>
              </div>
            </div>

            <div className="w-full h-[2px] bg-gray-300"></div>

            <div className="flex flex-col gap-y-5 mt-10">
              <h3 className="text-gray-200 font-semibold text-sm m-0 p-0">
                Review
              </h3>
              <OwnerReview firstRestaurant={firstRestaurant} />

              <ReviewList restaurantId={restaurantId} />
            </div>

            <div className="w-full h-[2px] bg-gray-300"></div>

            <div className="flex justify-center mt-10">
              <IoMdAddCircleOutline size={"30"} onClick={GoComment} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const OwnerReview = ({ firstRestaurant }) => {
  const ownerId = firstRestaurant.user_id;
  const { user, loading } = useFetchUser(ownerId);
  const [profileImage, setProfileImage] = useState("");

  useEffect(()=>{
    if (!user) return
    const fetchImage = () => {
      const fetchedUrl = getProfilePublicUrl(user.id);
      setProfileImage(fetchedUrl)
    } 
    fetchImage()
  }, [user])
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-x-2">
        <img src={profileImage} alt="" className="h-[35px] w-[35px] object-cover rounded-full" />
        <div className="flex-col">
          <p className="p-0 m-0 font-bold">Owner</p>
          {loading ? null : (
            <p className="text-sm text-gray-200 font-semibold p-0 m-0">
              {user.email}
            </p>
          )}
        </div>
      </div>
      <h3 className="text-sm font-normal">{firstRestaurant.comment}</h3>
    </div>
  );
};

const SubImages = ({ images }) => {
  return (
    <div className="flex flex-col w-full items-start justify-center box-border">
      <h1 className="text-[17px] text-gray-500">รูปภาพเมนูแนะนำ</h1>
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
          src={`${image}?random=${crypto.randomUUID()}`}
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-full w-full bg-gray-300 rounded-2xl">
          <p className="text-[14px] text-center">ไม่มีรูปภาพเมนูแนะนำ</p>
        </div>
      )}
    </div>
  );
};

function Review({ review }) {
  const { user } = useUser();
  const isBelongToCurrentUser = review?.email === user?.email;
  const [profileImage, setProfileImage] = useState("");
  
  useEffect(()=>{
    if (!user) return
    const fetchUser = () => {
      const fetchedPublicUrl = getProfilePublicUrl(review.user_id);
      setProfileImage(fetchedPublicUrl)
    }

    fetchUser();
  }, [user])
  async function handleDeleteReview() {
    try {
      await deleteReviewById(review.id);
      alert("ลบรีวิวสำเร็จ");
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-x-2">
        <img src={profileImage} alt="" className="h-[35px] w-[35px] object-cover rounded-full" />
        <div className="flex-col">
          <p className="text-sm text-gray-200 font-semibold p-0 m-0">
            {review?.email}
          </p>
          <Star rating={review?.star} />
        </div>
        {isBelongToCurrentUser && (
          <FaTrash
            onClick={handleDeleteReview}
            className="mb-auto text-red-500 ml-auto"
            size={13}
          />
        )}
      </div>
      <h3 className="text-sm font-normal">{review?.comment}</h3>
    </div>
  );
}

function ReviewList({ restaurantId }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const fetchedReviews = await fetchAllReviewsByRestaurantId(restaurantId);
      console.log(fetchedReviews);
      setReviews((_) => fetchedReviews);
    };

    fetchReviews();
  }, []);
  return (
    <ul className="flex flex-col m-0 p-0">
      {reviews?.map((review) => {
        return <Review key={review.id} review={review} />;
      })}
    </ul>
  );
}
