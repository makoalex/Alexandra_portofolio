import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();
  emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  
  const showToastMessage = () => {
    const content = "Message Sent!";
    const options = {
      position: toast.POSITION.TOP_RIGHT,
    };
    toast.success(content, options);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_xr60byh",
        "template_sc3hy2n",
        {
          name: form.current.name.value,
          email: form.current.email.value,
          message: form.current.message.value,
        },
      )
      .then(
        (result) => {
          console.log(result.text);
          showToastMessage();
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <>
      <section className=" py-16 section" id="contact">
        <div className="mx-auto container">
          <div className="flex flex-col lg:flex-row">
            {/* text */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="flex-1 flex justify-start items-center"
            >
              <div>
                <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                  Find Me Here
                </h4>
                <h2 className="text-[45px] lg:text-[90px] leading-none mb-11">
                  Let's Work <br />
                  Together<span className="text-accent">!</span>
                </h2>
              </div>
            </motion.div>
            {/* form */}
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true }}
              className="flex-1 border rounded-xl flex flex-col gap-y-6 pb-16 p-6 items-start"
            >
              <input
                required={true}
                name="name"
                type="text"
                placeholder="Your Name"
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              />
              <input
                required={true}
                name="email"
                type="text"
                placeholder="Your Email"
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              />
              <textarea
                required={true}
                name="message"
                placeholder="Your Message"
                className="bg-transparent resize-none mb-12 border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              ></textarea>
              <button className="button-header btn-sm btn mb-7 bottom-0 h-12">
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
