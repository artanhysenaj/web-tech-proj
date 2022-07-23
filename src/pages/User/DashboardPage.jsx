import React from "react";
import Logo from "../../components/UI/Logo/Logo";
import { Outlet, NavLink } from "react-router-dom";
const DashboardPage = (props) => {
  const navigation = [
    { name: "Dashboard", to: "/dashboard", current: true },
    { name: "Settings", to: "settings", current: false },
    { name: "My Snippets", to: "my-snippets", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center outline h-full">
            <div className="flex-shrink-0 mb-2">
              <Logo />
            </div>
            <div className="hidden md:block h-full">
              <div className="ml-10 flex items-center space-x-2  h-full">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={({ isActive }) => {
                      return `text-white border-b-2 border-transparent hover:border-gray-400 px-2 py-4  ${
                        isActive ? "!border-white text-white" : ""
                      }
                      ${item.name === "Dashboard" ? "bg-gray-500/20" : ""}`;
                    }}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        <header className="shadow-2xl mt-2">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <Outlet />
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
};

export default DashboardPage;
