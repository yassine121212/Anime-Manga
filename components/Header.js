import React, { useState } from 'react'
import logo from "../public/img/logoAnime.png";


const Header = () => {
      const [open, setOpen] = useState(false);

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 !bg-[#330054]">
      <nav className="flex items-center justify-between h-16 lg:h-20">
        <div className="flex-shrink-0 flex justify-center items-center gap-4">
          <a href="#" title="" className="flex">
            <img
              className="w-auto h-8 lg:h-24"
              src={logo.src}
              alt=""
            />
          </a>
          <p className="font-bold text-xl text-white lg:text-2xl">
            Animix
          </p>
        </div>

        <button
          type="button"
          className="inline-flex p-2  text-white transition-all duration-200 rounded-md lg:hidden hover:bg-gray-100"
        >
          {open ? (
            <svg
              className="  focus:bg-gray-100 block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="block w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8h16M4 16h16"
              />
            </svg>
          )}
        </button>
        <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
          <a
            href="#"
            title=""
            className="text-base font-medium  text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
          >
            {" "}
            Features{" "}
          </a>

          <a
            href="#"
            title=""
            className="text-base font-medium  text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
          >
            {" "}
            Solutions{" "}
          </a>

          <a
            href="#"
            title=""
            className="text-base font-medium  text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
          >
            {" "}
            Resources{" "}
          </a>

          <a
            href="#"
            title=""
            className="text-base font-medium  text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
          >
            {" "}
            Pricing{" "}
          </a>
        </div>

        <a
          href="#"
          title=""
          className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-[#6800ad] border border-transparent rounded-md lg:inline-flex hover:bg-[#c72323] focus:bg-blue-700"
          role="button"
        >
          {" "}
          Get started now{" "}
        </a>
      </nav>
      {open && (
        <nav className="pt-4 pb-6 bg-[#330054] border border-gray-200 rounded-md shadow-md lg:hidden">
          <div className="flow-root">
            <div className="flex flex-col px-6 -my-2 space-y-1">
              <a
                href="#"
                title=""
                className="inline-flex py-2 text-base font-medium  text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Features{" "}
              </a>

              <a
                href="#"
                title=""
                className="inline-flex py-2 text-base font-medium  text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Solutions{" "}
              </a>

              <a
                href="#"
                title=""
                className="inline-flex py-2 text-base font-medium  text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Resources{" "}
              </a>

              <a
                href="#"
                title=""
                className="inline-flex py-2 text-base font-medium  text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Pricing{" "}
              </a>
            </div>
          </div>

          <div className="px-6 mt-6">
            <a
              href="#"
              title=""
              className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-red-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              {" "}
              Get started now{" "}
            </a>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Header
