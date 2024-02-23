import React, { useCallback, useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { ProfileImage } from "../components/profileandsearch";
import { useUser } from "../hooks/useUser";
import { useFetchUser } from "../hooks/useFetchUser";
import { getUserInfo } from "../models/users";

const Editprofile = () => {
  const Navigte = useNavigate();
  const Goeditpage = useCallback(() => {
    Navigte("/Profile");
  }, [Navigte]);

  return (
    <div className="relative bg-white w-full h-ful overflow-hidden text-left  font-sans">
      <NavBar Goeditpage={Goeditpage} />
      <Content />
    </div>
  );
};

function NavBar({ Goeditpage }) {
  return (
    <div className="flex flex-row items-center justify-between w-[90%] mx-auto font-semibold">
      <p className="flex items-center text-gray-200" onClick={Goeditpage}>
        <IoIosArrowBack />
        Profile
      </p>
      <p className="text-green-400" onClick={Goeditpage}>
        {" "}
        บันทึก
      </p>
    </div>
  );
}

function Content({}) {
  return (
    <div className="flex items-center flex-col text-center item-center w-full justify-center ">
      <ProfileImage size={80} />
      <Form />
    </div>
  );
}

function Form({}) {
  const [formData, setFormData] = useState({
    email: "",
    introduction: "",
    faceBookUrl: "",
  });
  const { user } = useUser();
  const { email, introduction, faceBookUrl } = formData;

  useEffect(() => {
    if (!user) return;
    const fetchUser = async () => {
      const fetchedUser = await getUserInfo(user.id);
      console.log(fetchedUser)
      setFormData((_) => ({
        email: fetchedUser.email,
        introduction: fetchedUser.introduction,
        faceBookUrl : fetchedUser.faceBookUrl
      }));
    };

    fetchUser();
  }, [user]);

  return (
    <form class="container py-10 w-11/12 flex flex-col gap-y-2 px-4">
      <Input value={email} label="ชื่อ" placeholder="ชื่อ" />
      <TextArea value={introduction} label="แนะนำตัว" />
      <Input
        value={faceBookUrl}
        label="URL Facebook"
        placeholder="Url facebook"
      />
    </form>
  );
}

export default Editprofile;

function Input({ label, placeholder, value }) {
  return (
    <>
      <div>
        <p className="w-full text-start p-0 m-0">{label}</p>
      </div>
      <input
        value={value}
        type="text"
        placeholder={placeholder}
        className="rounded-lg border-gray-300 border-solid border-2 h-4 p-2"
      />
    </>
  );
}

function TextArea({ label, value }) {
  return (
    <>
      <p className="w-full text-start p-0 m-0">{label}</p>
      <textarea
        value={value}
        type="text"
        placeholder=""
        className="h-[90px] border-gray-300 rounded-lg border-solid border-2 p-2"
        cfvder4333333
      ></textarea>
    </>
  );
}
