"use client";
import React, { useEffect, useState } from "react";
import data from "./data.json";
import { getAuth, signOut } from "firebase/auth";
import app from "../../config";
import Image from "next/image";
import img from "../_components/rocket.png";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";

const Topics = () => {
  const [l,m] = useState(true);

useEffect(()=>{
    if(window) m(false;
},[]);

if(l) return <>Loading</>;
  const auth = getAuth();
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, [auth, router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div>
      <header className="flex justify-between px-20 py-2 border-b-[gray] border-b-2">
        <span className="flex gap-1 items-center p-1 text-lg font-semibold justify-center">
          <span>Lo</span>
          <span className="bg-[#87CEEB] p-1 font-semibold rounded-md">Go</span>
        </span>
        <button
          onClick={handleLogout}
          className="font-semibold items-center text-blue-300 flex justify-center"
        >
          Sign Out
        </button>
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
