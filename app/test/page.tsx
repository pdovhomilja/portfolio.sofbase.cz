import React from "react";
import "../../styles/globals.css";

type Props = {};

function Test({}: Props) {
  return (
    <div className="bg-black text-white w-screen h-screen">
      <div className="h-full w-full flex flex-col justify-between border">
        <div className="flex flex-row justify-between items-center w-full border h-28">
          <div>Logo</div>
          <div className="">
            <p>Menu</p>
          </div>
        </div>
        {/* Middle */}
        <div className="h-full">
          <div className="flex flex-col md:flex-row  w-full h-full">
            <div className="flex flex-col border py-10 w-1/3 justify-center">
              <div className="border -mr-32 h-full">img</div>
            </div>
            <div className="flex justify-center "></div>
          </div>
        </div>
        {/* Footer */}
        <div className="border h-28">Footer</div>
      </div>
    </div>
  );
}

export default Test;
