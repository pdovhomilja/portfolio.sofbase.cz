import Link from "next/link";
import React from "react";
import "../../styles/globals.css";

type Props = {};

function ThankYou({}: Props) {
  return (
    <div className="w-full h-screen bg-black text-white flex flex-col justify-center items-center">
      <div className="items-center justify-center">
        <h1 className="text-6xl justify-center items-center">
          Hi there, we just want to tell you{" "}
          <span className="text-blue-800">thank you!</span>
        </h1>
      </div>
      <div className="items-end">
        <h2 className="text-4xl">Team Softbase</h2>
      </div>
      <div className="pt-5">
        <Link href="/" className="bg-white rounded-lg text-black p-2 m-2">
          Go to homepage
        </Link>
        or
        <Link href="/" className="bg-white rounded-lg text-black p-2 m-2">
          Mint our welcome NFT
        </Link>
      </div>
    </div>
  );
}

export default ThankYou;
