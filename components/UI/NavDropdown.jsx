import React, { useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { getSpecifiedPages } from "./../../services/index";
import { BsChevronDown } from "react-icons/bs";

const NavDropdown = ({ pageCategory, color }) => {
  function MyLink(props) {
    let { href, children, ...rest } = props;
    return (
      <Link href={href}>
        <a {...rest}>{children}</a>
      </Link>
    );
  }

  return (
    <div className="relative md:float-right mt-2 align-middle ml-4">
      <Menu>
        <Menu.Button>
          <div className="flex items-center font-semibold ">
            <span className={"mr-2"}>{pageCategory?.node.name}</span>
            <BsChevronDown />
          </div>
        </Menu.Button>

        {/* Use the Transition component. */}
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items
            as="ul"
            static
            className="z-50 absolute flex w-40 flex-col px-2 items-end dropdown-container bg-gray-100 rounded shadow-lg"
          >
            {pageCategory?.node.pages?.map((page, index) => (
              <Menu.Item
                as="li"
                key={page.slug}
                className="flex justify-end text-right pr-1 pl-8 py-2 border-b w-full"
              >
                <MyLink href={`/${page.slug}`}>
                  <span className="duration-200 hover:text-red-400">
                    {page.title}
                  </span>
                </MyLink>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default NavDropdown;
