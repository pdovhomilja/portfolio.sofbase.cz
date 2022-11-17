import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function MainPage({}: Props) {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="flex flex-row h-full w-full">
        <div className="w-1/3 bg-black text-white text-3xl pt-5">
          <h1 className="pl-5 text-sm md:pl-10 md:text-2xl xl:pl-20 xl:text-4xl">
            {" "}
            Softbase s.r.o.
          </h1>
          <div className="flex flex-row h-full items-center">
            <div className="absolute flex h-[60%] w-full">
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
                <div className="flex flex-col -ml-8 md:-ml-28 pl-5 justify-center w-full  h-2/3">
                  <h1 className="text-2xl md:text-6xl md:pl-6 xl:text-8xl xl:pl-0">
                    We are SoftBase
                  </h1>
                  <h2 className="text-md pl-3 mt-3 md:text-4xl md:pl-8 xl:text-6xl xl:pl-3">
                    best Web3 agency in the world
                  </h2>
                  <h3 className="text-sm mt-3 text-gray-600 md:text-4xl md:pl-6 xl:text-5xl xl:pl-0">
                    operating from Prague
                  </h3>
                  <p className="text-sm mt-8  md:pl-5 md:text-xl xl:text-2xl">
                    Naším posláním je tvořit lepší svět díky novým technologiím.
                    Věříme, že Web 3 propojí všechny napřímo a vše bude rychlé a
                    přímočaré.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3 bg-gradient-to-r from-gray-800 to-stone-900">
          <div className="md:flex md:flex-row w-full h-24 justify-end">
            <Link
              className="text-gray-300 pt-10 px-5 bg-black hover:bg-blue-700"
              href="/"
            >
              <p>Home</p>
            </Link>
            <Link
              href="#AboutUs"
              className="text-gray-300 pt-10 px-5 hover:bg-blue-700"
            >
              <p>O nás</p>
            </Link>
            <Link
              href="#Projects"
              className="text-gray-300 pt-10 px-5 hover:bg-blue-700"
            >
              <p>Projekty</p>
            </Link>
            <Link
              href="#Skills"
              className="text-gray-300 pt-10 px-5 hover:bg-blue-700"
            >
              <p>Skill</p>
            </Link>
            <Link
              href="#Contact"
              className="text-gray-300 pt-10 px-5 hover:bg-blue-700"
            >
              <p>Kontakt</p>
            </Link>
          </div>
          <div></div>
        </div>
      </div>
      <div className="bg-black h-28"></div>
    </div>
  );
}

export default MainPage;
