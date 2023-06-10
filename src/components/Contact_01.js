import React from "react";
import bg_02 from "../img/bg-01.png";

const Contact_01 = (props) => {
  return (
    <div className="flex flex-col items-start md:items-center p-10 w-full md:flex-row justify-between" style={{ backgroundImage: `url(${bg_02})`, backgroundSize: "cover"}} id={props.id}>
    <h2 className="text-red-500 text-5xl font-semibold mb-5 leading-[4rem] md:w-2/4">Dont worry for contact i`m available</h2>
    <button className="text-white bg-red-500 hover:bg-red-600 py-4 px-14 rounded-md md:w-1/4">Contact Me Now</button>
    </div>
  );
};

export default Contact_01;
