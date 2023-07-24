import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const setNavHandler = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav class="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16 ">
            <div className="flex-shrink-0">
              <p class="text-transparent bg-gradient-to-r bg-clip-text from-black to-red-300 font-semibold text-xl ">
                ELEPHANTAPPS
              </p>
            </div>

            <div className="">
              <div className="hidden lg:flex ml-10 space-x-4">
                <Link
                  to="/"
                  className="text-gray-400  hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  ANASAYFA
                </Link>
                <Link
                  to="/Hakkimizda"
                  className="text-gray-400  hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  HAKKİMİZDA
                </Link>
                <Link
                  to="/Hizmetlerimiz"
                  className="text-gray-400  hover:text-blackpx-3 py-2 rounded-md text-sm font-medium"
                >
                  HİZMETLERİMİZ
                </Link>
                <Link
                  to="/Islerimiz"
                  className="text-gray-400  hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  İŞLERİMİZ
                </Link>
                <Link
                  to="/Kariyer"
                  className="text-gray-400  hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                >
                  KARİYER
                </Link>
                <Link
                  to="/Iletisim"
                  className="text-gray-400  hover:text-black   px-3 py-2 rounded-md text-sm font-medium"
                >
                  İLETİŞİM
                </Link>
              </div>
              <div onClick={setNavHandler} className="lg:hidden ">
                <RxHamburgerMenu class="text-4xl"></RxHamburgerMenu>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav
        className={
          nav
            ? "fixed left-0 top-0 w-[100%] h-[100vh] bg-white ease-in-out duration-700"
            : "fixed left-[-100%]"
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex flex-col  justify-center items-center my-[22%] ">
            <div onClick={setNavHandler} className="">
              <RxCross1 class="text-4xl"></RxCross1>
            </div>
            <Link
              to="/"
              className="text-gray-400  hover:text-black px-3 py-2 rounded-md text-xl font-normal"
            >
              ANASAYFA
            </Link>
            <Link
              to="/Hakkimizda"
              className="text-gray-400  hover:text-black px-3 py-2 rounded-md text-xl font-normal"
            >
              HAKKİMİZDA
            </Link>
            <Link
              to="/Hizmetlerimiz"
              className="text-gray-400  hover:text-blackpx-3 py-2 rounded-md text-xl font-normal"
            >
              HİZMETLERİMİZ
            </Link>
            <Link
              to="/Islerimiz"
              className="text-gray-400  hover:text-black px-3 py-2 rounded-md text-xl font-normal"
            >
              İŞLERİMİZ
            </Link>
            <Link
              to="/Kariyer"
              className="text-gray-400  hover:text-black px-3 py-2 rounded-md text-xl font-normal"
            >
              KARİYER
            </Link>
            <Link
              to="/Iletisim"
              className="text-gray-400  hover:text-black   px-3 py-2 rounded-md text-xl font-normal"
            >
              İLETİŞİM
            </Link>
          </div>
          {console.log(nav)}
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
