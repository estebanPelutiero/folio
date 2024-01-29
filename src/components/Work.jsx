import React from "react";
import Layout from "./Layout";
import Garden from "../assets/images/clean-garden.png";
import Oss from "../assets/images/oss-web.png";
import { FiGithub } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Work = () => {
  return (
    <Layout id={"work"} className={"py-20"}>
      <div className="w-full mb-14">
        <h2 className="text-purple text-xl font-poppins font-semibold uppercase mb-4 text-center lg:text-start">
          Portfolio 👜
        </h2>
        <h3 className="text-2xl text-gray-50 font-poppins font-bold mb-6 text-center lg:text-start">
          Each project is a unique piece of development 🧩
        </h3>
      </div>

      <section className="flex flex-col gap-16">
        {/* WORK 1 */}

        <div className="group flex flex-col-reverse gap-8 lg:flex-row items-center justify-between rounded-lg p-4 bg-black/20 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-white/20">
          <article className="lg:w-[40%] text-white font-poppins">
            <div className="w-full flex flex-col items-center text-center">
              <div className="mb-5">
                <h3 className="text-xl uppercase font-semibold text-purple">
                  Clean & garden
                </h3>
              </div>

              <div className="lg:w-[80%] mb-6">
                <p className="">
                  The design phase focuses on simplicity, employing a clean
                  color palette and intuitive navigation. Imagery, carefully
                  selected to resonate with cleanliness and professionalism,
                  plays a pivotal role. A responsive layout ensures a seamless
                  user experience across various devices.
                </p>
              </div>

              <div className="w-[80%] lg:w-[70%] flex items-center justify-around border-t border-white/10 pt-4">
                <button className="group/btn py-2 px-4 rounded-lg ">
                  <a
                    className="group/anchor flex items-center gap-2 text-sm"
                    href="https://github.com/estebanPelutiero/clean-and-garden"
                    target="_blank"
                    rel="noopener noreferer"
                  >
                    <span className="bg-left-bottom bg-gradient-to-r from-purple to-purple bg-[length:0%_2px] bg-no-repeat group-hover/anchor:bg-[length:100%_2px] transition-all duration-300 ease-out pb-1">
                      Code
                    </span>{" "}
                    <FiGithub
                      className="group-hover/btn:-translate-y-0.5 ease-in-out duration-[200ms] mb-1"
                      size={16}
                      color="white"
                    />
                  </a>
                </button>
                <button className="group/btn py-2 px-4  rounded-lg">
                  <a
                    className="group/anchor flex items-center gap-2 text-sm"
                    href="https://cgarden.com.ar/"
                    target="_blank"
                    rel="noopener noreferer"
                  >
                    <span className="bg-left-bottom bg-gradient-to-r from-purple to-purple bg-[length:0%_2px] bg-no-repeat group-hover/anchor:bg-[length:100%_2px] transition-all duration-300 ease-out pb-1">
                      Visit
                    </span>{" "}
                    <MdOutlineKeyboardArrowRight
                      className="-mr-2 -ml-1 group-hover/btn:translate-x-0.5 ease-in-out duration-[200ms] mb-1"
                      size={20}
                      color="white"
                    />
                  </a>
                </button>
              </div>
            </div>
          </article>

          <figure className="lg:w-[53%] rounded-lg max-h-60 md:max-h-80 overflow-hidden">
            <img
              className="lg:group-hover:-translate-y-[84.9%] ease-in-out duration-[8000ms]"
              src={Garden}
              alt="Clean & Garden | Servicio de limpieza integral"
            />
          </figure>
        </div>

        {/* WORK 2 */}

        <div className="group flex flex-col-reverse gap-8 lg:flex-row items-center justify-between rounded-lg p-4 bg-black/20 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-white/20">
          <article className="lg:w-[40%] text-white font-poppins">
            <div className="w-full flex flex-col items-center text-center">
              <div className="mb-5">
                <h3 className="text-xl uppercase font-semibold text-purple">
                  Oss web studio
                </h3>
              </div>

              <div className="lg:w-[80%] mb-6">
                <p className="">
                  Designing a sleek landing page for a modern digital agency.
                  Emphasizing contemporary aesthetics, it showcases innovation
                  through engaging visuals and intuitive navigation,
                  communicating professionalism and expertise.
                </p>
              </div>

              <div className="w-[80%] lg:w-[70%] flex items-center justify-around border-t border-white/10 pt-4">
                <button className="group/btn py-2 px-4 rounded-lg ">
                  <a
                    className="group/anchor flex items-center gap-2 text-sm"
                    href="https://github.com/estebanPelutiero/oss-web-studio"
                    target="_blank"
                    rel="noopener noreferer"
                  >
                    <span className="bg-left-bottom bg-gradient-to-r from-purple to-purple bg-[length:0%_2px] bg-no-repeat group-hover/anchor:bg-[length:100%_2px] transition-all duration-300 ease-out pb-1">
                      Code
                    </span>{" "}
                    <FiGithub
                      className="group-hover/btn:-translate-y-0.5 ease-in-out duration-[200ms] mb-1"
                      size={16}
                      color="white"
                    />
                  </a>
                </button>
                <button className="group/btn py-2 px-4  rounded-lg">
                  <a
                    className="group/anchor flex items-center gap-2 text-sm"
                    href="https://osswebstudio.tech/"
                    target="_blank"
                    rel="noopener noreferer"
                  >
                    <span className="bg-left-bottom bg-gradient-to-r from-purple to-purple bg-[length:0%_2px] bg-no-repeat group-hover/anchor:bg-[length:100%_2px] transition-all duration-300 ease-out pb-1">
                      Visit
                    </span>{" "}
                    <MdOutlineKeyboardArrowRight
                      className="-mr-2 -ml-1 group-hover/btn:translate-x-0.5 ease-in-out duration-[200ms] mb-1"
                      size={20}
                      color="white"
                    />
                  </a>
                </button>
              </div>
            </div>
          </article>

          <figure className="lg:w-[53%] rounded-lg max-h-60 md:max-h-80 overflow-hidden">
            <img
              className="lg:group-hover:-translate-y-[84.9%] ease-in-out duration-[8000ms]"
              src={Oss}
              alt="Clean & Garden | Servicio de limpieza integral"
            />
          </figure>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
