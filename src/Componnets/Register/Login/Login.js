import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SignInImg from "../../Image/Signin.png";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const inputData = {
      email: data.email,
      password: data.password,
    };

    fetch("https://tour-hub-server.vercel.app/signin", {
      method: "POST",
      body: JSON.stringify(inputData),
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
          localStorage.setItem("Key", JSON.stringify(data));
          toast.success("Welcome, Tour Hub!");
          navigate("/");
        }
      });
  };

  return (
    <div className=" mt-10">
      <div className=" flex items-center justify-evenly px-5 lg:px-0 flex-col lg:flex-row max-w-6xl mx-auto">
        <div className="banner_area">
          <div class="card">
            <div class="card-body">
              <img
                className="w-[400px] hidden lg:block"
                src={SignInImg}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="input_area max-w-lg">
          <div class="card  bg-base-100 shadow-2xl">
            <div class="card-body">
              <h2 class=" text-xl font-bold text-accent">Sign In</h2>
              <p>Welcome, Back! Pleases Login With Your Personal Details.</p>
              <div>
                <form
                  className="grid grid-cols-1 gap-3"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    className="input input-bordered"
                    placeholder="Enter Your Email"
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern: /\S+@\S+\.\S+/,
                    })}
                  />
                  {errors.name?.type === "required" && (
                    <span className="text-error">Email is required</span>
                  )}
                  <input
                    placeholder="Password"
                    className="input input-bordered"
                    type="password"
                    {...register("password", {
                      required: (
                        <span className=" text-error">
                          Password Input is Blank
                        </span>
                      ),
                    })}
                  />
                  {errors.password && (
                    <span role="alert">{errors.password.message}</span>
                  )}
                  <p className=" text-center ">
                    You Have Not An Account, Please?{" "}
                    <Link
                      className="text-error text-[16px] font-semibold"
                      to="/signup"
                    >
                      Sign Up
                    </Link>{" "}
                  </p>
                  <Link
                    to="/forgot-password"
                    className=" text-md  font-semibold text-error cursor-pointer text-center"
                  >
                    Forgot <span>Password?</span>{" "}
                  </Link>
                  <input
                    className="btn btn-ghost bg-primary hover:btn-outline text-white"
                    type="submit"
                    value="Sign In"
                  />
                </form>
                <div className="divider">OR</div>
                <div className=" grid grid-cols-2 gap-x-6">
                  <button className="btn btn-outline btn-primary">
                    Google
                  </button>
                  <button className="btn btn-primary btn-outline text-white">
                    Github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
