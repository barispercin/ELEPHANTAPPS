import React from "react";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { Link } from "react-router-dom";

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
          <div>
          <Link to="tel:+90 (216) 225-8364" class="text-lg text-gray-500">+90 (216) 225-8364</Link>
          </div>
          <GoMail class=" text-3xl text-gray-400"></GoMail>
          <div >
          <Link
            to={"mailto:info@elephantapps.co"}
            class="text-lg text-gray-500"
          >
            info@elephantapps.co
          </Link>
          </div>
        </div>
      </div>
      <div class="flex pt-20 text-center space-x-5">
        <Link to="" class="flex-col text-center space-y-4 py-5">
          <img
            src="https://elephantapps.co/static/ebed9e6f9b586f058fa67dce3af9ecae/aa5a5/fin_01.webp"
            alt="React Image"
          />
          <p class="text-sm ">BİZ KİMİZ</p>
        </Link>
        <Link to="" class="flex-col text-center space-y-4 py-5">
          <img
            src="https://elephantapps.co/static/ebed9e6f9b586f058fa67dce3af9ecae/aa5a5/fin_01.webp"
            alt="React Image"
          />
          <p class="text-sm">NE YAPARIZ</p>
        </Link>
        <Link to="" class="flex-col text-center space-y-4  py-5">
          <img
            src="https://elephantapps.co/static/ebed9e6f9b586f058fa67dce3af9ecae/aa5a5/fin_01.webp"
            alt="React Image"
          />
          <p class="text-sm ">İŞLERİMİZ</p>
        </Link>
      </div>
      <div class="flex justify-center pt-20 lg:justify-between px-20 lg:px-56 ">
        <Link to="https://www.goodfirms.co/company/elephantapps">
          <div class="max-w-[200px]">
            <img
              src="https://assets.goodfirms.co/badges/color-badge/app-development.svg"
              alt="React Image"
            />
          </div>
        </Link>
        <Link to="https://www.trustpilot.com/review/elephantapps.co">
          <div class="max-w-[330px]">
            <img
              src="https://i.ibb.co/TLWdCNd/trustpilot-logo.png"
              alt="React Image"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BuradanBaslayin;
