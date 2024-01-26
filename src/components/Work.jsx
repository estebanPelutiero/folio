import React from "react";
import Layout from "./Layout";
import Garden from "../assets/images/clean-garden.png";
import Oss from '../assets/images/oss-web.png';
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

        <div className="group flex flex-col-reverse gap-8 lg:flex-row items-center justify-between rounded-lg px-4 py-6 lg:py-4 bg-black/20 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-white/50">
          <article className="lg:w-[40%] text-white font-poppins">
            <div className="w-full flex flex-col items-center text-center">
              <div className="mb-5">
                <h3 className="text-xl uppercase font-semibold text-purple">
                  Clean & garden
                </h3>
              </div>

              <div className="lg:w-[80%] mb-8">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  amet, assumenda eligendi, culpa veritatis dolor blanditiis enim
                  dicta perferendis fugiat voluptate iusto explicabo libero harum
                  ea? Illo eveniet culpa eaque.
                </p>
              </div>

              <div className="w-full lg:w-[70%] flex items-center justify-around">
                <button className="group/btn py-2 px-4 border-l border-r border-purple rounded-lg ">
                  <a className="flex items-center gap-2 text-sm" href="#">
                    Code <FiGithub className="group-hover/btn:-translate-y-0.5 ease-in-out duration-[200ms]" size={16} color="white" />
                  </a>
                </button>
                <button className="group/btn py-2 px-4 border-l border-r border-purple rounded-lg">
                  <a className="flex items-center gap-2 text-sm" href="#">
                    Visit <MdOutlineKeyboardArrowRight className="-mr-2 -ml-1 group-hover/btn:translate-x-0.5 ease-in-out duration-[200ms]" size={20} color="white" />
                  </a>
                </button>
              </div>
            </div>

          </article>

          <figure className="lg:w-[53%] rounded-lg max-h-60 lg:max-h-80 overflow-hidden">
            <img
              className="group-hover:-translate-y-[84.9%] ease-linear duration-[6000ms]"
              src={Garden}
              alt="Clean & Garden | Servicio de limpieza integral"
            />
          </figure>
        </div>

        {/* WORK 2 */}

        <div className="group flex flex-col-reverse gap-8 lg:flex-row-reverse items-center justify-between rounded-lg px-4 py-6 lg:py-4 bg-black/20 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-white/50">
          <article className="lg:w-[40%] text-white font-poppins">
            <div className="w-full flex flex-col items-center text-center">
              <div className="mb-5">
                <h3 className="text-xl uppercase font-semibold text-purple">
                  Oss web studio
                </h3>
              </div>

              <div className="lg:w-[80%] mb-8">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  amet, assumenda eligendi, culpa veritatis dolor blanditiis enim
                  dicta perferendis fugiat voluptate iusto explicabo libero harum
                  ea? Illo eveniet culpa eaque.
                </p>
              </div>

              <div className="w-full lg:w-[70%] flex items-center justify-around">
                <button className="group/btn py-2 px-4 border-l border-r border-purple rounded-lg ">
                  <a className="flex items-center gap-2 text-sm" href="#">
                    Code <FiGithub className="group-hover/btn:-translate-y-0.5 ease-in-out duration-[200ms]" size={16} color="white" />
                  </a>
                </button>
                <button className="group/btn py-2 px-4 border-l border-r border-purple rounded-lg">
                  <a className="flex items-center gap-2 text-sm" href="#">
                    Visit <MdOutlineKeyboardArrowRight className="-mr-2 -ml-1 group-hover/btn:translate-x-0.5 ease-in-out duration-[200ms]" size={20} color="white" />
                  </a>
                </button>
              </div>
            </div>

          </article>

          <figure className="lg:w-[53%] rounded-lg max-h-60 lg:max-h-80 overflow-hidden">
            <img
              className="group-hover:-translate-y-[84.9%] ease-linear duration-[6000ms]"
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
