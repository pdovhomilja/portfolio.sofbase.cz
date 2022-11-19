import React from "react";

type Props = {};

function Form({}: Props) {
  return (
    <form action="" className="p-5">
      <p className="font-bold text-xl text-white pb-2">Name</p>
      <input type="text" className="rounded-md w-full pr-6 bg-gray-500" />
      <p className="font-bold text-white pb-2">E-mail</p>
      <input type="text" className="rounded-md w-full pr-6 bg-gray-500" />
      <p className="font-bold text-white pb-2">Message</p>
      <textarea className="rounded-md w-full pr-6 bg-gray-500" />
      <button className="bg-[#00e893] p-3 mt-3 font-bold text-[#1f003d] rounded-md">
        Click to enter web3 world
      </button>
    </form>
  );
}

export default Form;
