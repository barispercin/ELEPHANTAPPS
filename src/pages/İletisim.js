import React from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Iletisim = () => {
  return (
    <div>
      <div class=" bg-stone-50 pt-28 pb-24">
        <p class="text-4xl text-center py-18 ">İletişim</p>
        <div class="flex flex-col lg:flex-row  pt-20 px-12 ">
          <div class="flex-col text-4xl py-5 flex items-center  w-[100%] lg:w-[50%]   ">
            <p class="font-semibold text-lg">GENEL MERKEZ</p>
            <div class="text-4xl text-gray-400 py-5 ">
              <TfiLocationPin></TfiLocationPin>
            </div>
            <p class=" text-gray-500 text-xl font-light leading-6 text-center px-36  lg:px-4 ">
              İçerenköy Mh. Topçu İbrahim Sk. (E-5 Yan yol üzeri) AND Binası No:
              8/10D İç Kapı No: 5, Kozyatağı, Ataşehir, İSTANBUL / TÜRKİYE
            </p>
            <div class="text-4xl text-gray-400 py-5 ">
              <BsTelephone></BsTelephone>
            </div>
            <Link to="tel:+90 (216) 225-8364">
              <p class="text-gray-500 text-xl font-light">+90 (216) 225-8364</p>
            </Link>
          </div>
          
          <div class="flex-col  text-4xl pt-20 lg:pt-5 flex items-center w-[100%] lg:w-[50%]  ">
            <p class="font-semibold text-lg">ABD OFİS</p>
            <div class="text-4xl text-gray-400 py-5 ">
              <TfiLocationPin></TfiLocationPin>
            </div>
            <p class="text-gray-500 text-xl font-light leading-6 text-center px-36 lg:px-4 ">
              2540 Shell Road STE C, Georgetown TX 78628 / USA
            </p>
            <div class="text-4xl text-gray-400 py-5">
              <BsTelephone></BsTelephone>
            </div>
            <Link to="tel:+1 305-521-3378">
              <p class="text-gray-500 text-xl font-light">+1 305-521-3378</p>
            </Link>
          </div>
        </div>
 
        <div
          class="flex-col  text-4xl
          text-gray-400
          py-8
          flex
          pt-20
          items-center"
        >
          <GoMail></GoMail>
          <Link to={"mailto:info@elephantapps.co"}>
            <p class="text-gray-500 text-xl font-light pt-2  ">
              info@elephantapps.co
            </p>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Iletisim;
