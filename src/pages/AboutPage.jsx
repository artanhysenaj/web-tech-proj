import React from 'react'

const AboutPage = (props)=>{
return(
<>
  
  <h1 className="text-center text-5xl mt-[200px] mb-[75px] font-bold text-white">
    About Us
  </h1>

  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-around gap-9 mt-[80px] mb-[180px]">
    <div>
      <h1 className="text-3xl text-white pb-[10px] mt-9 font-bold text-center md:text-left">
        JavaScript
      </h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit placeat dolore est velit, unde culpa aliquid fuga saepe quidem aliquam!</p>
    </div>
    <div>
    
      <h1 className="text-3xl text-white pb-[10px] mt-9 font-bold text-center md:text-left">
        ReactJs
      </h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit placeat dolore est velit, unde culpa aliquid fuga saepe quidem aliquam!</p>
    </div>
    <div>
      
      <h1 className="text-3xl text-white pb-[10px] mt-9 font-bold text-center md:text-left">
        ExpressJs
      </h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit placeat dolore est velit, unde culpa aliquid fuga saepe quidem aliquam!</p>
    </div>
    <div>
      
      <h1 className="text-3xl text-white pb-[10px] mt-9 font-bold text-center md:text-left">
        NodeJs
      </h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit placeat dolore est velit, unde culpa aliquid fuga saepe quidem aliquam!</p>
    </div>
  </div>

  <div>
  <section className="text-gray-700 body-font relative">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          Contact Us
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-white">
          For all enquiries, please email us using the form below
        </p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500  outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
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

