import Link from "next/link";
import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="flex flex-col md:flex-row w-full h-24 md:justify-end">
      <Link
        className="text-gray-300 pt-10 px-5 bg-black hover:bg-blue-700"
        href="#Home"
      >
        <p>Home</p>
      </Link>
      <Link
        href="#AboutUs"
        className="text-gray-300 pt-10 px-5 hover:bg-blue-700"
      >
        <p>O nás</p>
      </Link>
      <Link
        href="#Projects"
        className="text-gray-300 pt-10 px-5 hover:bg-blue-700"
      >
        <p>Projekty</p>
      </Link>
      <Link
        href="#Skills"
        className="text-gray-300 pt-10 px-5 hover:bg-blue-700"
      >
        <p>Skill</p>
      </Link>
      <Link
        href="#Contact"
        className="text-gray-300 pt-10 px-5 hover:bg-blue-700"
      >
        <p>Kontakt</p>
      </Link>
    </div>
  );
}

export default Navbar;
