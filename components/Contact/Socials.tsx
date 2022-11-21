import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Socials({}: Props) {
  return (
    <>
      <Image src="/images/sb_logo_2.png" width={200} height={100} alt="logo" />
      <div className="mt-5">
        <div className="flex ">
          <div className="mr-2">
            <SocialIcon
              className="grayscale opacity-50 hover:opacity-100"
              style={{ height: 30, width: 30 }}
              url="https://discord.gg/UXPBc7t7Yr"
            />
          </div>
          <div className="mr-2">
            <SocialIcon
              className="opacity-25 hover:opacity-75"
              //fgColor="white"
              bgColor="white"
              style={{ height: 30, width: 30 }}
              url="https://github.com/softbase-sro"
            />
          </div>
          <div className="mr-2">
            <SocialIcon
              className="grayscale opacity-50 hover:opacity-100"
              style={{ height: 30, width: 30 }}
              url="https://twitter.com/SoftBaseCZ"
            />
          </div>
        </div>
      </div>
      <div className="text-sm mt-10">
        <p>NoCopyRight Softbase s.r.o. - 2022</p>
      </div>
    </>
  );
}

export default Socials;
