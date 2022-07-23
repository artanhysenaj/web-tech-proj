import React from "react";
import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
import { Breadcrumb } from "flowbite-react";
import { useEffect } from "react";
import { useState } from "react";
const Dashboard = () => {
  const { pathname } = useLocation();
  const [breadcrumTrail, setBreadcrumTrail] = useState([]);
  const navigation = [
    { name: "Dashboard", to: "/dashboard" },
    { name: "Settings", to: "settings" },
    { name: "My Snippets", to: "my-snippets" },
  ];
  useEffect(() => {
    setBreadcrumTrail(pathname.split("/").filter((item) => item !== ""));
  }, [pathname]);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16 ">
        <div className="flex items-center h-full w-full">
          <div className="hidden md:block h-full w-full shadow-2xl rounded-md bg-red-500/10">
            <div className="ml-10 flex items-center justify-center space-x-2  h-full">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className="text-white border-b-2 border-transparent hover:border-gray-100 px-2 py-4"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      <header className=" mt-4">
        <div className="max-w-7xl mx-auto ">
          <Breadcrumb aria-label="Default breadcrumb example">
            {breadcrumTrail.map((item, index) => (
              <Breadcrumb.Item key={index}>
                <Link className="capitalize " to={`/${item}`}>
                  {item}
                </Link>
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </div>
      </header>
      <main className="mt-10">
        {/* <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"> */}
        {/* Replace with your content */}

        <div className="px-4 py-6 sm:px-0 outline rounded-lg">
          <Outlet />
        </div>

        {/* /End replace */}
        {/* </div> */}
      </main>
    </div>
  );
};

export default Dashboard;
