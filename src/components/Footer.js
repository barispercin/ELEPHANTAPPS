import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { SiTwitter } from "react-icons/si";
import { Outlet, Link } from "react-router-dom";
const Footer = () => {
  return (
    <div class="grid-flow-col md:flex  pt-28 pb-32 px-10 justify-between ">
      <div class="flex-col text-start ">
        <div class="pb-4">
          <Link to="/" class="text-xl font-medium  ">
            ELEPHANTAPPS
          </Link>
        </div>

        <Link class="text-stone-500" to="/">
          Hayatını Kolaylaştırır
        </Link>
      </div>

      <div class="flex-col text-start ">
        <div>
          <p class="text-sm font-medium pb-4 pt-5 md:pt-0">HAKKIMIZDA</p>
          <div class="pb-4 text-stone-500">
            <Link to="/Hakkimizda">Hakkımızda</Link>
          </div>
        </div>
        <div class="pb-4 text-stone-500">
          <Link to="/Hizmetlerimiz">Hizmetlerimiz</Link>
        </div>
        <div class="text-stone-500">
          <Link to="/Islerimiz">İşlerimiz</Link>
        </div>
      </div>
      <div class="flex-col text-start ">
        <p class="text-sm font-medium pb-4 pt-5 md:pt-0">KARİYER</p>
        <div class="text-stone-500">
          <Link to="/Kariyer">Açık Pozisyonlar</Link>
        </div>
      </div>
      <div class="flex-col text-start ">
        <p class="text-sm font-medium pb-4 pt-5 md:pt-0">İLETİŞİM</p>
        <div class="pb-4 text-stone-500">
          <Link to="tel:+90 (216) 225-8364">
            Genel Merkez — TR: +90 (216) 225-8364
          </Link>
        </div>
        <div class="pb-4 text-stone-500">
          <Link to="tel:+1 305-521-3378">
            ABD OFİS — USA: +1 305-521-3378
          </Link>
        </div>
        <div class="pb-4 text-stone-500">
          <Link to={"mailto:info@elephantapps.co"}>info@elephantapps.co</Link>
        </div>
        <div class="grid-flow-col md:flex md:space-x-2 md:pl-10">
          <Link to={"https://www.instagram.com/elephantapps/"}>
            <AiOutlineInstagram class="text-3xl text-stone-600"></AiOutlineInstagram>
          </Link>
          <Link to={"https://twitter.com/elephantapps"}>
            <AiFillTwitterSquare class="text-3xl text-stone-600"></AiFillTwitterSquare>
          </Link>

          <Link to={"https://www.linkedin.com/company/elephantapps/"}>
            <AiOutlineLinkedin class="text-3xl text-stone-600"></AiOutlineLinkedin>
          </Link>
          <Link to={"https://www.facebook.com/elephantapps.co/"}>
            <AiOutlineFacebook class="text-3xl text-stone-600"></AiOutlineFacebook>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
