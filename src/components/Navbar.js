import React from "react";
const Navbar = () => {
  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16 ">
          <div className="flex-shrink-0">
            <p class="text-transparent bg-gradient-to-r bg-clip-text from-black to-red-300 font-semibold text-xl ">
              ELEPHANTAPPS
            </p>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="/"
                className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Anasayfa
              </a>
              <a
                href="/Hakkimizda"
                className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Hakkımızda
              </a>
              <a
                href="/Hizmetlerimiz"
                className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Hizmetlerimiz
              </a>
              <a
                href="/İslerimiz"
                className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                İşlerimiz
              </a>
              <a
                href="/Kariyer"
                className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Kariyer
              </a>
              <a
                href="/Iletisim"
                className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                İletişim
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
