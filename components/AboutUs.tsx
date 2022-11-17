import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function AboutUs({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen justify-evenly overflow-hidden"
    >
      <div className="bg-black w-full h-1/2">
        <div className="h-1/2 border"></div>
        <div className="flex flex-row">
          <div className="w-1/3 border">
            <p className="text-gray-200 text-2xl ">01</p>
            <h1 className="text-white text-xl">Lorem Ipsum</h1>
            <p className="text-white">
              Text , TExt .rwefnvText , TExt .rwefnvText , TExt .rwefnv
            </p>
          </div>
          <div className="w-1/3 border"></div>
          <div className="w-1/3 border"></div>
        </div>
      </div>
      <div className="flex flex-row h-1/2">
        <div className="w-1/2 bg-gray-500 h-full">section 1</div>
        <div className="w-1/2">section 2</div>
      </div>
      <div className="h-28 bg-black">
        <Link href="#Home">
          <p className="text-white">Home</p>
        </Link>
      </div>
    </motion.div>
  );
}

export default AboutUs;
