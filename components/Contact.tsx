import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Contact({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen justify-evenly overflow-hidden"
    >
      <div className="h-2/3 bg-black border">
        <p className="h-40"></p>
        <div className="m-10 pt-10 border h-full">
          <div className="w-full flex flex-row">
            <div className="w-1/2 pl-10">
              <h1 className=" text-white text-2xl md:text-4xl xl:text-6xl">
                Lets talk
              </h1>
              <h2 className="text-gray-600 mt-5 text-xl md:text-3xl xl:text-4xl ">
                Now that you know a lot about me, let me know if you are
                interested to work with me.
              </h2>
            </div>
            <div className="w-1/2">
              <form action="" className="p-5">
                <p className="font-bold text-white pb-2">Name</p>
                <input
                  type="text"
                  className="rounded-md w-full pr-6 bg-gray-500"
                />
                <p className="font-bold text-white pb-2">E-mail</p>
                <input
                  type="text"
                  className="rounded-md w-full pr-6 bg-gray-500"
                />
                <p className="font-bold text-white pb-2">Message</p>
                <textarea className="rounded-md w-full pr-6 bg-gray-500" />
                <button className="bg-gray-600 p-3 mt-3 font-bold text-white">
                  Click to enter web3 world
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/3 bg-gray-700 justify-center">
        Section 2
        <div className="m-10 flex flex-row text-white">
          <div className="flex flex-col w-1/2 border">
            <h1>Logo</h1>
            <div>
              <h1>Socials</h1>
              <p>icons</p>
            </div>
            <div>
              <p>CopyRight</p>
            </div>
          </div>
          <div className="w-1/2 border"></div>
        </div>
      </div>
      <div className="h-28 bg-black">
        <Link href="#Home" className="">
          <p className="text-white">Home</p>
        </Link>
      </div>
    </motion.div>
  );
}

export default Contact;
