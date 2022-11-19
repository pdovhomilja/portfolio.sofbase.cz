import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Socials({}: Props) {
  return (
    <>
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
    </>
  );
}

export default Socials;
