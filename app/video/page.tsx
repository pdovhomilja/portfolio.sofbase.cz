import React from "react";
import "../../styles/globals.css";

type Props = {};

function Video({}: Props) {
  return (
    <>
      <div className="relative">
        <div className="bg-hero-section bg-no-repeat h-screen bg-center bg-cover">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 object-cover h-screen xl:h-auto"
          >
            <source src="video/robovice-banner.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0">
            <div className="sm:text-5xl text-4xl font-thin sm:my-56 my-32 mx-16 text-center text-white">
              We are Softbase
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
