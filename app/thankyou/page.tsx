import Link from "next/link";
import React from "react";
import "../../styles/globals.css";

type Props = {};

function ThankYou({}: Props) {
  return (
    <div className="w-full h-screen bg-black text-white flex flex-col justify-center items-center p-10">
      <div className="pb-10">
        <picture>
          <img src="/images/sb_rgb_logo.png" alt="logo" />
        </picture>
      </div>
      <div className="items-center justify-center pb-10">
        <h1 className="text-6xl justify-center items-center">
          <span className="text-gray-600 font-bold"> Hi there,</span>
          we just want to tell you{" "}
          <span className="text-blue-800 animate-pulse">,thank you!</span>
        </h1>
      </div>
      <div className="items-end">
        <h2 className="text-4xl pb-10">Team Softbase</h2>
      </div>
      <div className="pt-5 flex flex-col items-center md:flex-row">
        <Link href="/" className="bg-white rounded-lg text-black p-2 m-2">
          Go to homepage
        </Link>
        <p>or</p>
        <Link
          href=""
          className="bg-white rounded-lg text-black p-2 m-2 cursor-not-allowed"
        >
          Mint our welcome NFT
        </Link>
        <span>(100/100 NFT minted)</span>
      </div>
      <div></div>
    </div>
  );
}

export default ThankYou;
