import { Routes, Route } from "react-router-dom";
import Home from "./Componnets/Pages/Home/Home";
import Navbar from "./Componnets/Pages/Home/Navbar";
import { ToastContainer } from "react-toastify";
import Login from "./Componnets/Register/Login/Login";
import Signup from "./Componnets/Register/Signup/Signup";
import ForgotPassword from "./Componnets/Register/ForgotPassword/ForgotPassword";
import VerifyEmail from "./Componnets/Register/ForgotPassword/VerifyEmail";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
      </Routes>
      <ToastContainer />
      <ScrollToTop
        smooth
        color="#fff"
        height="18"
        style={{ backgroundColor: "#ff5b4d", paddingLeft: 5 }}
      />
    </div>
  );
}

export default App;
