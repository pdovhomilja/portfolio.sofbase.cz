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
      className="flex flex-col h-screen w-full bg-black text-white"
    >
      <div className="h-full overflow-auto">
        <section className="flex flex-col md:flex-row p-10">
          <div className="border flex flex-col md:flex-row w-full"></div>
        </section>
        <section className="flex flex-col md:flex-row p-10">
          <div className="border flex flex-col md:flex-row w-full"></div>
        </section>
      </div>
      <section className="h-28">
        <Footer />
      </section>
    </motion.div>
  );
}

export default Projects;
