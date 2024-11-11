import React from "react";
import { motion } from "framer-motion";

export const Behance = ({ projectId }) => {
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
      <iframe
        src={`https://www.behance.net/embed/project/${projectId}?ilo0=1`}
        className="w-full h-[300px] "
        allowFullScreen
        allow="clipboard-write"
        refererpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </motion.div>
  );
};
