import React from "react";
import { motion } from "framer-motion";
import {
  Ethereum,
  Polygon,
  Solana,
  Bitcoin,
  Aave,
  Litecoin,
  Metaverse,
  BinanceCoin,
} from "@thirdweb-dev/chain-icons";
import {
  ClipboardDocumentIcon,
  GlobeEuropeAfricaIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/outline";
import { DiJavascript, DiReact } from "react-icons/di";
import { SiTypescript, SiIpfs, SiNextdotjs, SiSolidity } from "react-icons/si";
import { FaHardHat } from "react-icons/fa";

import Image from "next/image";

type Props = {};

function Skill({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col h-full w-full bg-black text-white"
    >
      <div className="h-full">
        <section className="flex flex-col md:flex-row p-10">
          <div className="flex flex-col md:flex-row w-full">
            <div className="w-full">
              <div className="flex flex-col p-5">
                <h1 className="font-bold text-2xl md:text-4xl xl:text-6xl">
                  Skillset
                </h1>
                <p className="text-gray-500 pt-5">
                  With this 3 different skillsets we are the best to contact
                  when any web3 project steps into your mind.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row p-10">
          <div className="flex flex-col md:flex-row w-full">
            <div className="w-full">
              <div className="flex flex-col p-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                  <div className="p-5">
                    <p>
                      <GlobeEuropeAfricaIcon
                        width={50}
                        height={50}
                        className="text-gray-500"
                      />
                    </p>
                    <h1 className="font-bold text-lg py-2">dApps</h1>
                    <p className="text-gray-500">
                      From design to development, we are building in Ethereum
                      ecosystem decentralized applications. You will always have
                      high-end software.
                    </p>
                  </div>
                  <div className="p-5">
                    <p className="">
                      <Ethereum width={50} height={50} />
                    </p>
                    <h1 className="font-bold text-lg py-2">NFTs</h1>
                    <p className="text-gray-500">
                      We develop the whole process from Web development
                      (FrontEnd Part) to Smart contract development ( Mint new
                      NFT or Tokens, especially ERC-20 or ERC-721)
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
                    <h1 className="font-bold text-lg py-2">Web3</h1>
                    <p className="text-gray-500">
                      We help you with strategy and solve 2 main question to
                      have your NFT project successful. Who is you project for
                      and how wíll you benefit from it?
                    </p>
                  </div>
                  <div className="p-5">
                    <p>
                      <ClipboardDocumentIcon
                        width={50}
                        height={50}
                        className="text-gray-500"
                      />
                    </p>
                    <h1 className="font-bold text-lg py-2">niche</h1>
                    <p className="text-gray-500">
                      more than 80% of web3 projects fail due to poor marketing
                      management, we help you set up your project to become
                      successful and sustainable
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row p-10 w-full">
          <div className="flex flex-wrap flex-3 gap-5 md:flex-row w-full justify-between items-center">
            <div>
              <DiJavascript className="w-14 h-14 hover:text-yellow-300" />
            </div>
            <div>
              <DiReact className="w-14 h-14 hover:text-blue-500" />
            </div>
            <div>
              <FaHardHat className="w-14 h-14 hover:text-yellow-300" />
            </div>
            <div>
              <SiNextdotjs className="w-14 h-14 hover:text-black" />
            </div>
            <div>
              <SiTypescript className="w-14 h-14 hover:text-blue-600" />
            </div>
            <div>
              <SiSolidity className="w-14 h-14 hover:text-gray-600" />
            </div>
            <div>
              <SiIpfs className="w-14 h-14 hover:text-gray-600" />
            </div>
            <div>
              <Bitcoin
                className="grayscale  hover:grayscale-0"
                width={50}
                height={50}
              />
            </div>
            <div>
              <BinanceCoin
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
        <section className="flex flex-col md:flex-row p-10">
          <div className="flex flex-col md:flex-row w-full">
            <div className="w-full md:w-1/2 "></div>
            <div className="w-full md:w-1/2 "></div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default Skill;
