import React from "react";
import Easy from "../../assets/easy.svg";
import People from "../../assets/people.svg";
import Book from "../../assets/book.svg";
import Codee from "../../assets/codee.svg";
const Content = (props) => {
  return (
    <div className="shadow-[0_10px_60px_1px_rgba(0,0,0,0.3)]  bg-gradient-to-br from-[#e33e3e] to-[#614925] mb-20 rounded-lg p-10 mt-[100px]">
      <div className="flex justify-center mt-[5px] items-center">
        <div className="ml-4">
          <img
            src={Codee}
            alt="Logo"
            className="mx-auto sm:mx-[320px]  md:mx-[180px] lg:mx-[100px]  mb-[-20px]"
            style={{
              resizeMode: "contain",
              height: 50,
              width: 50,
            }}
          />
          <h2 className="text-4xl font-bold in-line mb-[50px] mt-10 text-black text-center md:text-left">
            Why choose us ?
          </h2>
        </div>
      </div>
      <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-around gap-4 md:gap-9 mt-[10px] mb-[50px] text-black">
        <div>
          <img
            src={Easy}
            alt="Logo"
            className="mx-auto sm:mx-[320px]  md:mx-[180px] lg:mx-[100px] mb-[-20px]"
            style={{
              resizeMode: "contain",
              height: 50,
              width: 50,
            }}
          />
          <p className="text-3xl pb-[10px] mt-9 font-bold text-center md:text-left">
            Easy to use
          </p>
          <p className="mx-4 md:mx-auto">
            Our site is an easy site to use and surf on, so it doesn't take much
            time to get used to it. It can also be used by people without
            experience.
          </p>
        </div>
        <div>
          <img
            src={People}
            alt="Logo"
            className="mx-auto sm:mx-[320px]  md:mx-[180px] lg:mx-[100px] ntent-center justify-center mb-[-20px]"
            style={{
              resizeMode: "contain",
              height: 50,
              width: 50,
            }}
          />
          <p className="text-3xl pb-[10px] mt-9 font-bold text-center md:text-left">
            Large community
          </p>
          <p className="mx-4 md:mx-auto">
            The software community grows and expands every day, more and more
            productivity increases in the world of technology, and this is our
            goal.{" "}
          </p>
        </div>
        <div>
          <img
            src={Book}
            alt="Logo"
            className="mx-auto sm:mx-[320px]  md:mx-[180px] lg:mx-[100px]  mb-[-20px]"
            style={{
              resizeMode: "contain",
              height: 50,
              width: 50,
            }}
          />
          <p className="text-3xl pb-[10px] mt-9 font-bold text-center md:text-left">
            Resources, tools
          </p>
          <p className="mx-4 md:mx-auto">
            The source of information here is very wide and for this it becomes
            a very used platform because productive information is distribute
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
