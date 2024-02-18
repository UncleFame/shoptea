import { useEffect, useRef, useState } from "react";
import { getPublicUrl, uploadRestaurantImage } from "../utils/restaurant";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getRestaurantInfoById, insertNewRestaurant, updateRestaurant } from "../models/restaurant";
import {useUser} from "../hooks/useUser"
import { useSearchParams } from "react-router-dom";

const UploadRes = () => {
  let [searchParams, _] = useSearchParams();
  const method = searchParams.get('method');
  const restaurantId = searchParams.get('restaurantId');
  const [isEditing, isUploading] = [method === "editing", method === "uploading"];
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [operationTime, setOperationTime] = useState("");
  const [price, setPrice] = useState("");
  const [province, setProvince] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [rectangleInput5Value, setRectangleInput5Value] = useState("");
  const [comment, setComment] = useState("");
  const {user} = useUser();
  const [imgSrc, setImgSrc] = useState("");
  
  const Pushtolandingpage = useCallback(() => {
    navigate("/res-preupload");
  }, [navigate]);
  const [rectangleInput6Value, setRectangleInput6Value] = useState("");
  const image = useRef(null);

  // Initial load
  useEffect(()=>{
    const fetchRestaurantInfo = async () => {
      if (!isEditing) return
      const restaurantInfo = await getRestaurantInfoById(restaurantId);
      // Destruct necessary information from the fetched restaurant
      const {name, open, close, price, province, phoneNum, comment, imageUrl} = restaurantInfo;
      // Set value to corresponding local state
      setName(_ => name);
      setOperationTime(_ => `${open}/${close}`);
      setPrice(_ => price);
      setProvince(_ => province)
      setPhoneNum(_ => phoneNum)
      setComment(_ => comment)
      setImgSrc(_ => imageUrl) 
    }

    fetchRestaurantInfo();
  },[])

  async function handleUploadImage(){
    try {
      const fileLength = image.current.files.length;
      if (isEditing) {
        let imageUrl
        if (fileLength >= 1) {
          // If file is added, upload to the storage
          await uploadRestaurantImage(image.current.files[fileLength - 1], name, 'main')
          imageUrl = await getPublicUrl(`restaurants/${name}/main.png`)
        }
        const [open, close] = operationTime.split("/");
        const updatedRestaurant = {
          close,
          comment,
          name,
          open,
          phoneNum,
          price,
          province,
          id : restaurantId,
          imageUrl
        }
        // update restaurant
        await updateRestaurant(updatedRestaurant)
        // show success message
        alert("แก้ไขร้านค้าสำเร็จ")
        return
      }
      
      // This will run if the user uploads new restaurant
      if (fileLength < 1) return alert("กรุณา upload รูปภาพร้านค้า")
      if (!name) return alert("กรุณาใส่ชื่อร้าน")
      await uploadRestaurantImage(image.current.files[fileLength - 1], name, 'main')

      const [open, close] = operationTime.split('/') 

      const imageUrl = await getPublicUrl(`restaurants/${name}/main.png`)

      const newRestaurant = {
        name : name,
        open,
        close,
        price : Number(price),
        province : province,
        phoneNum :phoneNum,
        comment,
        imageUrl,
        user_id : user.id
      }

      await insertNewRestaurant(newRestaurant);

      alert("สร้างร้านค้าสำเร็จ")

      setTimeout(()=>{
        navigate('/res-preupload')
      }, 1500)
    } catch (error) {
      alert(error.message)
    }
    
  }

  return (
    
  <div className="relative bg-white w-full h-[2494px] overflow-hidden text-left text-base text-gray-200 font-inter">
    <div className="flex w-full justify-between mt-50 px-5 box-border font-bold">
      <button onClick={Pushtolandingpage} className="text-material-theme-sys-dark-error-container bg-transparent text-left inline-block">
        <p>ยกเลิก </p>
      </button>
      <p>สร้างร้านใหม่</p>
      <button onClick={handleUploadImage} className="text-material-theme-sys-light-primary-fixed text-left inline-block bg-transparent">
      {isUploading ? "สร้าง" : "แก้ไข"}
      </button>
    </div>
     

      <div>
      </div>
      <div>
        

      </div>

    <div className="flex flex-col">
        <p>profile</p>
        <p>comment</p>

    </div>
      <textarea
        value={comment}
        onChange={e => setComment(e.target.value)}
        className="[border:none] bg-[transparent] inline-block font-inter text-xs [outline:none] absolute bottom-[1016px] left-[32px] font-bold text-gainsboro text-left w-[371px] h-[92px]"
        placeholder="comment"
      />
      <img
        className="absolute bottom-[1153px] left-[31px] rounded-[50%] w-[37px] h-[37px] object-cover"
        alt=""
        src="/ellipse-4@2x.png"
      />
      <b className="absolute bottom-[1153px] left-[77px] text-sm inline-block w-[142px] h-[27px]">
        Annette Black
      </b>
        <div className="absolute top-[0px] left-[0px] w-[700px] h-[141px]">
        </div>
      </div>
  
  );
};

export default UploadRes;