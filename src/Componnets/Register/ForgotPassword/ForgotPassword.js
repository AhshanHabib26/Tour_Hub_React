import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FPImgae from "../../Image/ForgotPassword.png";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const email = e.target.email.value;

    e.preventDefault();

    fetch("https://tour-hub-server.herokuapp.com/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.info("Verification is Send on Your Email!");
          navigate("/verify-email");
        }
      });
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
              <h2 class=" text-xl font-bold text-accent">Forgot Password</h2>
              <p>
                Please Enter Your Email Address To Recieve To Verification
                Email.
              </p>
              <div>
                <form
                  className="grid grid-cols-1 gap-3"
                  onSubmit={handleSubmit}
                >
                  <input
                    className="input input-bordered"
                    placeholder="Enter Your Email"
                    type="email"
                    name="email"
                  />

                  <input
                    className="btn btn-ghost bg-primary hover:btn-outline text-white"
                    type="submit"
                    value="Send Verification Code"
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

export default ForgotPassword;
