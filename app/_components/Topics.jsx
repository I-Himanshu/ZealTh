import Link from "next/link";
import React from "react";
import data from "./data.json";
import Image from "next/image";
import img from "../_components/rocket.png";

const Topics = () => {
  return (
    <div>
      <header className="flex justify-between px-20 py-2 border-b-[gray] border-b-2">
        <span className="flex gap-1 items-center p-1 text-lg font-semibold justify-center">
          <span>Lo</span>
          <span className="bg-[#87CEEB] p-1 font-semibold rounded-md">Go</span>
        </span>
        <Link
          href="/"
          className="font-semibold items-center text-blue-300 flex justify-center"
        >
          Sign Out
        </Link>
      </header>

      <div className="p-6">
        <h2 className="text-2xl font-bold ml-10">Popular Topics 🔥</h2>
        <div className="md:p-10 p-4 flex overflow-x-auto no-scrollbar gap-8">
          {data.map((data) => {
            return (
              <div className="flex flex-col md:w-[33%] w-[150px] border-[1px] border-gray-400 p-3 gap-4 rounded-2xl">
                <div className="flex md:flex-row flex-col gap-5 min-h-40">
                  <div className="md:w-80 w-20 md:h-40 h-20 flex justify-center items-center p-2 mx-auto">
                    <Image src={img} alt="imahe" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold text-xl">
                      {data.heading}
                    </span>
                    <span className="text-gray-400">{data.desc}</span>
                  </div>
                </div>
                <button className="hidden md:flex gap-2 justify-center items-center rounded-lg border-[1px] border-[gray] px-7 py-4 text-sm font-semibold text-white">
                  READ
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Topics;
