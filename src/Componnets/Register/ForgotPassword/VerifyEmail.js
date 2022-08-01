import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FPImgae from "../../Image/ForgotPassword.png";

const VerifyEmail = () => {
  const navigate = useNavigate();

  // const handleSubmit = async (data) => {
  //   const inputData = {
  //     email: data.email,
  //     password: data.password,
  //   };

  //   fetch("", {
  //     method: "POST",
  //     body: JSON.stringify(inputData),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.error) {
  //         toast.error(data.error);
  //       } else {
  //         toast.success("Welcome, Tour Hub!");
  //         navigate("/");
  //       }
  //     });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const code = e.target.code.value;
    const password = e.target.password.value;

    if (!code || !password) {
      toast.error("Input Box is Empty");
    } else {
      navigate("/");
      toast.error("This API is Under Construction");
    }
  };

  return (
    <div className=" mt-10">
      <div className=" flex items-center justify-evenly px-5 lg:px-0 flex-col lg:flex-row max-w-6xl mx-auto">
        <div className="banner_area">
          <div class="card">
            <div class="card-body">
              <img className="w-[400px] hidden lg:block" src={FPImgae} alt="" />
            </div>
          </div>
        </div>
        <div className="input_area max-w-lg">
          <div class="card  bg-base-100 shadow-2xl">
            <div class="card-body">
              <h2 class=" text-xl font-bold text-accent">Verify Email</h2>
              <p>Please Enter The 5 Digit Code Sent To Your Email.</p>
              <div>
                <form
                  className="grid grid-cols-1 gap-3"
                  onSubmit={handleSubmit}
                >
                  <input
                    className="input input-bordered"
                    placeholder="Enter Your Verification Code"
                    type="text"
                    name="code"
                  />
                  <input
                    placeholder="Enter New Password"
                    className="input input-bordered"
                    type="password"
                    name="password"
                  />

                  <input
                    className="btn btn-ghost bg-primary hover:btn-outline text-white"
                    type="submit"
                    value="Reset Password"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
