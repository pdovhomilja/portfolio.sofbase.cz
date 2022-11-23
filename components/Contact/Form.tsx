import Router, { useRouter } from "next/router";
import React, { useState } from "react";

type Props = {};

function Form({}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      phone,
      message,
    };
    console.log(data);
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    //alert("Váš formulář byl úspěšně odelán. Děkujeme");
    router.push("/thankyou");
  };
  return (
    <form action="" className="p-5">
      <label className="font-bold text-xl text-white pb-2">
        Name
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          name="name"
          className="rounded-md w-full pr-6 bg-gray-500"
        />
      </label>
      <label className="font-bold text-xl text-white py-2">
        E-mail
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
          className="rounded-md w-full pr-6 bg-gray-500"
        />
      </label>
      <label className="font-bold text-xl text-white py-2">
        Phone
        <input
          type="text"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          name="phone"
          className="rounded-md w-full pr-6 bg-gray-500"
        />
      </label>
      <label className="font-bold text-xl text-white py-2">
        Message
        <textarea
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          name="message"
          className="rounded-md w-full pr-6 bg-gray-500"
        />
      </label>
      <button
        onClick={(e) => {
          handleSubmit(e);
        }}
        className="bg-[#00e893] p-3 mt-3 font-bold text-[#1f003d] rounded-md"
      >
        Click to enter web3 world with Softbase
      </button>
    </form>
  );
}

export default Form;
