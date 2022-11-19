import React from "react";
import "../../styles/globals.css";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

type Props = {};

function AboutUs({}: Props) {
  return (
    <div className="flex flex-col bg-black text-white h-screen w-full justify-center">
      <div className="flex flex-col">
        <div>
          <h1 className="text-gray-500 text-xl md:text-2xl xl:text-6xl">
            O nás
          </h1>
          <h2 className="text-xl text-white font-bold pt-2 md:text-3xl xl:text-6xl">
            Some great Headline about Us
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          <div className=" w-full">
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
          <div className=" w-full">
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
          <div className=" w-full">
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
      <div className=" flex flex-col md:flex-row my-auto h-full w-full justify-center">
        <div className=" w-full">left</div>
        <div className=" w-full">right</div>
      </div>
      <div className=" h-28">
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
