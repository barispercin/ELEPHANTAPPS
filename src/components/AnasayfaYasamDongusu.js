import React from "react";
import { GoClock } from "react-icons/go";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { TbDeviceAnalytics } from "react-icons/tb";
import { AiOutlineProject } from "react-icons/ai";
const YasamDongusu = () => {
  return (
    <div class="bg-stone-50 mr-10 pb-1 ">
      <div class="pl-7">
        <p class=" text-md pt-24 font-medium">
          ELEPHANTAPPS UYGULAMA YAŞAM DÖNGÜSÜ
        </p>
        <p class="text-red-400 font-medium text-sm pt-14 pb-7">PLANLAMA</p>
      </div>
      <div class="flex-wap lg:flex items-center ml-6  mb-3 space-x-4 lg:space-x-12">
        <div class="flex-col space-y-4 bg-white px-8 lg:px-16 py-9 lg:py-24  ">
          <p class="text-red-500 text-sm">NE YAPARIZ?</p>
          <p class="text-black text-3xl lg:text-4xl pb-4 pr-0 lg:pr-16 font-light">
            Kurumsal uygulamalar geliştiririz.
          </p>
          <p class="text-gray-400 text-md">
            Deneyimli ve kendini sürekli geliştiren ekibimizle yeni fikirler ve
            yeni teknolojiler üretiriz. Uygulamaların yaşam döngüsü analizlerini
            yapar, geliştirme ve yayınlama süreçlerini kusursuzca planlarız.
          </p>
        </div>
        <div class="grid grid-cols-2 justify-normal pb-24 mt-10 lg:mt-10 gap-10 lg:gap-16 pr-8 lg:mr-0">
          <div>
            <p class="text-xl font-light">İhtiyaçların Belirlenmesi</p>
            <div class="text-4xl text-gray-400 py-2">
              <HiOutlineMagnifyingGlass className="icon"></HiOutlineMagnifyingGlass>
            </div>
            <p class="text-gray-400 leading-4">
              Doğru analizler ve teknolojik çözümlerle ihtiyaçlarınızı eksiksiz
              tespit ederiz.
            </p>
          </div>

          <div>
            <p class="text-xl font-light">Sistem Tasarımı</p>
            <div class="text-4xl text-gray-400 py-2">
              <TbDeviceAnalytics className="icon"></TbDeviceAnalytics>
            </div>
            <p class="text-gray-400 leading-4">
              Kullanıcı deneyimine ve modern tasarım trendlerine göre
              uygulamalarınızı tasarlarız.
            </p>
          </div>
          <div>
            <p class="text-xl font-light">Stratejik Sistem Analizi</p>
            <div class="text-4xl text-gray-400 py-2">
              <GoClock className="icon"></GoClock>
            </div>
            <p class="text-gray-400 leading-4">
              Rakip firma ve uygulamaları araştırır, size en uygun sistemi
              planlarız.
            </p>
          </div>
          <div>
            <p class="text-xl font-light">Proje Planı ve Maliyet Analizi</p>
            <div class="text-4xl text-gray-400 py-2">
              <AiOutlineProject className="icon"></AiOutlineProject>
            </div>
            <p class="text-gray-400 leading-4">
              Proje planlamalarımızı müşterilerimize uygun zaman ve maliyetler
              doğrultusunda gerçekleştiririz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YasamDongusu;
