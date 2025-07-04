import React from "react";
import { assets } from "../assets/assets"; // Adjust the path as necessary
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const onClickLeftArrow = () => navigate(-1);

  const onClickRightArrow = () => navigate(1);

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={onClickLeftArrow}
            src={assets.arrow_left}
            alt="arrow Left"
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
          />
          <img
            onClick={onClickRightArrow}
            src={assets.arrow_right}
            alt="arrow Right"
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </button>
          <button className="bg-black py-1 px-4 rounded-2xl text-[15px] cursor-pointer">
            Install App
          </button>
          <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            D
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <button className="bg-white text-black px-4 py-1  cursor-pointer rounded-2xl">
          All
        </button>
        <button className="bg-black px-4 py-1 rounded-2xl cursor-pointer">
          Music
        </button>
        <button className="bg-black px-4 py-1 rounded-2xl cursor-pointer">
          Podcasts
        </button>
      </div>
    </>
  );
};

export default Navbar;
