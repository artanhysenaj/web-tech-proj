import React from "react";
import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
import { Breadcrumb } from "flowbite-react";
import { useEffect } from "react";
import { useState } from "react";
const Dashboard = (props) => {
  const { pathname } = useLocation();
  const [breadcrumTrail, setBreadcrumTrail] = useState([]);
  const navigation = [
    { name: "My Profile", to: "my-profile" },
    { name: "My Snippets", to: "my-snippets" },
  ];
  useEffect(() => {
    setBreadcrumTrail(pathname.split("/").filter((item) => item !== ""));
  }, [pathname]);
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-10 md:h-16 ">
        <div className="flex items-center h-full w-full">
          <div className="h-full w-full shadow-2xl rounded-md bg-red-500/10">
            <div className=" flex items-center justify-center space-x-2  h-full">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className="text-white border-b-2 border-transparent hover:border-gray-100 md:px-2 md:py-4"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      <header className="mt-2 md:mt-4">
        <div className="max-w-7xl mx-auto ">
          <Breadcrumb aria-label="Default breadcrumb example">
            {breadcrumTrail.map((item, index) => (
              <Breadcrumb.Item key={index}>
                <Link
                  className="capitalize text-sm md:text-base"
                  to={`${item === "dashboard" ? `/${item}` : `${item}`}`}
                >
                  {item}
                </Link>
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </div>
      </header>
      <main className="mt-4 md:mt-10">
        <div className=" sm:px-0">
          <Outlet context={{ ...props }} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
