import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import {
  Ethereum,
  Polygon,
  Solana,
  Bitcoin,
  Aave,
  Litecoin,
  Metaverse,
} from "@thirdweb-dev/chain-icons";
import {
  ClipboardDocumentIcon,
  GlobeEuropeAfricaIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/outline";
import { DiJavascript } from "react-icons/di";
import { SiTypescript, SiSolidity } from "react-icons/si";
import { FaHardHat } from "react-icons/fa";

import Image from "next/image";

type Props = {};

function Skill({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col h-screen w-full bg-black text-white"
    >
      <div className="h-full overflow-auto">
        <section className="flex flex-col md:flex-row p-2">
          <div className="flex flex-col md:flex-row w-full">
            <div className="flex flex-col md:flex-row w-full p-2">
              <div className="flex flex-col p-5">
                <h1 className="font-bold text-2xl md:text-4xl xl:text-6xl">
                  Our Skills
                </h1>
                <p className="text-gray-500 pt-5">
                  Some text about our skill set. Umíme navrhnout a vytvořit Web3
                  aplikace, mobilní aplikace vše v moderních technologiích
                  React, ReactNative, Next.JS.Umíme navrhnout a vytvořit Web3
                  aplikace, mobilní aplikace vše v moderních technologiích
                  React, ReactNative, Next.JS.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                <div className="p-5">
                  <p>
                    <GlobeEuropeAfricaIcon
                      width={50}
                      height={50}
                      className="text-gray-500"
                    />
                  </p>
                  <h1 className="font-bold text-lg py-2">Web design</h1>
                  <p className="text-gray-500">
                    Umíme navrhnout a vytvořit Web3 aplikace, mobilní aplikace
                    vše v moderních technologiích React, ReactNative, Next.JS.
                  </p>
                </div>
                <div className="p-5">
                  <p className="">
                    <Ethereum width={50} height={50} />
                  </p>
                  <h1 className="font-bold text-lg py-2">BlockChain</h1>
                  <p className="text-gray-500">
                    Umíme se pohybovat v blockchain protokolech. Umíme navrhnout
                    a naprograovat smartcontracty. Máme zkušenosti z hlavními
                    Chainy jako je Ethereum, Polygon, Solana
                  </p>
                </div>
                <div className="p-5">
                  <p>
                    <PresentationChartBarIcon
                      className="text-gray-500"
                      width={50}
                      height={50}
                    />
                  </p>
                  <h1 className="font-bold text-lg py-2">Marketing</h1>
                  <p className="text-gray-500">Some text about this skill</p>
                </div>
                <div className="p-5">
                  <p>
                    <ClipboardDocumentIcon
                      width={50}
                      height={50}
                      className="text-gray-500"
                    />
                  </p>
                  <h1 className="font-bold text-lg py-2">Project management</h1>
                  <p className="text-gray-500">
                    Jsme zkušený team, který se podílel na vývoji rozsáhlých
                    aplikací pro veřejnou správu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row p-10 w-full">
          <div className="flex flex-wrap flex-3 gap-5 md:flex-row w-full justify-between items-center">
            <div>
              <DiJavascript className="w-14 h-14 grayscale  hover:text-yellow-300" />
            </div>
            <div>
              <FaHardHat className="w-14 h-14 hover:text-yellow-300" />
            </div>
            <div>
              <SiTypescript className="w-14 h-14 hover:text-blue-600" />
            </div>
            <div>
              <SiSolidity className="w-14 h-14 hover:text-gray-600" />
            </div>
            <div>
              <Bitcoin
                className="grayscale  hover:grayscale-0"
                width={50}
                height={50}
              />
            </div>
            <div>
              <Solana
                className="grayscale  hover:grayscale-0"
                width={50}
                height={50}
              />
            </div>
            <div>
              <Polygon
                className="grayscale  hover:grayscale-0"
                width={50}
                height={50}
              />
            </div>
            <div>
              <Ethereum
                className="grayscale  hover:grayscale-0"
                height={50}
                width={50}
              />
            </div>
            <div>
              <Aave
                className="grayscale  hover:grayscale-0"
                width={50}
                height={50}
              />
            </div>
            <div>
              <Litecoin
                className="grayscale hover:grayscale-0"
                width={50}
                height={50}
              />
            </div>
            <div>
              <Metaverse
                className="grayscale hover:grayscale-0 "
                width={50}
                height={50}
              />
            </div>
          </div>
        </section>
      </div>
      <section className="h-28"></section>
    </motion.div>
  );
}

export default Skill;
