import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./Navbar";

type Props = {};

function MainPage({}: Props) {
  return (
    <div className="bg-black text-white h-screen">
      <div className="h-full w-full flex flex-col justify-between">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="p-5">
            {/*Footer*/}
            <Image
              src="/images/sb_rgb_logo.png"
              alt="logo"
              width={300}
              height={50}
            />
          </div>
          <div className="">
            {/*Footer*/}
            <Navbar />
          </div>
        </div>
        {/* Middle */}
        <div className="h-full bg-gradient-to-r from-gray-800 to-stone-900">
          <div className="flex flex-col md:flex-row  w-full h-full">
            <div className="flex flex-col bg-black py-10 w-1/3 justify-center">
              <div className="flex -mr-32 h-full items-center justify-center">
                <motion.img
                  src="https://www.freecodecamp.org/news/content/images/size/w2000/2021/05/web3-future-of-web.jpg"
                  initial={{ x: -200, opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  alt="image"
                  className="rounded-full mx-auto"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center h-full">
              <div className="flex flex-row justify-center items-center p-10 md:w-3/4 md:pl-28">
                <div className="flex flex-col text-white">
                  <h1 className=" font-bold text-2xl md:text-6xl xl:text-8xl 2xl:text-12xl">
                    We are SoftBase
                  </h1>
                  <h2 className="text-xl mt-3 md:text-4xl xl:text-6xl">
                    Web3 agency operating from Prague
                  </h2>
                  <h3 className="text-2xl mt-3 text-gray-600 md:text-4xl xl:text-5xl">
                    with strong business & technical skills
                  </h3>
                  <p className="text-md mt-8 md:text-xl xl:text-2xl">
                    We bring incredible things in Web3 space - Blockchain, Lens
                    protocol, NFT, smart contract. All topics we love and
                    successfully manage projects for our clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="h-28">{/*Footer*/}</div>
      </div>
    </div>
  );
}

export default MainPage;
