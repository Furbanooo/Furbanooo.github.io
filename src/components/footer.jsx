import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white text-center py-4 fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full">
      &copy; {currentYear} | Portfolio by Furband GBAGUIDI
    </footer>
  );
};

export default Footer;
