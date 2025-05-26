import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const About = () => {
  return (
    <div className='bg-gradient-to-t from-[#0f172a] via-[#15354a] to-[#0f172a] py-16 px-4'>
      {/* About Me Section */}
      <motion.section
        id='about'
        variants={fadeIn}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='w-full max-w-4xl mx-auto border-2 border-gray-300 rounded-lg text-center py-10 px-4 sm:px-6 mb-10 bg-[#1f2937]'
      >
        <h2 className='text-white text-3xl font-semibold mb-6'>About me</h2>
        <p className='text-gray-200 text-base sm:text-lg leading-relaxed'>
        As a front-end developer, I’m passionate about turning ideas into reality. I enjoy building meaningful digital experiences using
         efficient tools to create websites that are simple, responsive, and interactive. With a strong focus on responsive design,
          I ensure my work is accessible to all users, no matter what device they’re on.
        </p>
      </motion.section>

      {/* Stack & Tools Section */}
      <motion.section
        variants={fadeIn}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='w-full max-w-4xl mx-auto text-center bg-[#1f2937] border-2 border-gray-300 rounded-lg py-10 px-4 sm:px-6'
      >
        <h2 className='text-white text-3xl font-semibold'>Stack & Tools</h2>
        <h4 className='text-gray-300 text-lg mt-2 mb-6'>Check out what I have in my arsenal</h4>
        <div className='flex flex-wrap justify-center gap-4 text-white text-lg'>
          <p><i className='bi bi-github'></i> Git & GitHub</p>
          <p><i className='fa-brands fa-html5'></i> HTML</p>
          <p><i className='fa-brands fa-react'></i> React</p>
          <p><i className='fa-brands fa-bootstrap'></i> Bootstrap</p>
          <p><i className='fa-brands fa-js'></i> JavaScript</p>
          <p><i className='fa-brands fa-figma'></i> Figma</p>
          <p><i className='fa-brands fa-visual-studio-code'></i> VS Code</p>
        </div>
      </motion.section>
    </div>
  );
};

export default About;