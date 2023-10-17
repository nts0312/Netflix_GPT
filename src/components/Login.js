import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-max h-max"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="bg-black absolute px-16 py-14 my-28 mx-auto left-0 right-0 w-[31%] rounded-md bg-opacity-[87%] h-[75%]">
        <h1 className="text-white text-3xl font-medium my-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email"
          className="w-full p-4 my-3.5 bg-[#333333] rounded-[6px] bg-opacity-100"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-[6px] p-4 bg-[#333333] "
        />
        <button className="bg-[#E50815]  w-full p-4 my-10 text-white rounded-[6px]">
          Sign In
        </button>
        <div className="flex space-x-2">
          <p className="text-[#989298]">New to Netflix?</p>
          <button className="text-white"> Sign up now.</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
