import { Link, NavLink } from "react-router-dom";
import { Menu, Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { images } from "../../constants";
const items = [
  {
    name: "La empresa",
    href: "/about",
  },
  {
    name: "Servicios",
    href: "/services",
  },
  {
    name: "Nuestras Obras",
    href: "/works",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contacto",
    href: "/contact",
  },
];

import { MenuIcon, XIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const title = "FALCONSA";
  return (
    <>
      <Popover className="relative bg-white bg-lights-sun">
        <div
          className="absolute inset-0 shadow z-30 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-20">
          <div className="flex justify-between items-center px-4 py-5 sm:px-5 sm:py-4 lg:px-10 md:justify-between md:space-x-10">
            <div>
              <Link to="/" className="flex items-center gap-3 justify-center">
                <img src={images.Logo} alt="logo" className="h-[70px]" />
                <h2 className="text-3xl font-circular-bold font-bold tracking-wide text-blue-900 mt-6">
                  {title}
                </h2>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white  rounded-md p-2 inline-flex items-center justify-center text-gray-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden md:flex md:items-center md:justify-between">
              <nav className="flex space-x-10 ">
                {items.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className="text-[17px] font-circular-book text-gray-900 hover:text-indigo-800 tracking-wider"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-900">
              <div className="pt-5 pb-6 px-5 sm:pb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <Link
                      to="/"
                      className="text-2xl font-bold font-circular-bold tracking-wide cursor-pointer text-blue-800"
                    >
                      {title}
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8">
                  <nav>
                    <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                      {items.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-200"
                        >
                          <div className="ml-4 text-base font-medium text-gray-900">
                            {item.name}
                          </div>
                        </a>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
}
