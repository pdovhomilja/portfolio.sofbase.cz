import Link from "next/link";
import React from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import Navbar from "./Navbar";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="flex flex-row h-28 bg-black">
      <Link href="#Home" className="mt-6 ml-2">
        <ArrowUpCircleIcon className="h-10 w-10 rounded-full filter text-slate-400 " />
      </Link>
      <Navbar />
    </div>
  );
}

export default Footer;
