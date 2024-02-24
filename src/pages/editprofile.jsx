import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ProfileImage } from "../components/profileandsearch";
import { useUser } from "../hooks/useUser";
import { getUserInfo, updateUser } from "../models/users";
import {FaCamera} from "react-icons/fa"
import { getProfilePublicUrl, uploadUserProfileImage } from "../models/storage.ts";

const EditProfileContext = createContext();

const Editprofile = () => {
  const [formData, setFormData] = useState({
    email: "",
    introduction: "",
    faceBookUrl: "",
    profileImgUrl : ""
  });
  const { user } = useUser();
  const { email, introduction, faceBookUrl, profileImgUrl } = formData;
  const imageInput = useRef(null);

  function handleUpdateFormData(e) {
    setFormData((_) => ({
      [e.target.name]: e.target.value,
    }));
  }

  async function handleUpdateUser() {
    try {
      // update user info
      await updateUser(user.id, {
        email,
        introduction,
        faceBookUrl,
      });

      // update user profile image
      const files = imageInput.current.files;
      if (files.length <= 0) return alert("แก้ไขข้อมูลสำเร็จ");
      // file to upload
      const file = files[files.length - 1];
      // upload to storage
      await uploadUserProfileImage(file, user.id)
      alert("แก้ไขข้อมูลสำเร็จ");
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    if (!user) return;
    const fetchUser = async () => {
      const fetchedUser = await getUserInfo(user.id);
      const fetchedProfileImage = getProfilePublicUrl(user.id);
      setFormData((_) => ({
        email: fetchedUser.email,
        introduction: fetchedUser.introduction,
        faceBookUrl: fetchedUser.faceBookUrl,
        profileImgUrl : fetchedProfileImage
      }));
    };

    fetchUser();
  }, [user]);
  const Navigte = useNavigate();
  const Goeditpage = useCallback(() => {
    Navigte("/Profile");
  }, [Navigte]);

  return (
    <EditProfileContext.Provider
      value={{
        email,
        introduction,
        faceBookUrl,
        imageInput,
        profileImgUrl,
        setFormData,
        handleUpdateFormData,
        handleUpdateUser,
      }}
    >
      <div className="relative bg-white w-full h-ful overflow-hidden text-left  font-sans">
        <NavBar Goeditpage={Goeditpage} />
        <Content />
      </div>
    </EditProfileContext.Provider>
  );
};

function NavBar({ Goeditpage }) {
  const { handleUpdateUser, imageInput } = useContext(EditProfileContext);

  return (
    <div className="flex flex-row items-center justify-between w-[90%] mx-auto font-semibold">
      <p className="flex items-center text-gray-200" onClick={Goeditpage}>
        <IoIosArrowBack />
        Profile
      </p>
      <p className="text-green-400" onClick={handleUpdateUser}>
        {" "}
        บันทึก
      </p>
    </div>
  );
}

function Content({}) {
  return (
    <div className="flex items-center flex-col text-center item-center w-full justify-center ">
      <UploadProfile />
      <Form />
    </div>
  );
}

function Form({}) {
  const { email, introduction, faceBookUrl, handleUpdateFormData } =
    useContext(EditProfileContext);
  return (
    <form class="container py-10 w-11/12 flex flex-col gap-y-2 px-4">
      <Input
        onChange={handleUpdateFormData}
        name="email"
        value={email}
        label="ชื่อ"
        placeholder="ชื่อ"
      />
      <TextArea
        onChange={handleUpdateFormData}
        name="introduction"
        value={introduction}
        label="แนะนำตัว"
      />
      <Input
        onChange={handleUpdateFormData}
        name="faceBookUrl"
        value={faceBookUrl}
        label="URL Facebook"
        placeholder="Url facebook"
      />
    </form>
  );
}

export default Editprofile;

function Input({ label, placeholder, value, name, onChange }) {
  return (
    <>
      <div>
        <p className="w-full text-start p-0 m-0">{label}</p>
      </div>
      <input
        onChange={onChange}
        value={value}
        name={name}
        type="text"
        placeholder={placeholder}
        className="rounded-lg border-gray-300 border-solid border-2 h-4 p-2"
      />
    </>
  );
}

function TextArea({ label, value, name, onChange }) {
  return (
    <>
      <p className="w-full text-start p-0 m-0">{label}</p>
      <textarea
        onChange={onChange}
        name={name}
        value={value}
        type="text"
        placeholder=""
        className="h-[90px] border-gray-300 rounded-lg border-solid border-2 p-2"
        cfvder4333333
      ></textarea>
    </>
  );
}

function UploadProfile({}) {
  const {imageInput, setFormData, profileImgUrl} = useContext(EditProfileContext);

  function handleUpload(){
    // trigger image input
    imageInput.current.click();
  }

  function handleInputChange(){
    // create file reader
    const reader = new FileReader();
    // target file
    const file = imageInput.current.files[imageInput.current.files.length - 1];
    // configure reader to read file as data url
    reader.readAsDataURL(file);
    // onload
    reader.onload = () => {
      // result
      let result = reader.result;
      // assign the result to profileImgUrl
      setFormData(prev => ({
        ...prev,
        profileImgUrl : result
      }))
    }
  }
  return (
    <div className="relative w-[80px] h-[80px]">
      <UploadIcon onClick={handleUpload}/>
      <input onChange={handleInputChange} ref={imageInput} className="hidden top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" type="file" accept="png" />
      <ProfileImage imgSrc={profileImgUrl} size="full" />
    </div>
  );
}

function UploadIcon({onClick}) {
  return (
    <div onClick={onClick} className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] cursor-pointer">
      <FaCamera className="text-white bg-black opacity-60 p-1 rounded-full"/>
    </div>
  )
}