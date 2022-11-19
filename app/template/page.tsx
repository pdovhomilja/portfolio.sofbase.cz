import React from "react";
import "../../styles/globals.css";
import Footer from "../../components/Footer";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="flex flex-col h-screen w-full bg-black text-white">
      <div className="h-full overflow-auto">
        <section className="flex flex-col md:flex-row p-10">
          <div className="border flex flex-col md:flex-row w-full">
            <div className="border w-full md:w-1/2 ">1</div>
            <div className="border w-full md:w-1/2 ">2</div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row p-10">
          <div className="border flex flex-col md:flex-row w-full">
            <div className="border w-full md:w-1/2 ">1</div>
            <div className="border w-full md:w-1/2 ">2</div>
          </div>
        </section>
        <section className="h-28">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default Contact;
