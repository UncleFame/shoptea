import { useRef, useState } from "react";
import { getPublicUrl, uploadRestaurantImage } from "../utils/restaurant";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { insertNewRestaurant } from "../models/restaurant";



const UploadRes = () => {
  const navigate = useNavigate();
  const [rectangleInputValue, setRectangleInputValue] = useState("");
  const [rectangleInput1Value, setRectangleInput1Value] = useState("");
  const [rectangleInput2Value, setRectangleInput2Value] = useState("");
  const [rectangleInput3Value, setRectangleInput3Value] = useState("");
  const [rectangleInput4Value, setRectangleInput4Value] = useState("");
  const [rectangleInput5Value, setRectangleInput5Value] = useState("");
  const [comment, setComment] = useState("");
  const Pushtolandingpage = useCallback(() => {
    navigate("/res-preupload");
  }, [navigate]);
  const [rectangleInput6Value, setRectangleInput6Value] = useState("");

  const image = useRef(null);

  async function handleUploadImage(){
    try {
      const fileLength = image.current.files.length
      await uploadRestaurantImage(image.current.files[fileLength - 1], rectangleInputValue, 'main')

      const [open, close] = rectangleInput1Value.split('/') 

      const imageUrl = await getPublicUrl(`restaurants/${rectangleInputValue}/main.png`)

      const newRestaurant = {
        name : rectangleInputValue,
        open,
        close,
        price : Number(rectangleInput2Value),
        province : rectangleInput3Value,
        phoneNum :rectangleInput4Value,
        comment,
        imageUrl
      }

      await insertNewRestaurant(newRestaurant);

      alert("Already created the restaurant in the database")
    } catch (error) {
      alert(error.message)
    }
    
  }

  return (
    <div className="relative bg-white w-full h-[2494px] overflow-hidden text-left text-base text-gray-200 font-inter">
      <div className="absolute top-[174px] left-[105px] rounded-3xs bg-gainsboro w-[220px] h-[183px]" />
      <div>
  
      <label htmlFor="fileInput" className="relative">
  <img
    className="absolute top-[252px] left-[202px] w-[26px] h-[26px] object-cover"
    alt=""
    src="/uploadbutton.png"
  />
  <input
    id="fileInput"
    ref={image}
    className="absolute top-[252px] left-[202px] w-[26px] h-[26px] object-cover opacity-0 cursor-pointer"
    alt=""
    type="file"
  />
</label>

</div>

      <input
        className="[outline:none] bg-white absolute top-[428px] left-[29px] rounded-8xs box-border w-[375px] h-6 border-[1px] border-solid border-gray-400"
        type="text"
        value={rectangleInputValue}
        onChange={(event) => setRectangleInputValue(event.target.value)}
      />
      <input
        className="[outline:none] bg-white absolute top-[507px] left-[29px] rounded-8xs box-border w-[375px] h-6 border-[1px] border-solid border-gray-400"
        type="text"
        value={rectangleInput1Value}
        onChange={(event) => setRectangleInput1Value(event.target.value)}
      />
      <input
        className="[outline:none] bg-white absolute top-[586px] left-[29px] rounded-8xs box-border w-[375px] h-6 border-[1px] border-solid border-gray-400"
        type="text"
        value={rectangleInput2Value}
        onChange={(event) => setRectangleInput2Value(event.target.value)}
      />
      <input
        className="[outline:none] bg-white absolute top-[665px] left-[30px] rounded-8xs box-border w-[375px] h-6 border-[1px] border-solid border-gray-400"
        type="text"
        value={rectangleInput3Value}
        onChange={(event) => setRectangleInput3Value(event.target.value)}
      />
      <input
        className="[outline:none] bg-white absolute top-[744px] left-[30px] rounded-8xs box-border w-[375px] h-6 border-[1px] border-solid border-gray-400"
        type="text"
        value={rectangleInput4Value}
        onChange={(event) => setRectangleInput4Value(event.target.value)}
      />
      <input
        className="[outline:none] bg-white absolute top-[823px] left-[31px] rounded-8xs box-border w-[375px] h-6 border-[1px] border-solid border-gray-400"
        type="text"
        value={rectangleInput5Value}
        onChange={(event) => setRectangleInput5Value(event.target.value)}
      />
      <div className="absolute top-[1041px] left-[31px] rounded-8xs bg-darkgray box-border w-[375px] h-[200px] border-[1px] border-solid border-gray-400" />
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
        className="[outline:none] bg-snow absolute bottom-[1036px] left-[30px] rounded-8xs box-border w-[374px] h-[92px] border-[1px] border-solid border-gray-400"
        type="text"
        value={rectangleInput6Value}
        onChange={(event) => setRectangleInput6Value(event.target.value)}
      />
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
      <div className="absolute top-[861px] left-[45px] w-[340px] h-[141px] overflow-x-auto">
        <div className="absolute top-[0px] left-[0px] w-[700px] h-[141px]">
          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-darkgray box-border w-[100px] h-[141px] border-[1px] border-solid border-gray-400" />
          <div className="absolute top-[0px] left-[120px] rounded-8xs bg-darkgray box-border w-[100px] h-[141px] border-[1px] border-solid border-gray-400" />
          <div className="absolute top-[0px] left-[240px] rounded-8xs bg-darkgray box-border w-[100px] h-[141px] border-[1px] border-solid border-gray-400" />
          <div className="absolute top-[0px] left-[360px] rounded-8xs bg-darkgray box-border w-[100px] h-[141px] border-[1px] border-solid border-gray-400" />
          <div className="absolute top-[0px] left-[480px] rounded-8xs bg-darkgray box-border w-[100px] h-[141px] border-[1px] border-solid border-gray-400" />
          <div className="absolute top-[0px] left-[600px] rounded-8xs bg-darkgray box-border w-[100px] h-[141px] border-[1px] border-solid border-gray-400" />
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
          <img
            className="absolute top-[58px] left-[397px] w-[26px] h-[26px] object-cover"
            alt=""
            src="/group-10@2x.png"
          />
          <img
            className="absolute top-[58px] left-[517px] w-[26px] h-[26px] object-cover"
            alt=""
            src="/group-10@2x.png"
          />
          <img
            className="absolute top-[58px] left-[637px] w-[26px] h-[26px] object-cover"
            alt=""
            src="/group-10@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[430px] h-[116px]">
        <div className="absolute top-[0px] left-[0px] bg-white box-border w-[430px] h-[116px] border-[1px] border-solid border-gray-300" />
        <div className="absolute top-[90px] left-[calc(50%_-_50px)] font-extrabold inline-block w-[103px] h-[18px]">
          สร้างรีวิวใหม่
        </div>
        <button onClick={handleUploadImage} className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[90px] left-[calc(50%_+_162px)] text-base font-extrabold font-inter text-material-theme-sys-light-primary-fixed text-left inline-block w-[45px] h-[18px]">
          สร้าง
        </button>
        <button  onClick={Pushtolandingpage} className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[90px] left-[calc(50%_-_199px)] text-base font-extrabold font-inter text-material-theme-sys-dark-error-container text-left inline-block w-[45px] h-[18px]">
          ยกเลิก 
        </button>
      </div>
    </div>
  );
};

export default UploadRes;

