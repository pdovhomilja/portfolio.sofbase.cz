import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Contact({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen justify-evenly overflow-hidden"
    >
      <div className="h-2/3 bg-black">
        <p className="h-40"></p>
        <div className="m-10 pt-10 h-full">
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
        <div className="m-10 flex flex-row text-white">
          <div className="flex flex-col w-1/2 m-5 p-5">
            <h1>Logo</h1>
            <div>
              <div className="flex">
                <div className="mr-2">
                  <SocialIcon
                    className="grayscale opacity-50"
                    style={{ height: 30, width: 30 }}
                    url="https://discord.gg/dovhomilja"
                  />
                </div>
                <div className="mr-2">
                  <SocialIcon
                    className="grayscale opacity-50"
                    style={{ height: 30, width: 30 }}
                    url="https://twitter.com/dovhomilja"
                  />
                </div>
                <div className="mr-2">
                  <SocialIcon
                    className="grayscale opacity-50"
                    style={{ height: 30, width: 30 }}
                    url="https://facebook/dovhomilja"
                  />
                </div>
              </div>
            </div>
            <div>
              <p>NoCopyRight Softbase s.r.o. - 2022</p>
            </div>
          </div>
          <div className="w-1/2 m-5 p-5">
            <h2 className="text-2xl py-5">Kontaktujte nás</h2>
            <p className="font-bold">SoftBase s.r.o</p>

            <div className="flex my-2">
              <div className="mr-2">
                <MapPinIcon className="h-6 w-6 text-gray-500 mr-1" />
              </div>
              <div>
                <p>Švábova 772/18, Praha 5, 152 00</p>
              </div>
            </div>
            <div className="flex my-2">
              <div className="mr-2">
                <PhoneIcon className="h-6 w-6 text-gray-500 mr-1" />
              </div>
              <div>
                <p className="font-bold">+420733590059</p>
              </div>
            </div>
            <div className="flex my-2">
              <div className="mr-2">
                <EnvelopeIcon className="h-6 w-6 text-gray-500 mr-1" />
              </div>
              <div>
                <p className="font-bold">info@softbase.cz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default Contact;
