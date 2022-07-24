import React from "react";
import { Dropdown, Avatar } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../store/AuthContext/AuthContext";
import { languages } from "../../../data/helperData";
const NavUserDropDown = (props) => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  return (
    <Dropdown
      label={
        <Avatar
          alt="User settings"
          img={user?.avatar_urls?.[96]}
          rounded={true}
        />
      }
      arrowIcon={true}
      inline={true}
      placement="bottom-end"
    >
      <Dropdown.Header>
        <span className="block text-sm">{user?.fullName}</span>
        <span className="block truncate text-sm font-medium">
          {user?.email}
        </span>
      </Dropdown.Header>

      <Dropdown.Item>
        <Link to="/">Home</Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/blog">Blog</Link>
      </Dropdown.Item>
      <Dropdown.Item>
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
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/about">About</Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>
        <Link to="/dashboard/my-profile">Dashboard</Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/dashboard/my-profile">My Profile</Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/dashboard/my-snippets">My Snippets</Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
    </Dropdown>
  );
};

export default NavUserDropDown;
