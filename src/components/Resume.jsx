'use client';

import { motion } from 'framer-motion';
import { FiDownload, FiAward } from 'react-icons/fi';

const Resume = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-white" id="resume">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-[#7b4bf4]">
          My Resume
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Explore my professional journey and accomplishments.
        </p>
      </motion.div>

      {/* Download Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 md:p-10 text-center border border-[#2d2d4a] relative overflow-hidden group"
      >
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#7b4bf4] rounded-full opacity-10 group-hover:opacity-20 transition-all duration-500"></div>
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#915EFF] rounded-full opacity-10 group-hover:opacity-20 transition-all duration-500"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#7b4bf4]/20 mb-6 mx-auto">
            <FiAward className="text-3xl text-[#7b4bf4]" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Download My Resume</h3>
          <p className="text-gray-400 text-sm mb-8 max-w-2xl mx-auto">
            Download my resume to explore my professional background and experience.
          </p>
          <a
            href="/MrunalSoshte-Resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#915EFF] to-[#7b4bf4] hover:from-[#7b4bf4] hover:to-[#915EFF] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            <FiDownload className="text-lg" />
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
