import React from "react";

export const ContactForm = () => {
  return (
    <div className="p-6 lg:p-0 max-w-2xl mx-auto ">
      <form className="space-y-4">
        <div className="flex space-x-4">
          <input
            type="text"
            name="password"
            placeholder="Ad - Soyad"
            className="w-1/2 p-3  dark:bg-darkThemeColor text-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primaryColor"
          />
          <input
            type="email"
            placeholder="Mail Adresiniz"
            className="w-1/2 p-3  dark:bg-darkThemeColor text-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primaryColor"
          />
        </div>
        <input
          type="text"
          placeholder="Konu"
          className="w-full p-3 dark:bg-darkThemeColor text-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primaryColor"
        />
        <textarea
          placeholder="Mesajınız"
          rows="8"
          
          className="w-full p-3  dark:bg-darkThemeColor resize-none text-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primaryColor"
        ></textarea>
        <button
          type="submit"
          className="w-full p-3 bg-primaryColor text-white rounded-full hover:bg-secondaryColor transition-all"
        >
          Gönder
        </button>
      </form>
    </div>
  );
};
