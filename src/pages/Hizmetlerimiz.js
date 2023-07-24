import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Hizmetlerimiz = () => {
  return (
    <div class="flex-col ">
      <div class=" bg-black text-center text-white py-28 space-y-14 ">
        <p class="text-4xl px-28 ">
          Kullanıcı deneyimlerine çok önem veriyor, en son teknolojilerle web ve
          mobil çözümler geliştiriyoruz.
        </p>
        <p class="text-2xl font-light px-3 ">
          Analiz, tasarım, yazılım ve danışmanlık hizmeti veren ekibimizle
          sürekli yeni fikirler ve yeni teknolojiler üretiyoruz.
        </p>
        <div class="flex justify-center space-x-8">
          <Link to="https://elephantapps.co/tr/">
            <button className="rounded-full bg-red-500 w-56 h-9 text-white text-sm">
              İŞLERİMİZİ GÖRÜNTÜLEYİN
            </button>
          </Link>
          <Link to="https://elephantapps.co/tr/">
            <button className="rounded-full bg-gray-500 w-44 h-9 text-white text-sm">
              EKİBİMİZE KATILIN
            </button>
          </Link>
        </div>
      </div>

      <div class="flex-col bg-stone-50">
        <p class="text-red-400 text-2xl text-center pt-28">
          FRONTEND DEVELOPMENT
        </p>
        <div class="flex-wap md:grid grid-cols-2 lg:flex px-16 md:px-8 lg:px-12 space-x-4 pt-12">
          <div class="flex-col hover:bg-white p-8">
            <img
              class="object-cover"
              src="https://elephantapps.co/static/83ebb42e6d746ea99927f4751893951a/b4480/pwareact.webp"
              alt="Vodafone Image"
            />
            <p class="text-2xl font-light text-center">
              React JS ile Progressive Web Uygulama Geliştirme
            </p>
          </div>
          <div class="flex-col hover:bg-white p-8">
            <img
              class=" object-cover"
              src="https://elephantapps.co/static/6ce05bdb99c012c9c183cb864b46f4d1/b4480/native.webp"
              alt="Vodafone Image"
            />
            <p class="text-2xl font-light text-center">
              Native Mobil Uygulşama Geliştirme -iOS ve Android
            </p>
          </div>
          <div class="flex-col hover:bg-white p-8">
            <img
              class=" object-cover"
              src="https://elephantapps.co/static/57c08f778b81d9970e87227553a26dcb/b4480/react-native.webp"
              alt="Vodafone Image"
            />
            <p class="text-2xl font-light text-center">
              React-Native Crossplatform Mobil Uygulama Geliştirme
            </p>
          </div>
        </div>
      </div>
      <div class="flex-col bg-stone-50">
        <p class="text-red-400 text-2xl text-center pt-36">
          BACKEND DEVELOPMENT
        </p>
        <div class="flex-wap md:grid grid-cols-2 lg:flex px-28 md:px-8 lg:px-12 space-x-4 pt-12">
          <div class="flex-col hover:bg-white p-8">
            <img
              class="object-cover "
              src="https://elephantapps.co/static/75dfe41b9447e9d4e2b1bda37784c866/b4480/database.webp"
              alt="Vodafone Image"
            />
            <p class="text-2xl font-light text-center">
              Veritabanı Uygulama Geliştirme
            </p>
          </div>
          <div class="flex-col hover:bg-white p-8 ">
            <img
              class=" object-cover"
              src="https://elephantapps.co/static/a6e07c99e8708526797f3ff2a3bc16b0/b4480/appservice.webp"
              alt="Vodafone Image"
            />
            <p class="text-2xl font-light text-center">
              Uygulama Servisleri Geliştirme
            </p>
          </div>
          <div class="flex-col hover:bg-white p-8">
            <img
              class=" object-cover"
              src="https://elephantapps.co/static/27fc283589616ccc5881148b866ff34d/b4480/api.webp"
              alt="Vodafone Image"
            />
            <p class="text-2xl font-light text-center">API Geliştirme</p>
          </div>
          <div class="flex-col hover:bg-white p-8">
            <img
              class=" object-cover"
              src="https://elephantapps.co/static/378f736f8f054b413aead7499363c74f/b4480/middleware.webp"
              alt="Vodafone Image"
            />
            <p class="text-2xl font-light text-center">
              Middleware Yazılım Geliştirme
            </p>
          </div>
        </div>
      </div>
      <div class="flex-col bg-stone-50">
        <p class="text-red-400 text-2xl text-center pt-28">
       HARDWARE
        </p>
        <div class="flex-wap md:grid grid-cols-2 lg:flex px-16 md:px-12 lg:px-12 space-x-4 pt-12">
          <div class="flex-col hover:bg-white p-8">
            <img
              class="object-cover"
              src="https://elephantapps.co/static/91ecaa4470b11527fbd4e5b32f76db10/b4480/hardwaredevelopment.webp"
              alt="Vodafone Image"
            />
            <p class="text-2xl font-light text-center">
              React JS ile Progressive Web Uygulama Geliştirme
            </p>
          </div>
          <div class="flex-col hover:bg-white p-8">
            <img
              class=" object-cover"
              src="https://elephantapps.co/static/350f36fb283f3374136f5d86aeb9ec9e/b4480/iotprojects.webp"
              alt="Vodafone Image"
            />
            <p class="text-2xl font-light text-center">
              IOT Projeler
            </p>
          </div>
          <div class="flex-col hover:bg-white p-8">
            <img
              class=" object-cover"
              src="https://elephantapps.co/static/350f36fb283f3374136f5d86aeb9ec9e/b4480/iotprojects.webp"
              alt="Vodafone Image"
            />
            <p class="text-2xl font-light text-center">
              Donanım Ürünleri
            </p>
          </div>
        </div>
      </div>
      <div class="flex-col bg-stone-50 ">
        <p class="text-red-400 text-2xl text-center pt-28">
        CONSULTING
        </p>
        <div class="flex-wap md:grid grid-cols-2 lg:flex px-36 md:px-12 lg:px-36 space-x-4 pt-12">
          <div class="flex-col hover:bg-white p-8">
            <img
              class="object-cover"
              src="https://elephantapps.co/static/d9b4e9e382dfd4d3078c655fb816aa74/aa5a5/consulting.webp"
              alt="Vodafone Image"
            />
            <p class="text-2xl font-light text-center">
              Yazılım Proje Danışmanlığı
            </p>
          </div>
          <div class="flex-col hover:bg-white p-8">
            <img
              class=" object-cover"
              src="https://elephantapps.co/static/d9b4e9e382dfd4d3078c655fb816aa74/aa5a5/consulting.webp"
              alt="Vodafone Image"
            />
            <p class="text-2xl font-light text-center">
              IT Danışmanlığı
            </p>
          </div>
          <div class="flex-col hover:bg-white p-8 pb-32">
            <img
              class=" object-cover"
              src="https://elephantapps.co/static/d9b4e9e382dfd4d3078c655fb816aa74/aa5a5/consulting.webp"
              alt="Vodafone Image"
            />
            <p class="text-2xl font-light text-center">
              MIS Danışmanlığı
            </p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Hizmetlerimiz;
