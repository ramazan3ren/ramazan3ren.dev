import React from "react";
import { PageDetail } from "../../layouts/PageDetail/PageDetail";
import { ContactForm } from "./ContactForm";
import { ContactInfo } from "./ContactInfo";

export const Contact = () => {
  return (
    <>
      <PageDetail pageName={"İletişim"} />
      <ContactInfo />
    </>
  );
};
