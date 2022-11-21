import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";

import LetsTalk from "./Contact/LetsTalk";
import Form from "./Contact/Form";
import Socials from "./Contact/Socials";
import Contacts from "./Contact/Contacts";

type Props = {};

function Contact({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col h-screen w-full bg-black text-white"
    >
      <div className="h-full overflow-auto">
        <section className="flex flex-col md:flex-row p-10">
          <div className=" flex flex-col md:flex-row w-full">
            <div className="w-full md:w-1/2 ">
              <LetsTalk />
            </div>
            <div className="w-full md:w-1/2 ">
              <Form />
            </div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row p-10 ">
          <div className="flex flex-col md:flex-row w-full bg-[#1f003d] p-10">
            <div className="w-full md:w-1/2 ">
              <Socials />
            </div>
            <div className="w-full md:w-1/2 ">
              <Contacts />
            </div>
          </div>
        </section>
        <section className="h-28">
          <Footer />
        </section>
      </div>
    </motion.div>
  );
}

export default Contact;
