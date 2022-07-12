import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "../UI/Button/Button";
const Banner = (props) => {
  const navigate = useNavigate();
  return (
    <header className="my-8 mx-2 sm:block flex flex-col items-center">
      <h1 className="text-[#fff5f5] sm:text-[1.5rem]">Errday Snippets</h1>
      <p className="text-[#fed7d7] sm:text-base text-xs mb-2">
        Create or Browse snippets you use or see everyday
      </p>
      <Button
        onClick={() => navigate("/login")}
        label="login"
        variant="outline"
      >
        <FontAwesomeIcon className="ml-2" icon={faSignInAlt} />
      </Button>
    </header>
  );
};

export default Banner;
