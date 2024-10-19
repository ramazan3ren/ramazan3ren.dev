import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../SocialMedia/SocialMedia";

export const Footer = () => {
  const date = new Date();
  return (
    <>
      <div className="w-full h-32 flex flex-col 1080p:flex-row border-t border-secondaryColor justify-center 1080:justify-between items-center bg-white dark:bg-darkThemeAppColor dark:text-white text-black 1080p:px-72 lg:px-52 px-12">
        <p className="w-full items-center justify-center text-center 1080p:text-start mb-4 1080p:mb-0">
          Design by{" "}
          <Link
            to="/"
            className="text-primaryColor font-extrabold hover:text-secondaryColor"
          >
            Ramazan Eren Kocabaş
          </Link>{" "}
          © Copyright {date.getFullYear()}
        </p>

        <SocialMedia />
      </div>
    </>
  );
};
