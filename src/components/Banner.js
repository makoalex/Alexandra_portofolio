import React from "react";
import Avatar from "../assets/avatar2.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Pdf from "../public/resume1.pdf"

export default function test() {
  
  return (
    <section
      className="min-h-[70vh] section lg:min-h-[78vh] flex items-center  "
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:mt-24 lg:flex-row lg:items-center lg:gap-x-12">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once:true}}
            className="flex-1 text-center font-secondary lg:text-left "
          >
            <h1 className="text-[35px]   font-bold leading-[0.8] lg:text-[55px] ">
              ALEXANDRA <span>MACOVEI</span>
            </h1>
            <div className="mb-6 text-[30px] lg:text-[50px] font-secondary uppercase leading-[1] ">
              <span className=" text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "CSS addict",
                  2000,
                  "Geek :)",
                  2500,
                ]}
                speed={40}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 text-[20px] mx-w-lg mx-auto lg:mx-0">
              Ahoy! I have embarked on an extensive exploratory journey through the realms of Technology! Here
              is where I have discovered my passion for  crafting seamless digital experiences and delving
               into the intricacies of Full Stack Development!
                
            </p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true}}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a href={Pdf} download>
                <button className="button-header btn-sm btn">
                  Download my CV
                </button>
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.5 }}
              className="flex text-[20px]  gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://github.com/makoalex"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/alexandra-macovei-a444a410a/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true}}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[420px]"
          >
            <img src={Avatar} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
