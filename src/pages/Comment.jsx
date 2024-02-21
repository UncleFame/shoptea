import { useEffect, useRef, useState } from "react";
import { getPublicUrl, uploadRestaurantImage } from "../utils/restaurant";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getRestaurantInfoById, insertNewRestaurant, updateRestaurant } from "../models/restaurant";
import {useUser} from "../hooks/useUser"
import { useSearchParams } from "react-router-dom";



const Comment = () => {
  const [comment,setComment] = useState("")
  const handleUploadImage = () => {

  }

    return ( 
  <div className="relative bg-white w-full h-[2494px] overflow-hidden text-left text-base text-gray-200 font-inter">
    <div className="flex w-full justify-between mt-50 px-5 box-border font-bold">
      <button  className="text-material-theme-sys-dark-error-container bg-transparent text-left inline-block">
        <p>ยกเลิก </p>
      </button>
      <p>rest</p>
      <button onClick={handleUploadImage} className="text-material-theme-sys-light-primary-fixed text-left inline-block bg-transparent">
      สร้าง 
      </button>
    </div>
     

      <div>
      </div>
      <div>
        

      </div>

    <div className="flex flex-col">
        <div className="flex flex">
        <img
        className="rounded-[50%] w-[37px] h-[37px] object-cover"
        alt=""
        src="/ellipse-4@2x.png"
      />
      <p>Annette Black</p>
    
        </div>
        
      <input
        className="mx-8 rounded-lg"
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder="comment"
      />

    </div>
        </div>
  
  );
}
export default Comment