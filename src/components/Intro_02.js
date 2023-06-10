import React from "react";
import { RxDoubleArrowRight } from "react-icons/rx";

const Intro_02 = (props) => {
  return (
    <div className="flex justify-evenly flex-wrap p-10 gap-6 mt-12" id={props.id}>
      <div className="md:w-[45%]">
        <h2 className="text-4xl font-semibold pb-8">
          Designing With Passion While Exploring The World.
        </h2>
        <p className="text-blue-900 pb-7">
          Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore
          et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo
          viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
        </p>
        <p className="text-blue-900">
          Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut labore
          et dolore magna aliqua.
        </p>
      </div>

      <div className="md:w-[45%]">
        <h2 className="text-4xl font-semibold pb-8">
          Any Type Of Query & Discussion.
        </h2>
        <p className="text-2xl font-semibold text-gray-700 pb-4">
          Lete talk with me
        </p>
        <div className="flex justify-between items-center">
          <a href="#" className="text-3xl underline font-semibold">
            hire@portfolio.com
          </a>
          <RxDoubleArrowRight className="inline text-3xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Intro_02;
