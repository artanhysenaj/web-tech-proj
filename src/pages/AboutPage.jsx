import React from "react";

import LanguagesInfo from "../components/About/LanguagesInfo";
import ContactForm from "../components/About/ContactForm";
import Content from "../components/About/Content";

const AboutPage = (props) => {
  const sendContactFormHandler = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="flex justify-center mt-[100px] items-center">
        <div className="ml-4">
          <h2 className="text-4xl font-bold text-white inline">
            What do we do?
          </h2>
        </div>
      </div>
      <p className="mt-[50px] mx-4 md:mx-auto">
        We are a platform that you can use every day (Errday). We offer code
        snippets and everything that is beautiful in the world of programming.
      </p>

      <Content />

      <div className="flex justify-center mt-[100px] items-center">
        <div className="ml-4">
          <h2 className="text-4xl font-bold text-white in-line">
            Web languages
          </h2>
        </div>
      </div>

      <LanguagesInfo />

      <ContactForm onSubmit={sendContactFormHandler} loading={false} />
    </>
  );
};

export default AboutPage;
