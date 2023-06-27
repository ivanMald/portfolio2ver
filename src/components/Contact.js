import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:mt-[350px] ">
          <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amounto: 0.3 }}
          className="flex-1 flex justify-start items-center">
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">Ponete en contacto</h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none  mb-12">
                Trabajemos <br /> juntos
              </h2>
            </div>
          </motion.div>
          <motion.form
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amounto: 0.3 }}
          className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start lg:mt-96">
            <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all " type="text" placeholder="Tu Nombre"></input>
            <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all " type="text" placeholder="Tu email"></input>
            <textarea className=" bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12" placeholder="Mensaje"></textarea>
            <button className="btn btn-lg">Enviar</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
