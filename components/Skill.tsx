import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

type Props = {};

function Skill({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen justify-evenly overflow-hidden"
    >
      <div className="flex flex-col w-full h-full bg-black text-white">
        <div className="h-2/3 border">
          <h1 className="text-white">Skills</h1>
        </div>
        <div></div>
        <div>Section 3</div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default Skill;
