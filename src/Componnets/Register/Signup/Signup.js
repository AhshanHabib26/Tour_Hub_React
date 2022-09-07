import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SignUpImg from "../../Image/Signup.png";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    const inputData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    fetch("https://tour-hub-server.vercel.app/signup", {
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
          toast.success("You Can Login Your New Email and Password");
          navigate('/login')
        }
      });
  };

  return (
    <div className=" mt-10">
      <div className=" flex items-center justify-evenly px-5 lg:px-0 flex-col lg:flex-row max-w-6xl mx-auto">
        <div className="banner_area ">
          <img className="w-[420px]  hidden lg:block" src={SignUpImg} alt="" />
        </div>
        <div className="input_area">
          <div class="card w-full bg-base-100 shadow-2xl">
            <div class="card-body">
              <h2 class=" text-xl font-bold text-accent">Sign Up</h2>
              <p>Enter Your Personal Information And Start Journey With Us.</p>
              <div>
                <form
                  className="grid grid-cols-1 gap-3"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    className="input input-bordered"
                    placeholder="Enter Your Name"
                    type="text"
                    {...register("name", {
                      required: true,
                    })}
                  />
                  {errors.name?.type === "required" && (
                    <span className="text-error">Name is required</span>
                  )}

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
                  <p>
                    Already Have An Account?{" "}
                    <Link
                      className="text-error text-lg font-semibold"
                      to="/login"
                    >
                      Login
                    </Link>{" "}
                  </p>
                  <input
                    className="btn btn-ghost bg-primary hover:btn-outline text-white"
                    type="submit"
                    value="Signup"
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

export default Signup;
