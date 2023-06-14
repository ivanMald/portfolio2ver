import React from "react";
import Image from "../assets/avatar.jpg";
import { FaGithub, FaYoutTube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import {fadeIn} from '../variants'

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div>
          <div> 
            <h1>Ivan <span>Maldonado</span></h1>
          </div>
          <div className="mb-6 text-[36px] lg:text[60px] font-secondary font-semibold uppercase leading-[1]">

          <span className=" text-white mr-4">Y soy </span>
          <TypeAnimation sequence={[
            'Desarrollador',
            2000,
            'Diseñador',
            2000,
            'Frelancer',
            2000,
          ]}
          speed={50}
          className="text-accent"
          wrapper="span"
          repeat={Infinity}
          />

          </div>
         
          <div>
            <img className="rounded-full" src={Image} alt=""></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
