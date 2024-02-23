import React from "react";
import { TbExchange } from "react-icons/tb";

const Switcher = ({ toggleLanguage, currentLanguage }) => {
  return (
    <button
      className="group flex items-center gap-2 hover:text-white ease-linear duration-100 font-poppins text-[#80A4ED] font-semibold text-base transition-colors"
      onClick={toggleLanguage}
    >
      {currentLanguage === "en" ? "Spanish" : "English"}
      <TbExchange className="group-hover:rotate-180 duration-700 text-white group-hover:text-[#80A4ED] ease-in-out" size={19}/>
    </button>
  );
};

export default Switcher;
