import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

type Props = {};

function AboutUs({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen justify-evenly overflow-hidden"
    >
      <div className="bg-black w-full h-1/2 pb-20">
        <div className="p-10 xl:p-20">
          <h2 className="text-gray-500 text-xl md:text-2xl xl:text-6xl">
            O nás
          </h2>
          <h1 className="text-xl text-white font-bold pt-2 md:text-3xl xl:text-6xl">
            Some great Headline about Us
          </h1>
        </div>
        <div className="flex flex-row h-full mt-2 mx-10">
          <div className="w-1/3 p-5">
            <p className="text-gray-200 text-2xl md:text-4xl xl:text-6xl ">
              <span className="text-teal-800 pr-2">01</span>
              Vize
            </p>
            <h1 className="text-gray-500 text-lg md:text-xl md:py-5 xl:text-2xl">
              Lorem Ipsum
            </h1>
            <p className="text-white text-sm md:text-lg xl:text-xl">
              Text , TExt .rwefnvText , TExText , TExt .rwefnvText , TExt
              .rwefnvText , TExt .rwefnvText , TExt .rwefnvText , TExt
              .rwefnvText , TExt .rwefnvText , TExt .rwefnvText , TExt
              .rwefnvText , TExt .rwefnvt .rwefnvText , TExt .rwefnv
            </p>
          </div>
          <div className="w-1/3 p-5">
            <p className="text-gray-200 text-2xl md:text-4xl xl:text-6xl ">
              <span className="text-rose-800 pr-2">02</span>
              Mise
            </p>
            <h1 className="text-gray-500 text-lg md:text-xl md:py-5 xl:text-2xl">
              Lorem Ipsum
            </h1>
            <p className="text-white text-sm md:text-lg xl:text-xl">
              Text , TExt .rwefnvText , TExt .rwefnvText , TExt .rwefnvText ,
              TExt .rwefnvText , TExt .rwefnvText , TExt .rwefnvText , TExt
              .rwefnvText , TExt .rwefnvText , TExt .rwefnvText , TExt
              .rwefnvText , TExt .rwefnvText , TExt .rwefnv
            </p>
          </div>
          <div className="w-1/3 p-5">
            <p className="text-gray-200 text-2xl md:text-4xl xl:text-6xl ">
              <span className="text-violet-800 pr-2">03</span>
              Poslání
            </p>
            <h1 className="text-gray-500 text-lg md:text-xl md:py-5 xl:text-2xl">
              Lorem Ipsum
            </h1>
            <p className="text-white text-sm md:text-lg xl:text-xl">
              Text , TExt .rwefnvText , TExt .rweText , TExt .rwefnvText , TExt
              .rwefnvText , TExt .rwefnvText , TExt .rwefnvText , TExt
              .rwefnvText , TExt .rwefnvText , TExt .rwefnvText , TExt
              .rwefnvText , TExt .rwefnvfnvText , TExt .rwefnv
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row h-1/2">
        <div className="w-1/2 bg-black h-full">
          <div className="h-full">
            <motion.img
              className="object-fill rounded-md"
              src="https://imageio.forbes.com/specials-images/imageserve/62cc3ed6cb7f66dc60f09d7c/Abstract-Digital-Futuristic-Eye/960x0.jpg?format=jpg&width=960"
              alt="some image"
            />
          </div>
        </div>
        <div className="w-1/2 bg-white">
          <div className="m-10">
            <h1 className="font-bold text-2xl md:text-3xl xl:text-6xl">
              Some god Headline
            </h1>
            <p className="text-sm md:text-xl xl:text-2xl mt-10 md:mt-20">
              <span className="text-black text-3xl p-2">"</span> Text , TExt
              .rwefnvText , TExt .rweText , TExt .rwefnvText , TExt .rwefnvText
              , TExt .rwefnvText , TExt .rwefnvText , TExt .rwefnvText , TExt
              .rwefnvText , TExt .rwefnvText , TExt .rwefnvText , TExt
              .rwefnvfnvText , TExt .rwefnv
              <span className="text-black text-3xl p-2">"</span>
              <p className="mt-5 md:mt-10">Tomáš Kníže</p>
              <span className="text-black font-bold">CEO</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default AboutUs;
