import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { ProfileImage } from "../components/profileandsearch";
import { useUser } from "../hooks/useUser";
import { getUserInfo, updateUser } from "../models/users";

const EditProfileContext = createContext();

const Editprofile = () => {
  const [formData, setFormData] = useState({
    email: "",
    introduction: "",
    faceBookUrl: "",
  });
  const { user } = useUser();
  const { email, introduction, faceBookUrl } = formData;

  function handleUpdateFormData(e) {
    setFormData((_) => ({
      [e.target.name]: e.target.value,
    }));
  }

  async function handleUpdateUser() {
    try {
      await updateUser(user.id, {
        email,
        introduction,
        faceBookUrl,
      });
      alert("แก้ไขข้อมูลสำเร็จ");
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    if (!user) return;
    const fetchUser = async () => {
      const fetchedUser = await getUserInfo(user.id);
      console.log(fetchedUser);
      setFormData((_) => ({
        email: fetchedUser.email,
        introduction: fetchedUser.introduction,
        faceBookUrl: fetchedUser.faceBookUrl,
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
        handleUpdateFormData,
        handleUpdateUser
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
  const {handleUpdateUser} = useContext(EditProfileContext);
  return (
    <div className="flex flex-row items-center justify-between w-[90%] mx-auto font-semibold">
      <p className="flex items-center text-gray-200" onClick={Goeditpage}>
        <IoIosArrowBack />
        Profile
      </p>
      <p
        className="text-green-400" onClick={handleUpdateUser}>
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
  const { email, introduction, faceBookUrl, handleUpdateFormData } = useContext(EditProfileContext);
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
