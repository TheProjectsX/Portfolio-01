import React from "react";
import pen from "../icons/pen.png";
import marketing from "../icons/marketing.png";
import portfolio from "../icons/portfolio.png";

const Services = (props) => {
  return (
    <div className="" id={props.id}>
      <h2 className="text-3xl font-bold p-10 md:text-5xl md:w-[45%]">What Services you will Get from me!</h2>
      <div className="flex justify-evenly p-10 flex-wrap gap-12">
        <div className="item sm:w-[45%] md:w-[30%] flex flex-col items-center text-center space-y-4 border border-gray-400 py-12 px-5 rounded-md hover:bg-[#ff3d1c] hover:text-white">
          <img
            src={pen}
            alt=""
            className="w-24 rounded-full bg-opacity-20 bg-red-300 p-6 mb-6"
          />
          <h2 className="text-2xl mb-4 font-semibold">UI/UX Design</h2>
          <p>
            Free resource that will help nderstand thecv designc process and
            improve theroi nderstand the design process andisei impro are of
            vquality.
          </p>
        </div>
        <div className="item sm:w-[45%] md:w-[30%] flex flex-col items-center text-center space-y-4 border border-gray-400 py-12 px-5 rounded-md hover:bg-[#ff3d1c] hover:text-white">
          <img
            src={marketing}
            alt=""
            className="w-24 rounded-full bg-opacity-20 bg-red-300 p-6 mb-6"
          />
          <h2 className="text-2xl mb-4 font-semibold">Digital Marketing</h2>
          <p>
            Free resource that will help nderstand thecv designc process and
            improve theroi nderstand the design process andisei impro are of
            vquality.
          </p>
        </div>
        <div className="item sm:w-[45%] md:w-[30%] flex flex-col items-center text-center space-y-4 border border-gray-400 py-12 px-5 rounded-md hover:bg-[#ff3d1c] hover:text-white">
          <img
            src={portfolio}
            alt=""
            className="w-24 rounded-full bg-opacity-20 bg-red-300 p-6 mb-6"
          />
          <h2 className="text-2xl mb-4 font-semibold">Website Design</h2>
          <p>
            Free resource that will help nderstand thecv designc process and
            improve theroi nderstand the design process andisei impro are of
            vquality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
