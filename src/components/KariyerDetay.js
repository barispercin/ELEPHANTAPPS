import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { BsWhatsapp } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";


const KariyerDetay = () => {
  return (
    <div>
      {" "}
      <div class="flex-col bg-stone-50 pt-20 pb-20 px-7">
        <p class="text-5xl text-center font-light pb-5">Ekimize Katılın</p>
        <p class="text-xl text-center py-8 text-gray-400">
          Frontend Developer (Mid-Senior Level)
        </p>
        <p class="text-2xl text-gray-500 py-3">Job Description</p>
        <p class="text-md text-gray-400 py-1">
          Responsible to complete tasks in due time. Working as a team member
          using Slack, Git, and Task management software
        </p>
        <p class="text-md text-gray-400 py-1">
          Responsible for development, programming, coding of complex and
          business-critical Information Technology solutions using React JS,
          HTML, JavaScript, CSS/SCSS, Gatsby
        </p>
        <p class="text-md text-gray-400 py-1">
          Remote working options available
        </p>
        <p class="text-2xl text-gray-500 py-3">Required Skills</p>
        <p class="text-md text-gray-400 py-1">
          Strong knowledge of Visual Studio/Visual Studio Code
        </p>
        <p class="text-2xl text-gray-500 py-3">Required Experience</p>
        <p class="text-md text-gray-400 py-1">
          At least 2 years of experience and proficiency in developing
          applications using React JS, HTML, JavaScript, CSS/SCSS, Gatsby
        </p>
        <p class="text-2xl text-gray-500 py-3">Preferred Education</p>
        <p class="text-md text-gray-400 py-1">
          Bachelor’s Degree in Computer Science, Software/Computer Engineering
          or a closely related field
        </p>
        <Link to="https://elephantapps.co/meeting/meeting/">
          <button className="rounded-full bg-red-500 w-28 h-10 my-8 text-white text-sm font-light">
            APPLY
          </button>
        </Link>
      </div>
      <div class="pl-7 bg-stone-50 pb-20">
        <p class="text-2xl text-gray-500 pb-5"> Share:</p>
        <div class="flex space-x-3">
        <Link to={"https://www.linkedin.com/company/elephantapps/"}>
            <BsWhatsapp class="text-3xl  "></BsWhatsapp>
          </Link>
          <Link to={"https://www.linkedin.com/company/elephantapps/"}>
            <BsTelegram class="text-3xl  "></BsTelegram>
          </Link>
          <Link to={"https://www.linkedin.com/company/elephantapps/"}>
            <BsTwitter class="text-3xl  "></BsTwitter>
          </Link>
          <Link to={"https://www.linkedin.com/company/elephantapps/"}>
            <BsFacebook class="text-3xl  "></BsFacebook>
          </Link>
          <Link to={"https://www.linkedin.com/company/elephantapps/"}>
            <BsLinkedin class="text-3xl  "></BsLinkedin>
          </Link>
      </div>
      </div>
      <div class="flex text-center space-x-5 bg-stone-50 pb-24">
        <Link
          to="http://localhost:3000/Hakkimizda"
          class="flex-col text-center space-y-4 py-5"
        >
          <img
            src="https://elephantapps.co/static/ebed9e6f9b586f058fa67dce3af9ecae/aa5a5/fin_01.webp"
            alt="React Image"
          />
          <p class="text-sm ">HAKKIMIZDA</p>
        </Link>
        <Link
          to="http://localhost:3000/Hizmetlerimiz"
          class="flex-col text-center space-y-4 py-5"
        >
          <img
            src="https://elephantapps.co/static/76a4322f72fbbdcedbff7ac1f4aa2f8b/aa5a5/fin_02.webp"
            alt="React Image"
          />
          <p class="text-sm">HİZMETLERİMİZ</p>
        </Link>
        <Link
          to="http://localhost:3000/Islerimiz"
          class="flex-col text-center space-y-4  py-5"
        >
          <img
            src="https://elephantapps.co/static/51999ba0b0f18b07884722926d2db789/aa5a5/fin_03.webp"
            alt="React Image"
          />
          <p class="text-sm ">İŞLERİMİZ</p>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default KariyerDetay;
