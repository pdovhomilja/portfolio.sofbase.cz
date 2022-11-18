import Link from "next/link";
import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="flex flex-col md:flex-row w-full h-24 md:justify-end">
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
        O nás
      </Link>
      <Link
        href="#Projects"
        className="text-gray-300 pt-10 px-5 hover:bg-[#00e893] hover:text-[#1f003d]"
      >
        Projekty
      </Link>
      <Link
        href="#Skills"
        className="text-gray-300 pt-10 px-5 hover:bg-[#00e893] hover:text-[#1f003d]"
      >
        Skill
      </Link>
      <Link
        href="#Contact"
        className="text-gray-300 pt-10 px-5 hover:bg-[#00e893] hover:text-[#1f003d]"
      >
        Kontakt
      </Link>
    </div>
  );
}

export default Navbar;
