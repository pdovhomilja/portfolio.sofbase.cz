import React from "react";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

type Props = {};

function Contacts({}: Props) {
  return (
    <>
      <h2 className="text-2xl py-5">Contacts</h2>
      <p className="font-bold">SoftBase s.r.o</p>
      <div className="flex my-2">
        <div className="mr-2">
          <MapPinIcon className="h-6 w-6 text-gray-500 mr-1" />
        </div>
        <div className="mt-2">
          <p>Švábova 772/18, Prague 5, 152 00</p>
        </div>
      </div>
      <div className="flex my-2">
        <div className="mr-2">
          <PhoneIcon className="h-6 w-6 text-gray-500 mr-1" />
        </div>
        <div className="mt-2">
          <p className="font-bold">+420733590059</p>
        </div>
      </div>
      <div className="flex my-2">
        <div className="mr-2">
          <EnvelopeIcon className="h-6 w-6 text-gray-500 mr-1" />
        </div>
        <div className="mt-2">
          <p className="font-bold">info@softbase.cz</p>
        </div>
      </div>
    </>
  );
}

export default Contacts;
