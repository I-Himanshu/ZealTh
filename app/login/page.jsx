"use client";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState, useEffect } from "react";
import app from "@/config";
import { useRouter } from "next/navigation";

const login = () => {
  const [l,m] = useState(true);

useEffect(()=>{
    if(window) m(false);
},[]);

if(l) return <>Loading</>;
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPass, setRegisterPass] = useState();
  const router = useRouter();

  const register = async () => {
    const auth = getAuth(app);
    try {
      // setRegisterEmail("");
      // setRegisterPass("");
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPass
      );
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen w-screen ">
      <div className="flex flex-col justify-center items-center gap-4 mx-auto my-auto w-[400px] h-[400px] border-[1px] border-gray-400 p-4 rounded-xl">
        <div className="flex flex-col md:mt-4 mt-3 w-72 mx-auto">
          <label className="font-semibold text-base md:mb-2 mb-[0.1rem] ">
            Email
          </label>

          <input
            type="text"
            className="md:h-4 h-8 max-w-[80%] md:min-w-72 w-[20rem] bg-transparent md:p-4 p-2 rounded-lg border-[1px] border-[#dedede]"
            onChange={(e) => {
              setRegisterEmail(e.target.value);
            }}
            placeholder="Email"
          />
        </div>

        <div className="flex flex-col md:mt-4 mt-3 w-72 mx-auto">
          <label className="font-semibold text-base md:mb-2 mb-[0.1rem] ">
            Password
          </label>

          <input
            type="password"
            className="md:h-4 h-8 max-w-[80%] md:min-w-72 w-[20rem] bg-transparent md:p-4 p-2 rounded-lg border-[1px] border-[#dedede]"
            onChange={(e) => {
              setRegisterPass(e.target.value);
            }}
            placeholder="At least 6 letters"
          />
        </div>
        <button
          className="flex gap-2 justify-center items-center rounded-lg border border-[gray] px-5 py-2 text-sm font-semibold text-white transition md:w-22 w-32 mt-4 mx-auto"
          onClick={register}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default login;
