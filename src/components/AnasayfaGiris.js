import React from "react";
const Giris = () => {
  return (
    <div>
      <div class="flex-wap lg:flex items-center px-20 lg:px-32 mb-40 pt-10 space-y-20 justify-between">
        <div class="flex-col space-y-4 ">
          <p class="text-black text-4xl font-light ">
            Startuplar Yaratan,
            <br />
            Uygulama Fabrikası
            <br /> ile tanışın...
          </p>
          <p class="text-gray-400 text-lg">
            Bir uygulama fikriniz mi var?
            <br /> Gelin birlikte gerçeklestirelim...
          </p>
          <button className="rounded-full bg-red-500 w-32 h-7 text-white text-sm">
            Başla
          </button>
        </div>
        <div class="">
          <img
            className="w-[470px] mt-30 lg:mt-0 "
            src={
              "https://elephantapps.co/static/elephantapps-startup-rocket-643121cfa7db0b23f6cf0ce750cfa80f.webp"
            }
            alt="elephantapps"
          />
        </div>
      </div>
      <div class="flex-wap lg:flex items-center px-20 lg:px-36 space-y-20 space-x-2 justify-between">
        <div class="flex-col space-y-5 ">
          <p class="text-black text-4xl font-light ">
            Kullanıcı deneyimini <br /> göz önünde bulundurarak en son <br />{" "}
            teknolojilerle web ve mobil <br /> uygulamalar geliştirir
          </p>
          <p class="text-gray-400 text-lg">
            Analiz, tasarım, yazılım ve danışmanlık hizmetleri veren ekibimizle{" "}
            <br />
            sürekli olarak yeni fikirler ve yeni teknolojiler üretiyoruz.
          </p>
        </div>
        <div>
        <div class="">
          <img
            className="w-[480px] mb-16 lg:pl-2 "
            src={
              "https://elephantapps.co/static/app-idea-5364d762f0f085a420f0428d96142ed9.webp"
            }
            alt="elephantapps"
          />
        </div>
      </div>
     
      </div>
    </div>
  );
};

export default Giris;
