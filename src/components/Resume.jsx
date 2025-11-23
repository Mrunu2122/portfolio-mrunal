'use client';

import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <section
      className="py-24 px-6 max-w-4xl mx-auto text-white"
      id="resume"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Resume
      </motion.h2>

      <motion.div
        className="text-center bg-[#1a1a2e] rounded-xl p-10 shadow-lg border border-[#2d2d4a]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Here's a quick look at my resume. You can download It from the given button.
        </p>

        <a
          href="/MrunalSoshte-Resume.pdf"
          download
          className="inline-block bg-gradient-to-r from-[#915EFF] to-[#7b4bf4] hover:from-[#7b4bf4] hover:to-[#915EFF] text-white text-lg font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-xl"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Resume;
