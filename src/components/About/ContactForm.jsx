import React from "react";
import Logo from "../UI/Logo/Logo";
const ContactForm = (props) => {
  return (
    <div>
      <section className="sm:mx-2 md:mx-auto text-gray-700 relative">
        <div className="sm:mx-2 md:mx-auto container px-5 py-24 mx-auto p-2 sm:p-4 shadow-[0_10px_60px_1px_rgba(0,0,0,0.3)]  bg-gradient-to-br from-[#e33e3e] to-[#614925] mb-20 rounded-lg">
          <div className="flex justify-center items-center">
            <Logo />
            <div className="ml-4">
              <h2 className="text-4xl font-bold text-white in-line">
                Contact Us
              </h2>
            </div>
          </div>
          <div className="flex flex-col text-center w-full mb-12">
            <p className="lg:w-2/3 mx-auto mt-5 leading-relaxed text-white">
              For all enquiries, please email us using the form below
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-white font-bold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="type your name in here"
                    className="w-full py-2 px-3 transition-all text-[#f5f5f5] border-b-2 bg-transparent outline-none  null hover:border-indigo-600"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-white font-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="type your email in here"
                    className="w-full py-2 px-3 transition-all text-[#f5f5f5] border-b-2 bg-transparent outline-none  null hover:border-indigo-600"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-white font-bold"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="type your message in here"
                    className="w-full bg-transparent text-white rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
