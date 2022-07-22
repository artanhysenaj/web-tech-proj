import React from "react";
import { Dropdown, Avatar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../store/AuthContext/AuthContext";
const NavUserDropDown = (props) => {
  const { user, logout } = useAuthContext();
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
        <Link to="/dashboard">Dashboard</Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/settings">Settings</Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/my-snippets">MySnippets</Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
    </Dropdown>
  );
};

export default NavUserDropDown;
