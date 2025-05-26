import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Phase1 = ({ title, image, tech, liveUrl, githubUrl, status = 'Live' }) => {
  return (
    <div className="p-6 sm:p-10">
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center text-center px-4"
      >
        <div className="relative group w-full max-w-4xl h-96 rounded-lg overflow-hidden shadow-lg">
          {image && (
            <a href={liveUrl || '#'} target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt={`${title} preview`}
                className="transition-transform duration-500 group-hover:scale-105 w-full max-w-md lg:max-w-full object-cover"
              />
            </a>
          )}
        </div>
        <h3 className="text-2xl text-white font-semibold mt-4">{title}</h3>
        <p className="text-gray-300 mt-2 text-sm">{tech}</p>
        <div className="text-white text-sm space-x-4 mt-2">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
              {status} <i className="bi bi-arrow-up-right"></i>
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
              GitHub <i className="bi bi-arrow-up-right"></i>
            </a>
          )}
        </div>
      </motion.section>
    </div>
  );
};

export default Phase1;
