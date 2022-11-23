import React from "react";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  CurrencyEuroIcon,
  BuildingOfficeIcon,
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
      <div className="flex my-2">
        <div className="mr-2">
          <CurrencyEuroIcon className="h-6 w-6 text-gray-500 mr-1" />
        </div>
        <div className="mt-2">
          <p className="font-bold">Fio Bank</p>
          <p>2902352127/2010</p>
          <p>IBAN:CZ1620100000002902352127</p>
          <p>SWIFT/BIC:FIOBCZPPXXX</p>
        </div>
      </div>
      <div className="flex my-2">
        <div className="mr-2">
          <BuildingOfficeIcon className="h-6 w-6 text-gray-500 mr-1" />
        </div>
        <div className="mt-2">
          <p className="font-bold">VAT:17197031</p>
        </div>
      </div>
    </>
  );
}

export default Contacts;
