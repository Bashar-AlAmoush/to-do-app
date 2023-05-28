import React from "react";
import DarkMode from "../Components/DarkMode";
import { Link } from "react-router-dom";
export default function Navbar() {
  
  return (
    <>
<nav className="bg-gray-500 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <span className="self-center text-2xl font-semibold whitespace-nowrap">
      To Do App
    </span>
    <div className="flex md:order-2">
      <DarkMode />
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-sticky"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link
            to="/"
            className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
          >
            Login
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
}
