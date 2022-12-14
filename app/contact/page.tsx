import React from "react";
import "../../styles/globals.css";
import Footer from "../../components/Footer";

import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { SocialIcon } from "react-social-icons";

import { motion } from "framer-motion";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="flex flex-col h-full w-full bg-black text-white">
      <div className="h-full ">
        <section className="flex flex-col md:flex-row p-10">
          <div className=" flex flex-col md:flex-row w-full">
            <div className="w-full md:w-1/2 ">
              <h1 className=" text-white text-2xl md:text-4xl xl:text-6xl">
                Lets talk
              </h1>
              <h2 className="text-gray-600 mt-5 text-xl md:text-3xl xl:text-4xl ">
                Now that you know a lot about me, let me know if you are
                interested to work with me.
              </h2>
            </div>
            <div className="w-full md:w-1/2 ">
              <form action="" className="p-5">
                <p className="font-bold text-xl text-white pb-2">Name</p>
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
                <button className="bg-[#00e893] p-3 mt-3 font-bold text-[#1f003d] rounded-md">
                  Click to enter web3 world
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row p-10">
          <div className="flex flex-col md:flex-row w-full">
            <div className="w-full md:w-1/2 ">
              <h1 className="font-bold text-xl py-5">Logo</h1>
              <div className="mt-5">
                <div className="flex ">
                  <div className="mr-2">
                    <SocialIcon
                      className="grayscale opacity-50"
                      style={{ height: 30, width: 30 }}
                      url="https://discord.gg/softbase"
                    />
                  </div>
                  <div className="mr-2">
                    <SocialIcon
                      className="grayscale opacity-50"
                      style={{ height: 30, width: 30 }}
                      url="https://twitter.com/softbase"
                    />
                  </div>
                </div>
              </div>
              <div className="text-sm mt-10">
                <p>NoCopyRight Softbase s.r.o. - 2022</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 ">
              <h2 className="text-2xl py-5">Kontaktujte n??s</h2>
              <p className="font-bold">SoftBase s.r.o</p>
              <div className="flex my-2">
                <div className="mr-2">
                  <MapPinIcon className="h-6 w-6 text-gray-500 mr-1" />
                </div>
                <div className="mt-2">
                  <p>??v??bova 772/18, Praha 5, 152 00</p>
                </div>
              </div>
              <div className="flex my-2">
                <div className="mr-2">
                  <PhoneIcon className="h-6 w-6 text-gray-500 mr-1" />
                </div>
                <div className="mt-2">
                  <p className="font-bold">+420733590059</p>
                </div>
              </div>
              <div className="flex my-2">
                <div className="mr-2">
                  <EnvelopeIcon className="h-6 w-6 text-gray-500 mr-1" />
                </div>
                <div className="mt-2">
                  <p className="font-bold">info@softbase.cz</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="h-28">
        <Footer />
      </section>
    </div>
  );
}

export default Contact;
