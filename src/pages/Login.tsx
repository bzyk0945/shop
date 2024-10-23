import React, { useState } from "react";

const Login = () => {
  const [signUp, setsignUp] = useState(false);

  const handleClickBtn = () => {
    setsignUp(!signUp);
  };
  const handleOnSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Site login not working")
  };
  return (
    <section className="flex w-full flex-col items-center justify-center">
      {signUp ? (
        <>
          <div className="mb-3 flex items-center justify-center gap-2">
            <h4 className="mt-10 text-gray-500">
              <span className="text-3xl font-medium text-gray-700">
                Sign Up
              </span>
            </h4>
            <hr className="mt-10 h-[1px] w-8 bg-gray-700 sm:h-[2px] sm:w-12" />
          </div>
          <form action="" className="mt-4 flex flex-col items-center gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-800 px-3 py-2"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-800 px-3 py-2"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-800 px-3 py-2"
              required
            />
            <div className="mt-[-8px] flex w-full justify-between gap-10 text-sm">
              <p className="cursor-pointer">Forgot your password?</p>
              <p className="cursor-pointer" onClick={handleClickBtn}>
                Login Here
              </p>
            </div>
            <button className="mt-4 bg-black px-8 py-2 font-light text-white">
              Sign Up
            </button>
          </form>
        </>
      ) : (
        <>
          <div className="mb-3 flex items-center justify-center gap-2">
            <h4 className="mt-10 text-gray-500">
              <span className="text-3xl font-medium text-gray-700">Login</span>
            </h4>
            <hr className="mt-10 h-[1px] w-8 bg-gray-700 sm:h-[2px] sm:w-12" />
          </div>
          <form
            onSubmit={handleOnSubmit}
            className="mt-4 flex flex-col items-center gap-4"
          >
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-800 px-3 py-2"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-800 px-3 py-2"
              required
            />
            <div className="mt-[-8px] flex w-full justify-between gap-10 text-sm">
              <p className="cursor-pointer">Forgot your password?</p>
              <p className="cursor-pointer" onClick={handleClickBtn}>
                Create account
              </p>
            </div>
            <button className="mt-4 bg-black px-8 py-2 font-light text-white">
              Sign In
            </button>
          </form>
        </>
      )}
    </section>
  );
};

export default Login;
