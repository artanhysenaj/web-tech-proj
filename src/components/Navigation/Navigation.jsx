import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFaceSmileWink } from "@fortawesome/free-solid-svg-icons";
import NavMobile from "./NavComponents/NavMobile";
import NavItem from "./NavComponents/NavItem";
import Logo from "./../UI/Logo/Logo";
import { useAuthContext } from "../../store/AuthContext/AuthContext";
import { useCallback } from "react";
import Button from "../UI/Button/Button";
import NavUserDropDown from "./NavComponents/NavUserDropDown";
import { Dropdown } from "flowbite-react";
import { languages } from "../../data/helperData";
import { toast } from "react-toastify";
const Navigation = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const { authenticated } = useAuthContext();
  const navigate = useNavigate();

  const onCloseMobileNavHandler = useCallback(
    () => setShowMobileNav(false),
    []
  );
  const onOpenMobileNavHandler = () => setShowMobileNav(true);

  const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      const resData = await response.json();
      toast(resData.joke);
    } else {
      toast("Something went wrong");
    }
  };

  return (
    <nav className="relative w-full h-full sm:h-[70px] flex justify-between items-center z-[98]">
      <Logo />

      <ul className="hidden md:flex md:gap-4">
        <NavItem to="/" routeName="Home" />
        <NavItem to="/blog" routeName="Blog" />
        <Dropdown label="Languages" inline={true}>
          {languages.map((language, index) => (
            <Dropdown.Item
              key={index}
              onClick={() =>
                navigate({
                  pathname: `/languages/${language}`,
                  params: { language },
                })
              }
            >
              {language}
            </Dropdown.Item>
          ))}
        </Dropdown>
        <NavItem to="/about" routeName="About" />
      </ul>

      {authenticated && (
        <div className="flex gap-4">
          <Button className="self-end" variant="outline" onClick={getDadJoke}>
            <FontAwesomeIcon icon={faFaceSmileWink} className="text-2xl mr-2" />
            Dad Joke
          </Button>
          <NavUserDropDown />
        </div>
      )}

      {!authenticated && (
        <>
          <FontAwesomeIcon
            icon={faBars}
            className="mr-2 text-xl sm:text-3xl md:hidden"
            onClick={onOpenMobileNavHandler}
          />

          <NavMobile
            showMobileNav={showMobileNav}
            closeNav={onCloseMobileNavHandler}
          />
          <ul className="hidden md:flex gap-2">
            <Button variant="outline">
              <Link to="/login">Sign-In</Link>
            </Button>
            <Button>
              <Link to="/register">Sign-Up</Link>
            </Button>
          </ul>
        </>
      )}
    </nav>
  );
};

export default Navigation;
