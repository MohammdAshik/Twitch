import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { BiNetworkChart } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { login, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    login(data.email, data.password)
      .then((result) => {
        console.log(result);
        if (!loading) {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="h-[100vh] flex item-center justify-center">
      <div className="w-[80%] my-7 rounded-lg p-4 shadow-sm bg-white">
        <div className="flex justify-between">
          <div className="flex items-center">
            <p className="mr-2  bg-primary/10 p-2 rounded-lg   normal-case">
              <BiNetworkChart className="text-2xl text-primary" />
            </p>
            <p className="primary-font text-xl font-semibold">Twitch</p>
          </div>
          <p className="hidden md:flex">
            New in Twitch?{" "}
            <Link className="text-primary" to={"/register"}>
              Register
            </Link>
          </p>
        </div>
        <div className="h-full w-[98%] mx-auto flex justify-around items-center">
          <img
            className="w-[450px] mx-auto hidden md:flex"
            src="https://i.ibb.co/mDP66TY/Data-security-05.jpg"
            alt="Data-security-05"
          />
          {/* register  */}
          <div className="md:w-[35%] mx-auto">
            <h1 className="text-xl primary-font font-semibold">
              Wellcome Back
            </h1>
            {/* register from  */}
            <form onSubmit={handleSubmit(onSubmit)} className="my-2">
              {/* email */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold primary-font">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email"
                  className="input input-bordered w-full border-0 bg-primary/10 h-10"
                  required
                />
              </div>
              {/* passwrod */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold primary-font">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  {...register("password", { minLength: 6 })}
                  placeholder="Password"
                  className="input input-bordered w-full border-0 bg-primary/10 h-10"
                  required
                />
                {errors.password && (
                  <p className="text-red-500">
                    Password must be 6 character long!
                  </p>
                )}
              </div>
              <div className="text-center">
                <input
                  className="btn btn-primary text-white btn-sm mt-5"
                  type="submit"
                  value="login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
