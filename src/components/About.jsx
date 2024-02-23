import React from "react";
import Layout from "./Layout";
import AboutPic from "../assets/images/about.jpg";
import { useLanguage } from '../LanguageContext';

const About = () => {

  const { translations } = useLanguage();

  return (
    <Layout
      id={"about"}
      className={"flex flex-col lg:flex-row items-center my-28 pt-20 lg:pt-14"}
    >
      <figure className="flex justify-center lg:h-auto lg:w-1/2 mb-8 lg:mb-0">
        <img
          loading="lazy"
          className="lg:w-[80%] lg:h-[24rem] w-full rounded-2xl object-cover"
          src={AboutPic}
          alt="Work desktop with laptop and a cup o coffee"
        />
      </figure>
      <div className="w-full lg:w-1/2">
        <h2 className="text-purple text-xl font-poppins font-semibold uppercase mb-4 text-center lg:text-start">
          {translations.about.title} 💻
        </h2>
        <h3 className="text-2xl text-gray-50 font-poppins font-bold mb-6 text-center lg:text-start">
          {translations.about.subtitle} 📍
        </h3>
        <p className="text-white font-mulish text-[17px] leading-7 text-center lg:text-start">
          {translations.about.description}
        </p>
      </div>
    </Layout>
  );
};

export default About;
