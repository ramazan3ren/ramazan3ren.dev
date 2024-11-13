import React from "react";

import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";

export const Information = () => {
  return (
    <>
      <div class="space-y-6">
        <div class="flex items-start py-2 space-x-3">
          <FaPhoneAlt size={20} />
          <div>
            <p class="font-semibold text-primaryColor">Telefon Numaram</p>
            <a className="transition-all hover:text-primaryColor" href="tel:+905011321090">+90 501 132 1090</a>
          </div>
        </div>

        <div class="flex items-start justify-center space-x-3">
          <IoMdMail size={20} />
          <div>
            <p class="font-semibold text-primaryColor">Mail Adresim</p>
            <a className="transition-all hover:text-primaryColor" href="mailto:ramazan3ren@gmail.com">ramazan3ren@gmail.com</a>
          </div>
        </div>

        <div class="flex items-start space-x-3">
          <FaLocationDot size={20} />
          <div>
            <p class="font-semibold text-primaryColor">Konum</p>
            <p>Konya, Türkiye</p>
          </div>
        </div>
      </div>
    </>
  );
};
