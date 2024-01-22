import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import All from "./pages/All";
import ResPreupload from "./pages/ResPreUpload";
import UploadRes from "./pages/UploadRes";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import LoginPage from "./pages/LoginPage";
import LoginPage1 from "./pages/LoginPage1";
import LandingPageForReal from "./pages/LandingPageForReal";
import Profile from "./pages/Profile";
import SigninPage from "./pages/SigninPage";
import Review from "./pages/Review";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/res-preupload":
        title = "";
        metaDescription = "";
        break;
      case "/upload-res":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
      case "/register":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/login-page1":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page-for-real":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/signin-page":
        title = "";
        metaDescription = "";
        break;
      case "/review":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  // return main page

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/res-preupload" element={<ResPreupload />} />
      <Route path="/upload-res" element={<UploadRes />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/login-page1" element={<LoginPage1 />} />
      <Route path="/landing-page-for-real" element={<LandingPageForReal />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signin-page" element={<SigninPage />} />
      <Route path="/review" element={<Review />} />
      <Route path="/All" element={<All />} />
    </Routes>
  );
}
export default App;
