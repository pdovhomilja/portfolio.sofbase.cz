import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

type Props = {};

function AboutUs({}: Props) {
  return (
    <div className=" bg-black text-white h-full w-full">
      <div className="p-10">
        <div className="flex flex-col">
          <div className="p-10">
            <h1 className="text-gray-500 text-xl md:text-2xl xl:text-6xl">
              O nás
            </h1>
            <h2 className="text-xl text-white font-bold pt-2 md:text-3xl xl:text-6xl">
              Some great Headline about Us
            </h2>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center w-full h-full p-10">
            <div className=" w-full h-full">
              <p className="text-gray-200 text-2xl md:text-4xl xl:text-6xl ">
                <span className="text-teal-800 pr-2">01</span>
                Vize
              </p>
              <h1 className="text-gray-500 text-lg md:text-xl md:py-5 xl:text-2xl">
                Lorem Ipsum
              </h1>
              <p className="text-white text-justify text-sm md:text-lg xl:text-xl p-5">
                Text , TExt .rwefnvText , TExText , TExt .rwefnvText , TExt
                .rwefnvText , TExt .rwefnvText , TExt .rwefnvText , TExt
                .rwefnvText , TExt .rwefnvText , TExt .rwefnvText , TExt
                .rwefnvText , TExt .rwefnvt .rwefnvText , TExt .rwefnv
              </p>
            </div>
            <div className=" w-full">
              <p className="text-gray-200 text-2xl md:text-4xl xl:text-6xl ">
                <span className="text-rose-800 pr-2">02</span>
                Mise
              </p>
              <h1 className="text-gray-500 text-lg md:text-xl md:py-5 xl:text-2xl">
                Lorem Ipsum
              </h1>
              <p className="text-white text-justify text-sm md:text-lg xl:text-xl p-5">
                Text , TExt .rwefnvText , TExt .rwefnvText , TExt .rwefnvText ,
                TExt .rwefnvText , TExt .rwefnvText , TExt .rwefnvText , TExt
                .rwefnvText , TExt .rwefnvText , TExt .rwefnvText , TExt
                .rwefnvText , TExt .rwefnvText , TExt .rwefnv
              </p>
            </div>
            <div className=" w-full">
              <p className="text-gray-200 text-2xl md:text-4xl xl:text-6xl ">
                <span className="text-violet-800 pr-2">03</span>
                Poslání
              </p>
              <h1 className="text-gray-500 text-lg md:text-xl md:py-5 xl:text-2xl">
                Lorem Ipsum
              </h1>
              <p className="text-white text-justify text-sm md:text-lg xl:text-xl p-5">
                Text , TExt .rwefnvText , TExt .rweText , TExt .rwefnvText ,
                TExt .rwefnvText , TExt .rwefnvText , TExt .rwefnvText , TExt
                .rwefnvText , TExt .rwefnvText , TExt .rwefnvText , TExt
                .rwefnvText , TExt .rwefnvfnvText , TExt .rwefnv
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row h-full w-full justify-center">
          <div className=" w-full">
            <motion.img
              className="object-contain rounded-br-lg"
              src="https://imageio.forbes.com/specials-images/imageserve/62cc3ed6cb7f66dc60f09d7c/Abstract-Digital-Futuristic-Eye/960x0.jpg?format=jpg&width=960"
              alt="some image"
            />
          </div>
          <div className=" w-full bg-white text-black rounded-br-xl">
            <div className="m-10">
              <h1 className="font-bold text-2xl md:text-3xl xl:text-6xl">
                Some god Headline
              </h1>
              <p className="text-sm md:text-xl xl:text-2xl mt-10 md:mt-20">
                <span className="text-black text-3xl p-2">&quot;</span> Text ,
                TExt .rwefnvText , TExt .rweText , TExt .rwefnvText , TExt
                .rwefnvText , TExt .rwefnvText , TExt .rwefnvText , TExt
                .rwefnvText , TExt .rwefnvText , TExt .rwefnvText , TExt
                .rwefnvText , TExt .rwefnvfnvText , TExt .rwefnv
                <span className="text-black text-3xl p-2">&quot;</span>
                <span className="mt-5 md:mt-10">Tomáš Kníže</span>
                <span className="text-black font-bold">CEO</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
