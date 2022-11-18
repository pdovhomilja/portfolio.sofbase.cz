import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "./Footer";

type Props = {};

function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen justify-evenly overflow-hidden"
    >
      <h1 className="text-white">Projects</h1>
      <Footer />
    </motion.div>
  );
}

export default Projects;
