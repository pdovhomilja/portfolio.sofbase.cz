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
      <div className="w-full h-full bg-black">
        <h1 className="text-white">Skills</h1>
      </div>
      <Footer />
    </motion.div>
  );
}

export default Skill;
