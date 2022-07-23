import React from 'react'
import Logo from "../components/UI/Logo/Logo";
import Easy from "../assets/easy.svg"
import People from "../assets/people.svg"
import Book from "../assets/book.svg"
import Codee from "../assets/codee.svg"

const AboutPage = (props)=>{
  
return(
<>  
  <div className="flex justify-center items-center">
    <Logo />
      <div className="ml-4">
        <h2 className="text-6xl font-bold text-white in-line">About Us</h2>
      </div>
  </div>
  <div className="flex justify-center mt-[100px] items-center">
    <div className="ml-4">
      <h2 className="text-4xl font-bold text-white inline">What do we do?</h2>
    </div>
  </div>
  <p className="mt-[50px] mx-4 md:mx-auto">We are a platform that you can use every day (Errday).
                            We offer code snippets and everything that is beautiful in the world of programming.
                            </p>
<div class="shadow-[0_10px_60px_1px_rgba(0,0,0,0.3)]  bg-gradient-to-br from-[#e33e3e] to-[#614925] mb-20 rounded-lg p-10 mt-[100px]" >
  <div className="flex justify-center mt-[5px] items-center">
    <div className="ml-4">
    <img src={Codee} alt="Logo" className="mx-[180px] sm:mx-[320px]  md:mx-[180px] lg:mx-[100px] ntent-center justify-center mb-[-20px]"
       style={{
        resizeMode: "contain",
        height: 50,
        width: 50
      }}/>
      <h2 className="text-4xl font-bold in-line mb-[50px] mt-10 text-black text-center md:text-left">Why choose us ?</h2>
    </div>
  </div>
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-around gap-9 mt-[10px] mb-[50px] text-black">
    <div>
    <img src={Easy} alt="Logo" className="mx-[180px] sm:mx-[320px]  md:mx-[180px] lg:mx-[100px] ntent-center justify-center mb-[-20px]"
       style={{
        resizeMode: "contain",
        height: 50,
        width: 50
      }}/>
      <p className="text-3xl pb-[10px] mt-9 font-bold text-center md:text-left">
      Easy to use</p>
      <p className="mx-4 md:mx-auto">
      Our site is an easy site to use and surf on, so it doesn't take much time to get used to it. It can also be used by people without experience.      </p>
    </div>
    <div>
    <img src={People} alt="Logo" className="mx-[180px] sm:mx-[320px]  md:mx-[180px] lg:mx-[100px] ntent-center justify-center mb-[-20px]"
       style={{
        resizeMode: "contain",
        height: 50,
        width: 50
      }}/>
      <p className="text-3xl pb-[10px] mt-9 font-bold text-center md:text-left">
      Large community</p>
      <p className="mx-4 md:mx-auto">
      The software community grows and expands every day, more and more productivity increases in the world of technology, and this is our goal.      </p>
    </div>
    <div>
    <img src={Book} alt="Logo" className="mx-[180px] sm:mx-[320px]  md:mx-[180px] lg:mx-[100px] ntent-center justify-center mb-[-20px]"
       style={{
        resizeMode: "contain",
        height: 50,
        width: 50
      }}/>
      <p className="text-3xl pb-[10px] mt-9 font-bold text-center md:text-left">
      Resources, tools</p>
      <p className="mx-4 md:mx-auto">
      The source of information here is very wide and for this it becomes a very used platform because productive information is distribute      </p>
    </div>
  </div>
</div>
  <div className="flex justify-center mt-[100px] items-center">
    <div className="ml-4">
      <h2 className="text-4xl font-bold text-white in-line">Web languages</h2>
    </div>
  </div>
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-around gap-9 mt-[10px] mb-[180px]">
    <div>
      <ol className="text-3xl text-white pb-[10px] mt-9 font-bold text-center md:text-left hover:text-indigo-300">
      <a href="#" className="">
        JavaScript
      </a>
      </ol>
      <p className="mx-4 md:mx-auto">
      JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. 
      </p>
    </div>
    <div>
      <ol className="text-3xl text-white pb-[10px] mt-9 font-bold text-center md:text-left hover:text-indigo-300">
      <a href="#" className="">
        ReactJs
      </a>
      </ol>
      <p className="mx-4 md:mx-auto">
      ReactJS is JavaScript library used for building reusable UI components. According to React official documentation, following is the definition − React is a library for building composable user interfaces.
      </p>
    </div>
    <div>
      <ol className="text-3xl text-white pb-[10px] mt-9 font-bold text-center md:text-left hover:text-indigo-300">
      <a href="#" className="">
        TypeScript
      </a>
      </ol>
      <p className="mx-4 md:mx-auto">
      TypeScript is a programming language developed and maintained by Microsoft.    </p>
    </div>
    <div>
      <ol className="text-3xl text-white pb-[10px] mt-9 font-bold text-center md:text-left hover:text-indigo-300">
      <a href="#" className="">
        Java
      </a>
      </ol>
      <p className="mx-4 md:mx-auto">
      Java is an object-oriented programming language that produces software for multiple platforms. When a programmer writes a Java application, the compiled code.  
      </p>
    </div>
    <div>
      <ol className="text-3xl text-white pb-[10px] mt-9 font-bold text-center md:text-left hover:text-indigo-300">
      <a href="#" className="">
        VueJs
      </a>
      </ol>
      <p className="mx-4 md:mx-auto">
      VueJS is an open source progressive JavaScript framework used to develop interactive web interfaces. It is one of the famous frameworks used to simplify web development.
      </p>
    </div>
    <div>
      <ol className="text-3xl text-white pb-[10px] mt-9 font-bold text-center md:text-left hover:text-indigo-300">
      <a href="#" className="">
        Angular
      </a>
      </ol>
      <p className="mx-4 md:mx-auto">
      Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript.      </p>
    </div>
    <div>
      <ol className="text-3xl text-white pb-[10px] mt-9 font-bold text-center md:text-left hover:text-indigo-300">
      <a href="#" className="">
        Rust
      </a>
      </ol>
      <p className="mx-4 md:mx-auto">
      Rust is the term we use to describe red iron oxides produced when ferrous metals corrode. Rust is the common name for the chemicals that result when iron reacts with oxygen and water.
      </p>
    </div>
    <div>
      <ol className="text-3xl text-white pb-[10px] mt-9 font-bold text-center md:text-left hover:text-indigo-300">
      <a href="#" className="">
        Ruby
      </a>
      </ol>
      <p className="mx-4 md:mx-auto">
      Ruby is an open source, interpreted, object-oriented programming language created by Yukihiro Matsumoto, who chose the gemstone's name to suggest "a jewel of a language."      </p>
    </div>
    <div>
      <ol className="text-3xl text-white pb-[10px] mt-9 font-bold text-center md:text-left hover:text-indigo-300">
      <a href="#" className="">
        ExpressJs
      </a>
      </ol>
      <p className="mx-4 md:mx-auto">
      Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.
      </p>
    </div>
    <div>
      <ol className="text-3xl text-white pb-[10px] mt-9 font-bold text-center md:text-left hover:text-indigo-300">
      <a href="#" className="">
        HTML
      </a>
      </ol>
      <p className="mx-4 md:mx-auto">
      HTML (HyperText Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs.      </p>
    </div>
    <div>
      <ol className="text-3xl text-white pb-[10px] mt-9 font-bold text-center md:text-left hover:text-indigo-300">
      <a href="#" className="">
        CSS
      </a>
      </ol>
      <p className="mx-4 md:mx-auto">
      Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML).      </p>
    </div>
    <div>
      <ol className="text-3xl text-white pb-[10px] mt-9 font-bold text-center md:text-left hover:text-indigo-300">
      <a href="#" className="">
        JSON
      </a>
      </ol>
      <p className="mx-4 md:mx-auto">
      JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax.      </p>
    </div>
  </div>

  <div>
  <section className="sm:mx-2 md:mx-auto text-gray-700 body-font relative">
    <div className="sm:mx-2 md:mx-auto container px-5 py-24 mx-auto p-2 sm:p-4 shadow-[0_10px_60px_1px_rgba(0,0,0,0.3)]  bg-gradient-to-br from-[#e33e3e] to-[#614925] mb-20 rounded-lg">
    <div className="flex justify-center items-center">
          <Logo />
          <div className="ml-4">
            <h2 className="text-4xl font-bold text-white in-line">Contact Us</h2>
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
              <label htmlFor="name" className="leading-7 text-sm text-white font-bold">
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

</>
) 
}

export default AboutPage

