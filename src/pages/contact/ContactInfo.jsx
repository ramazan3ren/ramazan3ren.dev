import React from "react";
import { ContactForm } from "./ContactForm";
import { Information } from "./Information";

export const ContactInfo = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center bg-lightCardColor dark:bg-darkCardColor py-28 lg:py-36 ">
      <div className="text-black flex justify-start px-8 lg:justify-end items-center dark:text-white w-full lg:w-5/12 mr-0 lg:mt-0 xl:[zoom:1.2]">
        <Information />
      </div>
      <div className="flex items-start mt-14 justify-center w-full lg:w-7/12">
        <ContactForm />
      </div>
    </div>
  );
};
