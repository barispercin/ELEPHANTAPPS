import React from "react";
import Footer from "../components/Footer";
import Ekip from "../components/AnasayfaEkip";
import { Link } from "react-router-dom";
import HakkimizdaEkip from "../components/HakkimizdaEkip";
const Hakkimizda = () => {
  return (
    <div class="flex-col ">
      <div class=" bg-black text-center  text-white py-28 space-y-14">
        <p class="text-4xl px-4 ">
          ElephantApps mobil odaklı çalışan, kullanıcı deneyimine önem veren,
          dijital teknoloji geliştiren bir yazılım şirketidir.
        </p>
        <p class="text-2xl font-light px-3">
          Hedefimiz son kullanıcı ile firmalar arasında köprü kurarak
          müşterilerimizin pazar payını artırmak ve kurumsal büyümeyi
          sağlamaktır.
        </p>
        <div class="flex justify-center space-x-8">
          <Link to="https://elephantapps.co/tr/">
            <button className="rounded-full bg-red-500 w-28 h-9 text-white text-sm">
              NE YAPARIZ?
            </button>
          </Link>
          <Link to="https://elephantapps.co/tr/">
            <button className="rounded-full bg-gray-500 w-28 h-9 text-white text-sm">
              İŞLERİMİZ
            </button>
          </Link>
        </div>
      </div>

      <HakkimizdaEkip></HakkimizdaEkip>
      <Footer></Footer>
    </div>
  );
};

export default Hakkimizda;
