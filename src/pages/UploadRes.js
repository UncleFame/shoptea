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
  const [FavMenu,setFavMenu] = useState("");
  const [googlemap,setGoolemap] = useState("")
  const [Imgaemini,setImagemini] = useState("")
  const Pushtolandingpage = useCallback(() => {
    navigate("/res-preupload");
  }, [navigate]);
  const image = useRef(null);

  // Initial load
  useEffect(()=>{
    const fetchRestaurantInfo = async () => {
      if (!isEditing) return
      const restaurantInfo = await getRestaurantInfoById(restaurantId);
      // Destruct necessary information from the fetched restaurant
      const {name, open, close, price, province, phoneNum, comment, imageUrl,googlemap} = restaurantInfo;
      // Set value to corresponding local state
      setName(_ => name);
      setOperationTime(_ => `${open}/${close}`);
      setPrice(_ => price);
      setProvince(_ => province)
      setPhoneNum(_ => phoneNum)
      setComment(_ => comment)
      setImgSrc(_ => imageUrl) 
      setFavMenu(_ => FavMenu)
      setGoolemap(_ => googlemap)
      
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
          imageUrl,
          FavMenu,
          googlemap: googlemap
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
        user_id : user.id,
        FavMenu,
        googlemap
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
      {
        imgSrc ?
          <img src={imgSrc} className="absolute top-[174px] left-[105px] w-[220px] h-[183px] object-cover rounded-2xl" />
          :
          <div className="absolute top-[174px] left-[105px] rounded-3xs bg-gainsboro w-[220px] h-[183px]" />
      }

      <div>
        <label htmlFor="fileInput" className="relative">
          <img
            className="absolute top-[202px] left-[202px] w-[26px] h-[26px] object-cover"
            alt=""
            src="/uploadbutton.png"
          />
          <input
            id="fileInput"
            ref={image}
            className="absolute top-[252px] left-[202px] w-[26px] h-[26px] object-cover opacity-0 cursor-pointer"
            alt=""
            type="file"
            onChange={()=>{
              let reader = new FileReader();
              let file = image.current.files[image.current.files.length - 1];
              reader.readAsDataURL(file);

              reader.onload = function(){
                setImgSrc(reader.result)
              }
            }}
          />
        </label>
      </div>
      <div>
        

      </div>

      <input
        className="[outline:none] bg-white absolute top-[428px] left-[29px] rounded-8xs box-border w-[375px] h-6 border-[1px] border-solid border-gray-400"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        className="[outline:none] bg-white absolute top-[507px] left-[29px] rounded-8xs box-border w-[375px] h-6 border-[1px] border-solid border-gray-400"
        type="text"
        value={operationTime}
        onChange={(event) => setOperationTime(event.target.value)}
      />
      <input
        className="[outline:none] bg-white absolute top-[586px] left-[29px] rounded-8xs box-border w-[375px] h-6 border-[1px] border-solid border-gray-400"
        type="text"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <input
        className="[outline:none] bg-white absolute top-[665px] left-[30px] rounded-8xs box-border w-[375px] h-6 border-[1px] border-solid border-gray-400"
        type="text"
        value={province}
        onChange={(event) => setProvince(event.target.value)}
      />
      <input
        className="[outline:none] bg-white absolute top-[744px] left-[30px] rounded-8xs box-border w-[375px] h-6 border-[1px] border-solid border-gray-400"
        type="text"
        value={phoneNum}
        onChange={(event) => setPhoneNum(event.target.value)}
      />
      <input
        className="Recommend [outline:none] bg-white absolute top-[823px] left-[31px] rounded-8xs box-border w-[375px] h-6 border-[1px] border-solid border-gray-400"
        type="text"
        value={FavMenu}
        onChange={(event) => setFavMenu(event.target.value)}
      />
      
      <input
        className="[outline:none] bg-white absolute top-[1040px] left-[30px] rounded-8xs box-border w-[375px] h-6 border-[1px] border-solid border-gray-400"
        type="text"
        value={googlemap}
        onChange={(event) => setGoolemap(event.target.value)}
      />
      
      <b className="absolute top-[403px] left-[28px] inline-block w-[57px] h-[25px]">
        ชื่อร้าน
      </b>
      <b className="absolute top-[482px] left-[28px] inline-block w-[93px] h-[25px]">
        เวลา เปิด/ปิด
      </b>
      <b className="absolute top-[561px] left-[28px] inline-block w-[93px] h-[25px]">
        ราคา
      </b>
      <b className="absolute top-[640px] left-[29px] inline-block w-[93px] h-[25px]">
        จังหวัด
      </b>
      <b className="absolute top-[719px] left-[29px] inline-block w-[93px] h-[25px]">
        เบอร์
      </b>
      <b className="absolute top-[798px] left-[30px] inline-block w-[115px] h-[25px]">
        Recommend
      </b>
      <b className="absolute top-[1016px] left-[30px] inline-block w-[115px] h-[25px]">
        MAP
      </b>
      
      <input
        value={comment}
        className=" absolute top-[1166px] left-[32px] w-[371px] h-[92px] border-2"
        placeholder="comment"
        onChange={(event) => setComment(event.target.value)}
      />
      <img
        className="absolute top-[1100px] left-[31px] rounded-[50%] w-[37px] h-[37px] object-cover"
        alt=""
        src="/ellipse-4@2x.png"
      />
      <b className="absolute top-[1108px] left-[77px] text-sm inline-block w-[142px] h-[27px]">
        Annette Black
      </b>
      <div className="absolute top-[861px] left-[45px] w-[350px] h-[150px] overflow-x-auto">

          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-darkgray box-border w-[100px] h-[141px] border-[1px] border-solid border-gray-400" />
          <div className="absolute top-[0px] left-[120px] rounded-8xs bg-darkgray box-border w-[100px] h-[141px] border-[1px] border-solid border-gray-400" />
          <div className="absolute top-[0px] left-[240px] rounded-8xs bg-darkgray box-border w-[100px] h-[141px] border-[1px] border-solid border-gray-400" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[58px] left-[37px] w-[26px] h-[26px]">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gray-500 w-[26px] h-[26px]" />
            <img
              className="absolute top-[6px] left-[6px] w-3.5 h-3.5 overflow-hidden object-cover"
              alt=""
              src="/bxscamera@2x.png"
            />
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[58px] left-[157px] w-[26px] h-[26px]">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gray-500 w-[26px] h-[26px]" />
            <img
              className="absolute top-[6px] left-[6px] w-3.5 h-3.5 overflow-hidden object-cover"
              alt=""
              src="/bxscamera@2x.png"
            />
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[58px] left-[277px] w-[26px] h-[26px]">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gray-500 w-[26px] h-[26px]" />
            <img
              className="absolute top-[6px] left-[6px] w-3.5 h-3.5 overflow-hidden object-cover"
              alt=""
              src="/bxscamera@2x.png"
            />
          </button>
          
        </div>
      </div>
    
  );
};

export default UploadRes;