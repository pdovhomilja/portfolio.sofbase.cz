import Link from "next/link";
import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="flex flex-row text-sm md:text-lg w-full h-28 md:justify-end">
      <Link
        className="text-[#1f003d] pt-10 px-5 bg-[#00e893] hover:bg-[#00e893]"
        href="#Home"
      >
        Home
      </Link>
      <Link
        href="#AboutUs"
        className="text-gray-300 pt-10 px-5 hover:bg-[#00e893] hover:text-[#1f003d]"
      >
        Mission
      </Link>
      {/*
      <Link
        href="#Projects"
        className="text-gray-300 pt-10 px-5 hover:bg-[#00e893] hover:text-[#1f003d]"
      >
        Projekty
      </Link>
  */}
      <Link
        href="#Skills"
        className="text-gray-300 pt-10 px-5 hover:bg-[#00e893] hover:text-[#1f003d]"
      >
        Skillset
      </Link>
      <Link
        href="#Contact"
        className="text-gray-300 pt-10 px-5 hover:bg-[#00e893] hover:text-[#1f003d]"
      >
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
