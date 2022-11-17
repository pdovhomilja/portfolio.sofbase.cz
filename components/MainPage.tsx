import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function MainPage({}: Props) {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-row h-full w-full">
        <div className="w-1/3 bg-black text-white text-3xl pt-5">
          <h1 className="pl-20"> Softbase s.r.o.</h1>
          <div className="flex flex-row h-full items-center">
            <div className="absolute flex h-[60%] w-[90%]">
              <div className="w-1/2 my-auto">
                <motion.img
                  src="https://www.freecodecamp.org/news/content/images/size/w2000/2021/05/web3-future-of-web.jpg"
                  initial={{ x: -200, opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  alt="image"
                  className="object-fill rounded-full "
                />
              </div>
              <div className="flex w-1/2 items-center">
                <div className="flex flex-col -ml-28 pl-5 justify-center w-full h-2/3">
                  <h1 className="text-6xl">We are SoftBase</h1>
                  <h2 className="text-5xl">best Web3 agency in the world</h2>
                  <h3 className="text-5xl text-gray-600">
                    operating from Prague
                  </h3>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-2/3 bg-gradient-to-r from-gray-800 to-stone-900">
          <div className="flex flex-row w-full h-24 justify-end">
            <p className="text-gray-300 pt-10 px-5">Menu1</p>
            <p className="text-gray-300 pt-10 px-5">Menu 2</p>
            <p className="text-gray-300 pt-10 px-5">Menu 3</p>
            <p className="text-gray-300 pt-10 px-5 hover:bg-blue-700">Menu 4</p>
            <p className="text-gray-300 pt-10 pl-5 pr-24 hover:bg-blue-700">
              Menu 5
            </p>
          </div>
          <div></div>
        </div>
      </div>
      <div className="bg-black h-28"></div>
    </div>
  );
}

export default MainPage;
