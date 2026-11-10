import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-6 flex justify-center items-center gap-6">
      <a
        href="https://x.com/soshte60598"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (formerly Twitter)"
        className="text-secondary hover:text-white transition-colors duration-200"
      >
        <FaXTwitter size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/mrunal-soshte"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-secondary hover:text-white transition-colors duration-200"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://www.instagram.com/mrunu2204?igsh=MTdvdmplODY5ZWhpbw=="
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-secondary hover:text-white transition-colors duration-200"
      >
        <FaInstagram size={24} />
      </a>
    </footer>
  );
};

export default Footer;