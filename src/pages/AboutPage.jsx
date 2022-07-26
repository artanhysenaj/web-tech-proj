import React from "react";
import emailjs from "emailjs-com";
import LanguagesInfo from "../components/About/LanguagesInfo";
import ContactForm from "../components/About/ContactForm";
import Content from "../components/About/Content";
import { useState } from "react";
import { toast } from "react-toastify";

const AboutPage = (props) => {
  const [loadingEmail, setLoadingEmail] = useState(false);
  const sendContactFormHandler = (values) => {
    setLoadingEmail(true);
    console.log(values);
    emailjs
      .sendForm(
        "errday-email-service",
        "errday-email-template",
        values,
        "k29O9bNxoEmMoehUK"
      )
      .then(() => toast.success("Email sent successfully"))
      .catch((err) =>
        toast.error(err.message || err.text || "Something went wrong")
      )
      .finally(() => setLoadingEmail(false));
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

      <ContactForm onSubmit={sendContactFormHandler} loading={loadingEmail} />
    </>
  );
};

export default AboutPage;
