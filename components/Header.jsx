import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import { getPageCategories } from "../services";
import NavDropdown from "./UI/NavDropdown";
import { FiMenu } from "react-icons/fi";
import MobileNavDropdown from "./UI/MobileNavDropdown";

const Header = () => {
  const [pageCategories, setPageCategories] = useState([]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    getPageCategories().then((newPageCategories) => {
      setPageCategories(newPageCategories);
    });
  }, []);

  const router = useRouter();

  useEffect(() => {
    if (showMobileMenu) {
        setShowMobileMenu(!showMobileMenu);
    }
  }, [router.asPath]);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };


  return (
    <div className="container mx-auto px-4 mb-8 z-50">
      <div className=" w-full flex items-center justify-between border-b border-gray-400 py-4">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex flex-col">
              <span className="cursor-pointer text-red-400 font-bold text-4xl">
                YWCA
              </span>
              <span className="flex justify-end cursor-pointer text-red-400 font-semibold -mt-2">
                HARBOR
              </span>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <div className="hidden md:flex items-center relative justify-end">
            <NavDropdown
              pageCategory={pageCategories?.find((x) => x.node.name == "About")}
            />
            <Link href="/contact">
              <span className="md:float-right mt-1 align-middle ml-4 font-semibold cursor-pointer">
                Contact
              </span>
            </Link>
            <Link href="/blog">
              <span className="md:float-right mt-1 align-middle ml-4 font-semibold cursor-pointer">
                Blog
              </span>
            </Link>
          </div>
          <div className="flex items-center justify-end">
            <Link href="https://donorbox.org/ywca-harbor-area-south-bay-donations">
              <span className="md:float-right align-middle ml-4 transition duration-500 ease transform hover:-translate-y-1 inline-block bg-red-400 text-lg font-medium rounded-full text-white px-4 py-3 cursor-pointer">
                Donate
              </span>
            </Link>
          </div>
          <div
            className="md:hidden flex items-center justify-end ml-4"
            onClick={toggleMobileMenu}
          >
            <div className="text-3xl text-red-400">
              <FiMenu />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex w-full items-center justify-center">
        {pageCategories
          ?.filter((x) => x.node.name != "About")
          .map((cat, index) =>
            cat.node.pages.length > 0 ? (
              <NavDropdown key={index} pageCategory={cat} />
            ) : null
          )}
        <Link href="/events">
          <span className="md:float-right mt-1 align-middle ml-4 font-semibold cursor-pointer">
            Events
          </span>
        </Link>        
      </div>
      {showMobileMenu ? (
        <div className="md:hidden flex flex-col fixed mobile-menu-container w-full h-full z-50">
          <div className="md:hidden p-4 flex flex-col fixed mobile-menu-container w-3/4 h-full shadow-lg action-itms-bg z-40">
          {pageCategories?.map((cat, index) =>
                <MobileNavDropdown key={index} pageCategory={cat.node} />  
            )}
            <Link href="/events">
                <span className="font-semibold cursor-pointer mb-2 text-xl">
                    Events
                </span>
            </Link>
            <Link href="/contact">
              <span className="font-semibold cursor-pointer mb-2 text-xl">
                Contact
              </span>
            </Link>
            <Link href="/blog">
              <span className="font-semibold cursor-pointer mb-2 text-xl">
                Blog
              </span>
            </Link>
          </div>
          <div
            className="mobile-menu-bg w-full fixed h-full top-0 left-0 z-30"
            onClick={toggleMobileMenu}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Header;
