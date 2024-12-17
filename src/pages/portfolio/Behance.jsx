import React from "react";
import { motion } from "framer-motion";
import { BsBehance } from "react-icons/bs";

export const Behance = ({ projectId, imgPath }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.5,
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="relative group w-full h-[300px] rounded-2xl overflow-hidden shadow-lg">
        {/* Background Image */}
        <img
          src={imgPath}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute "></div>

        <div className="absolute inset-0 flex flex-col justify-between text-white ">
          <div className="absolute px-4 pt-4 pb-2 w-full bottom-0 from-0% bg-gradient-to-t from-black flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {/* Profile Image */}
              <img
                src="/src/assets/img/behance-img/pp.jpg"
                alt="Your Name"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h1 className="text-lg font-bold font-montserrat">Matchday Design Beşiktaş</h1>
                <span className="text-sm font-montserrat">Ramazan Eren Kocabaş</span>
              </div>
            </div>

            {/* Behance Logo */}
            <BsBehance className="w-6 h-6" />
          </div>
        </div>

        {/* Hover Effect */}
        <a href={`https://www.behance.net/embed/project/${projectId}?ilo0=1`}>
          <div className="absolute inset-0 font-josefin flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-bold">Behance'ta Görüntüle</p>
          </div>
        </a>
      </div>
      {/* <iframe
        src={`https://www.behance.net/embed/project/${projectId}?ilo0=1`}
        className="w-full h-[300px] "
        allowFullScreen
        allow="clipboard-write"
        refererpolicy="strict-origin-when-cross-origin"
      ></iframe> */}
    </motion.div>
  );
};
