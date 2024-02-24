import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { getPublicUrl, uploadRestaurantImage } from "../utils/restaurant";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  getRestaurantInfoById,
  insertNewRestaurant,
  updateRestaurant,
} from "../models/restaurant";
import { useUser } from "../hooks/useUser";
import { useSearchParams } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import {
  getAllRestaurantSubImagesPublicUrl,
  listAllRestaurantImages,
  updateRestaurantSubImage,
  uploadRestaurantSubImages,
} from "../models/storage.ts";
import Input from "../components/form/Input.jsx";
import { UploadResContext } from "../contexts/UploadResProvider.jsx";
import {StarInput} from "../components/form/StarInput"

const UploadRes = () => {
  let [searchParams, _] = useSearchParams();
  const method = searchParams.get("method");
  const restaurantId = searchParams.get("restaurantId");
  const [isEditing, isUploading] = [
    method === "editing",
    method === "uploading",
  ];
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    operationTime: "",
    price: "",
    province: "",
    phoneNum: "",
    imgSrc: "",
    comment: "",
    FavMenu: "",
    googlemap: "",
    star : 0
  });
  const {
    name,
    operationTime,
    price,
    province,
    phoneNum,
    comment,
    imgSrc,
    FavMenu,
    googlemap,
    star
  } = formData;

  const { user } = useUser();
  const [subImages, setSubImages] = useState({
    subImage1Src: "",
    subImage2Src: "",
    subImage3Src: "",
  });
  const { subImage1Src, subImage2Src, subImage3Src } = subImages;
  const Pushtolandingpage = useCallback(() => {
    navigate("/res-preupload");
  }, [navigate]);
  const image = useRef(null);
  // sub images
  const subImage1 = useRef(null);
  const subImage2 = useRef(null);
  const subImage3 = useRef(null);
  // Initial load
  useEffect(() => {
    const fetchRestaurantInfo = async () => {
      if (!isEditing) return;
      const restaurantInfo = await getRestaurantInfoById(restaurantId);
      // Destruct necessary information from the fetched restaurant
      const {
        name,
        open,
        close,
        price,
        province,
        phoneNum,
        comment,
        imageUrl,
        googlemap,
        FavMenu,
        star
      } = restaurantInfo;
      // Set value to corresponding local state
      setFormData((_) => ({
        name,
        operationTime: `${open}/${close}`,
        price,
        province,
        phoneNum,
        comment,
        imgSrc: imageUrl,
        FavMenu,
        googlemap,
        star
      }));
      // Fetch restaurant sub images if there are
      const imageArray = await listAllRestaurantImages(name);
      const hasSubImage = imageArray.some((image) =>
        image.name.includes("sub-image")
      );
      if (hasSubImage) {
        const subImagePublicUrlList = getAllRestaurantSubImagesPublicUrl(name);
        // Assign sub images of the restaurant to subImages local state
        setSubImages((prev) => {
          let finalValue = {};
          Object.keys(prev).map((key, index) => {
            finalValue[key] = subImagePublicUrlList[index];
          });
          return finalValue;
        });
      }
    };

    fetchRestaurantInfo();
  }, []);

  function handleUpdateFormData(event) {
    console.log(event.target.name);
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleUploadImage() {
    try {
      const fileLength = image.current.files.length;
      const [subImage1FileLength, subImage2FileLength, subImage3FileLength] = [
        subImage1,
        subImage2,
        subImage3,
      ].map((item) => item.current.files.length);
      const subFiles = [
        subImage1.current.files[subImage1FileLength - 1],
        subImage2.current.files[subImage2FileLength - 1],
        subImage3.current.files[subImage3FileLength - 1],
      ];

      if (isEditing) {
        let imageUrl;
        if (fileLength >= 1) {
          // If file is added, upload to the storage
          await uploadRestaurantImage(
            image.current.files[fileLength - 1],
            name,
            "main"
          );
          imageUrl = await getPublicUrl(`restaurants/${name}/main.png`);
        }

        [subImage1FileLength, subImage2FileLength, subImage3FileLength].map(
          (item, index) => {
            if (item >= 1)
              updateRestaurantSubImage(subFiles[index], name, index);
          }
        );

        const [open, close] = operationTime.split("/");
        const updatedRestaurant = {
          close,
          comment,
          name,
          open,
          phoneNum,
          price,
          province,
          id: restaurantId,
          imageUrl,
          FavMenu,
          googlemap: googlemap,
        };
        // update restaurant
        await updateRestaurant(updatedRestaurant);
        // show success message
        alert("แก้ไขร้านค้าสำเร็จ");
        return;
      }

      // This will run if the user uploads new restaurant
      if (fileLength < 1) return alert("กรุณา upload รูปภาพร้านค้า");
      if (!name) return alert("กรุณาใส่ชื่อร้าน");
      await uploadRestaurantImage(
        image.current.files[fileLength - 1],
        name,
        "main"
      );
      if (
        subImage1FileLength < 1 ||
        subImage2FileLength < 1 ||
        subImage3FileLength < 1
      )
        return alert("กรุณา upload รูปภาพย่อยของร้านค้าทั้งหมด");
      await uploadRestaurantSubImages(subFiles, name);

      const [open, close] = operationTime.split("/");

      const imageUrl = await getPublicUrl(`restaurants/${name}/main.png`);

      const newRestaurant = {
        name: name,
        open,
        close,
        price,
        province: province,
        phoneNum: phoneNum,
        comment,
        imageUrl,
        user_id: user.id,
        FavMenu,
        googlemap,
      };

      await insertNewRestaurant(newRestaurant);

      alert("สร้างร้านค้าสำเร็จ");

      setTimeout(() => {
        navigate("/res-preupload");
      }, 1500);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <UploadResContext.Provider
      value={{
        image,
        imgSrc,
        setFormData,
        subImage1,
        subImage1Src,
        subImage2,
        subImage2Src,
        subImage3,
        subImage3Src,
        setSubImages,
        Pushtolandingpage,
        handleUploadImage,
        isUploading,
        comment,
        handleUpdateFormData,
        star
      }}
    >
      <div className="flex flex-col items-center relative bg-white w-full h-full overflow-y-scroll text-left text-base text-gray-200 font-sans">
        <NavBar />
        <RestaurantMainImage />
        <InputList
          formData={formData}
          onUpdateFormData={handleUpdateFormData}
        />
        <InputSubImages />
      </div>
    </UploadResContext.Provider>
  );
};

const NavBar = () => {
  const { Pushtolandingpage, handleUploadImage, isUploading } =
    useContext(UploadResContext);
  return (
    <div className="flex w-full items-end pb-1.5 justify-between mb-5 px-5 box-border font-bold border-solid border-b-2 border-gray-400 pt-10">
      <button
        onClick={Pushtolandingpage}
        className="text-material-theme-sys-dark-error-container bg-transparent text-left inline-block"
      >
        <p className="p-0 m-0 text-red-500 font-bold text-sm">ยกเลิก </p>
      </button>
      <p className="p-0 m-0 font-bold text-sm">สร้างร้านใหม่</p>
      <button
        onClick={handleUploadImage}
        className="text-material-theme-sys-light-primary-fixed text-left inline-block bg-transparent text-sm font-bold"
      >
        {isUploading ? "สร้าง" : "แก้ไข"}
      </button>
    </div>
  );
};

const InputSubImages = () => {
  const {
    subImage1,
    subImage1Src,
    subImage2,
    subImage2Src,
    subImage3,
    subImage3Src,
    setSubImages,
  } = useContext(UploadResContext);

  return (
    <div className="w-[90%] mx-auto h-[200px] p-0 m-0">
      <h1 className="text-[17px] text-gray-200 w-full">รูปภาพย่อยร้านค้า</h1>
      <ul className="flex items-center justify-between w-full h-full gap-x-2 p-0 m-0">
        <input
          onChange={() => {
            let reader = new FileReader();
            let file =
              subImage1.current.files[subImage1.current.files.length - 1];
            reader.readAsDataURL(file);

            reader.onload = function () {
              setSubImages((prev) => ({
                ...prev,
                subImage1Src: reader.result,
              }));
            };
          }}
          ref={subImage1}
          type="file"
          className="w-full border-2 hidden"
          accept=".png"
        />
        <div
          className={`relative w-full h-full ${subImage1Src ? "" : "bg-gray-400"} rounded-2xl`}
        >
          {subImage1Src && (
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={subImage1Src}
            />
          )}
          <FaCamera
            onClick={() => {
              subImage1.current.click();
            }}
            className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"
          />
        </div>
        <input
          onChange={() => {
            let reader = new FileReader();
            let file =
              subImage2.current.files[subImage2.current.files.length - 1];
            reader.readAsDataURL(file);

            reader.onload = function () {
              setSubImages((prev) => ({
                ...prev,
                subImage2Src: reader.result,
              }));
            };
          }}
          ref={subImage2}
          type="file"
          className="w-full border-2 hidden"
          accept=".png"
        />
        <div
          className={`relative w-full h-full ${subImage2Src ? "" : "bg-gray-400"} rounded-2xl`}
        >
          {subImage2Src && (
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={subImage2Src}
            />
          )}
          <FaCamera
            onClick={() => {
              subImage2.current.click();
            }}
            className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"
          />
        </div>
        <input
          onChange={() => {
            let reader = new FileReader();
            let file =
              subImage3.current.files[subImage3.current.files.length - 1];
            reader.readAsDataURL(file);

            reader.onload = function () {
              setSubImages((prev) => ({
                ...prev,
                subImage3Src: reader.result,
              }));
            };
          }}
          ref={subImage3}
          type="file"
          className="w-full border-2 hidden"
          accept=".png"
        />
        <div
          className={`relative w-full h-full ${subImage3Src ? "" : "bg-gray-400"} rounded-2xl`}
        >
          {subImage3Src && (
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={subImage3Src}
            />
          )}
          <FaCamera
            onClick={() => {
              subImage3.current.click();
            }}
            className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"
          />
        </div>
      </ul>
    </div>
  );
};

const RestaurantMainImage = () => {
  const { imgSrc } = useContext(UploadResContext);
  return (
    <div className="relative ">
      {imgSrc ? (
        <img
          src={imgSrc}
          className="w-[220px] h-[183px] object-cover rounded-2xl"
        />
      ) : (
        <div className="rounded-3xs bg-gainsboro w-[220px] h-[183px]" />
      )}
      <InputUploadMainImage />
    </div>
  );
};

const InputUploadMainImage = () => {
  const { image, setFormData } = useContext(UploadResContext);
  return (
    <div className="absolute top-1/2 right-1/2 w-[26px] h-[26px]">
      <img
        onClick={() => image.current.click()}
        className="w-[26px] h-[26px] object-cover"
        alt=""
        src="/uploadbutton.png"
      />
      <input
        id="fileInput"
        ref={image}
        className="w-[26px] h-[26px] object-cover opacity-0 cursor-pointer"
        alt=""
        type="file"
        onChange={() => {
          let reader = new FileReader();
          let file = image.current.files[image.current.files.length - 1];
          reader.readAsDataURL(file);

          reader.onload = function () {
            setFormData((prev) => ({
              ...prev,
              imgSrc: reader.result,
            }));
          };
        }}
      />
    </div>
  );
};

const InputComment = ({ name }) => {
  const { comment, handleUpdateFormData, star } = useContext(UploadResContext);

  return (
    <div className="flex flex-col gap-y-1.5 items-start w-full mx-auto h-[150px]">
      <UserProfileCard />
      <StarInput />
      <textarea
        name={name}
        className="border-2 outline-none border-solid border-gray-300 rounded-lg w-full h-full p-3 box-border font-sans"
        value={comment}
        placeholder="Comment"
        onChange={handleUpdateFormData}
      ></textarea>
    </div>
  );
};

const UserProfileCard = () => {
  const { user } = useUser();
  return (
    <div className="flex w-full items-center gap-x-2.5">
      <img
        className="rounded-[50%] w-[37px] h-[37px] object-cover"
        alt=""
        src="/ellipse-4@2x.png"
      />
      <b className="text-sm inline-block w-[142px] p-0">{user?.email}</b>
    </div>
  );
};

const InputList = ({ formData }) => {
  const { handleUpdateFormData } = useContext(UploadResContext);
  const formLabels = useMemo(() => {
    return [
      "ชื่อร้าน",
      "เวลา เปิด/ปิด",
      "ราคา",
      "จังหวัด",
      "เบอร์",
      "Comment",
      "Location",
      "เมนูแนะนำ",
      "Location",
    ];
  }, []);
  return (
    <ul className="flex flex-col gap-y-3 w-[90%] m-0 p-0 mx-auto">
      {Object.keys(formData).map((key, index) => {
        switch (key) {
          case "comment":
            return <InputComment name={key} key={key} />;
          case "imgSrc":
            return null;
          default:
            return (
              <Input
                label={formLabels[index]}
                key={key}
                name={key}
                value={formData[key]}
                onChange={handleUpdateFormData}
              />
            );
        }
      })}
    </ul>
  );
};

export default UploadRes;
