import React from "react";
import Layout from "./Layout";
import perfil from "../assets/images/hero.webp";
import { Button } from "@material-tailwind/react";
import { Link } from "react-scroll";
import { IconButton } from "@material-tailwind/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { DiReact, DiJsBadge, DiGit } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import wave from "../assets/images/waving.png";
import { useLanguage } from '../LanguageContext';

const Hero = () => {

const { translations } = useLanguage();

  return (
    <Layout id={"home"} className={"flex flex-col"}>
      <div className="h-fit lg:h-screen flex flex-col-reverse lg:flex-row lg:items-center justify-center pt-[5.5rem] lg:pt-14">
        <div className="w-full lg:w-1/2 font-poppins">
          <div className="mb-2">
            <h1 className="text-white text-[40px] lg:text-[55px] leading-tight font-bold text-center lg:text-start mt-6">
              Front-end Developer
              <img
                className="inline w-11 lg:w-14 mx-3 mb-2"
                loading="lazy"
                src={wave}
                alt=""
              />
            </h1>
          </div>

          <p className="text-white text-center lg:text-start text-base font-mulish mx-1 mt-6 mb-10 leading-normal lg:w-[90%] tracking-wide">
            {translations.hero.description} 📍
          </p>

          <div className="w-full flex justify-center items-center lg:justify-start gap-5">
            <Link
              className="rounded-full"
              to="contact"
              duration={1300}
              smooth={true}
            >
              <Button className="min-w-36 btn py-4 px-8 capitalize text-base font-medium font-poppins rounded-full text-center">
                {translations.hero.btn}
              </Button>
            </Link>
            <IconButton
              size="md"
              className="rounded-full text-4xl bg-transparent"
            >
              <a
                href="https://github.com/estebanPelutiero"
                target="_blank"
                rel="noopener noreferer"
              >
                <FaGithub />
              </a>
            </IconButton>
            <IconButton
              size="md"
              className="rounded-lg text-4xl bg-transparent"
            >
              <a
                href="https://www.linkedin.com/in/estebanpelutiero/"
                target="_blank"
                rel="noopener noreferer"
              >
                <FaLinkedin />
              </a>
            </IconButton>
          </div>
        </div>

        <figure className="lg:w-1/2 flex items-center justify-center mb-6 lg:mb-0">
          <img
            className="w-[80%] lg:w-[65%] morphBorder morph border-[2px] border-gray"
            src={perfil}
            loading="lazy"
            alt="Esteban Pelutiero Portfolio | Frontend Developer"
          />
        </figure>
      </div>

      <div className="lg:w-2/3 lg:-mt-6 mt-20">
        <article className="flex flex-col lg:flex-row items-center gap-8">
          <h2 className=" text-purple text-xl font-poppins font-semibold uppercase text-center lg:text-start py-3 lg:pr-6 lg:py-1 border-white/50 border-y-[1px] lg:border-y-0 lg:border-r-[1px]">
            {translations.hero.tech}
          </h2>
          <div className="flex items-center gap-4 lg:gap-8">
            <DiReact className="cursor-pointer hover:-translate-y-1 duration-100 ease-in-out" title="React" color="white" size={60} />
            <SiTailwindcss className="cursor-pointer hover:-translate-y-1 duration-100 ease-in-out" title="Tailwind" color="white" size={55} />
            <DiGit className="cursor-pointer hover:-translate-y-1 duration-100 ease-in-out" title="Git" color="white" size={60} />
            <DiJsBadge className="cursor-pointer hover:-translate-y-1 duration-100 ease-in-out" title="JavaScript" color="white" size={40} />
            <FaFigma className="cursor-pointer hover:-translate-y-1 duration-100 ease-in-out" title="Figma" color="white" size={42} />
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default Hero;
