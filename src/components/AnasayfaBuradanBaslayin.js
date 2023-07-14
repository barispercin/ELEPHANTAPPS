import React from "react";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
const BuradanBaslayin = () => {
  return (
    <div>
      <div class="px-32">
        <p class="text-red-400 font-medium text-sm pt-12 pb-7">
          BURADAN BAŞLAYIN
        </p>
        <div class="space-y-5">
          <p class="text-2xl text-gray-500 pb-5">
            Bize aklınızdaki projeyi anlatın, uygulamanızı birlikte hayata
            geçirelim.
          </p>
          <BsTelephone class="text-3xl text-gray-400"></BsTelephone>
          <p class="text-lg text-gray-500">+90 (216) 225-8364</p>
          <GoMail class=" text-3xl text-gray-400"></GoMail>
          <p class="text-lg text-gray-500">info@elephantapps.co</p>
        </div>
       </div>
        <div class="flex pt-20 text-center space-x-5">
          <div class="flex-col text-center space-y-4 py-5">
            <img
              src="https://elephantapps.co/static/ebed9e6f9b586f058fa67dce3af9ecae/aa5a5/fin_01.webp"
              alt="React Image"
            />
            <p class="text-sm ">BİZ KİMİZ</p>
          </div>
          <div class="flex-col text-center space-y-4 py-5">
            <img
              src="https://elephantapps.co/static/ebed9e6f9b586f058fa67dce3af9ecae/aa5a5/fin_01.webp"
              alt="React Image"
            />
            <p class="text-sm">NE YAPARIZ</p>
          </div>
          <div class="flex-col text-center space-y-4  py-5">
            <img
              src="https://elephantapps.co/static/ebed9e6f9b586f058fa67dce3af9ecae/aa5a5/fin_01.webp"
              alt="React Image"
            />
            <p class="text-sm ">İŞLERİMİZ</p>
          </div>
        </div>
   
    </div>
  );
};

export default BuradanBaslayin;
