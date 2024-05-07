"use client";
import Image from "next/image";
// import Signup from "./_components/Signup";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getAuth } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "@/config";
import Topics from "./dashboard/page";

export default function Home() {
  const [l,m] = useState(true);

useEffect(()=>{
    if(window) m(false;
},[]);

if(l) return <>Loading</>;
  const [user, setUser] = useState(null);
  const router = useRouter();

  
  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const signInWithGoogle = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <main>
      {user ? (
        <Topics />
      ) : (
        <section className="bg-black">
          <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <section className="relative flex h-72 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
              <img
                alt=""
                src="/image.jpg"
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />

              <div className="justify-center relative -mt-20 flex flex-col items-center mx-auto lg:hidden">
                <span className="flex gap-1 items-center p-1 text-lg font-semibold justify-center">
                  <span>Lo</span>
                  <span className="bg-[#87CEEB] p-1 font-semibold rounded-md">
                    Go
                  </span>
                </span>

                <h2 className="mt-2 mb-2 text-sm font-normal text-white">
                  Journey to a trillion miles starts from here!!
                </h2>
              </div>
            </section>

            <main className="flex items-center justify-center  lg:col-span-7 lg:px-16 lg:py-8 xl:col-span-6 rounded-lg">
              <div className=" flex flex-col md:w-[80%] w-[100%] ">
                <div className=" justify-center hidden lg:relative lg:block  px-12 py-8">
                  <span className="flex gap-1 items-center p-1 text-lg font-semibold justify-center">
                    <span>Lo</span>
                    <span className="bg-[#87CEEB] px-2 py-1 font-semibold rounded-md">
                      Go
                    </span>
                  </span>
                  <h2 className="flex mt-2 text-lg font-normal  justify-center">
                    Journey to a trillion miles starts from here!!
                  </h2>
                </div>

                <div className="flex flex-col justify-center md:mx-auto md:border-[gray] gap-16 md:border-[1px] rounded-xl px-5 py-8  md:w-[80%]">
                  <div className="flex flex-col">
                    <h2 className="font-semibold text-xl flex justify-center">
                      Sign Up
                    </h2>
                    <h4 className="font-light text-sm flex justify-center mt-2">
                      Choose a signup method
                    </h4>
                  </div>

                  <div className="flex flex-col gap-4 justify-center items-center">
                    <button
                      onClick={signInWithGoogle}
                      className="flex gap-2 justify-center items-center rounded-lg border border-[gray] px-7 py-4 text-sm font-semibold text-white transition  hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500 md:w-72 w-60"
                    >
                      <Image src="/google.png" width={30} height={30} />
                      Sign up with Google
                    </button>
                    <Link
                      href="/login"
                      className="flex gap-2 justify-center items-center rounded-lg border border-[gray] px-7 py-4 text-sm font-semibold text-white transition  hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500 md:w-72 w-60"
                    >
                      <Image src="/mail.png" width={30} height={30} />
                      Sign up with Email
                    </Link>
                  </div>

                  <div className="flex gap-2 justify-center items-center">
                    <h2 className="">Already a user ?</h2>
                    <Link href="/" className="text-blue-300">
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </section>
      )}
    </main>
  );
}
