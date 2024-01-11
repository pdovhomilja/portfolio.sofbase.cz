import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    //console.log("Sending");
    let data = {
      name,
      email,
      phone,
      message,
    };
    setLoading(true);
    //console.log(data);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log("Error from contact form" + error);
    } finally {
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setLoading(false);
      router.refresh();
    }
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
          defaultValue={email}
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
        {loading ? (
          <div className="flex justify-center items-center space-x-2">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <div>Sending...</div>
          </div>
        ) : (
          "Click to enter web3 world with Softbase"
        )}
      </button>
    </form>
  );
}

export default Form;
