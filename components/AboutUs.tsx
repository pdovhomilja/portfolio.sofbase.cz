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
      className="flex flex-col h-full w-full bg-black text-white"
    >
      <div className=" bg-black text-white h-full w-full">
        <div className="p-10">
          <div className="flex flex-col">
            <div className="p-5">
              <h1 className="text-white font-bold text-xl md:text-2xl xl:text-6xl">
                Mission
              </h1>
              <p className="text-gray-500">
                make the most of the potential of decentralized systems in order
                to...
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-start w-full h-full p-10">
              <div className=" w-full h-full">
                <p className="text-gray-200 text-2xl md:text-4xl xl:text-6xl ">
                  <span className="text-teal-800 pr-2">01</span>
                </p>
                <h1 className="text-gray-500 text-lg md:text-xl md:p-2 xl:text-2xl">
                  emancipate everybody
                </h1>
                <p className="text-white p-5 text-justify text-sm md:text-lg">
                  to emancipate everyone who is willing to step out of their
                  comfort zone and who has found their mission in software
                  development
                </p>
              </div>
              <div className=" w-full">
                <p className="text-gray-200 text-2xl md:text-4xl xl:text-6xl ">
                  <span className="text-rose-800 pr-2">02</span>
                </p>
                <h1 className="text-gray-500 text-lg md:text-xl md:p-2 xl:text-2xl">
                  connect
                </h1>
                <p className="text-white p-5 text-justify text-sm md:text-lg">
                  not only people, but also their businesses thanks to the new
                  possibilities of web3 and decentralized applications
                </p>
              </div>
              <div className=" w-full">
                <p className="text-gray-200 text-2xl md:text-4xl xl:text-6xl ">
                  <span className="text-violet-800 pr-2">03</span>
                </p>
                <h1 className="text-gray-500 text-lg md:text-xl md:p-2 xl:text-2xl">
                  become a leader
                </h1>
                <p className="text-white text-justify text-sm md:text-lg xl:text-xl p-5">
                  and together with very talented local developers community
                  bring Czechia to the top of Web3 global players
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row h-full w-full justify-center">
            <div className=" w-full">
              <motion.img
                className="object-contain rounded-br-lg"
                src="/images/web3_eye.jpeg"
                alt="some image"
              />
            </div>
            <div className=" w-full bg-white text-black rounded-br-xl">
              <div className="m-10">
                <h1 className="font-bold text-2xl md:text-3xl xl:text-6xl">
                  Why we think we can change the world?
                </h1>
                <p className="text-sm md:text-xl xl:text-2xl mt-10 md:mt-20">
                  <span className="text-black text-3xl p-2">&quot;</span>We
                  spent lot of time in old fashioned projects. dApps brings
                  something we´ve been always looking for – total freedom. For
                  us, stepping into web3 space is very natural feeling as we´ve
                  always supported open-source as the fastest and the most
                  effective way how to deliver.
                  <span className="text-black text-3xl p-2">&quot;</span>
                  <br />
                  <br />
                  <span className="mt-5 md:mt-10">Tomáš Knížek</span>
                  <br />
                  <br />
                  <span className="text-black font-bold">CEO</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutUs;
