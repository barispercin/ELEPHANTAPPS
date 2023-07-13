import React from "react";

const UygulamaGelistirmeAsamalari = () => {
  return (
    <div class=" bg-stone-50 px-3 pb-20">
      <p class="text-red-400 font-medium text-sm pt-12 pb-5">
        UYGULAMA GELİŞTİRME AŞAMALARI
      </p>
      <div class="flex-wap md:grid grid-cols-2 lg:flex pt-20 text-center space-x-4">
        <div class="flex-col text-center space-y-4 lg:space-y-3 py-5">
          <img
            src="https://elephantapps.co/static/9510bddccbd9231d52bb4ccadfcbf506/aa5a5/dev_design.webp"
            alt="React Image"
          />
          <p class="text-2xl font-light">Görsel Tasarım</p>
          <p class="text-stone-500 text-md leading-4">
            Farklı ekran boyutları ve retina çözünürlüklerine uygun Responsive
            ve Flat Design tasarımlar yaparız.
          </p>
        </div>
        <div class="flex-col text-center space-y-4 lg:space-y-3 py-5">
          {" "}
          <img
            src="https://elephantapps.co/static/7b4945f32e484a00ed7a1f85716e831e/aa5a5/dev_code.webp"
            alt="React Image"
          />
          <p class="text-2xl font-light">Kodlama</p>
          <p class="text-stone-500 text-md leading-4">
            Son teknolojileri takip eder; kendimizi sürekli geliştirerek kodlama
            yaparız.
          </p>
        </div>
        <div class="flex-col space-y-4 lg:space-y-3 text-center py-5" >
          {" "}
          <img
            src="https://elephantapps.co/static/73a8a7b6bbf40471b252bd0925756cd0/aa5a5/dev_test.webp"
            alt="React Image"
          />
          <p class="text-2xl font-light">Test ve Kabul</p>
          <p class="text-stone-500 text-md leading-4">
            Çeşitli araçlar kullanıp uygulamaları test eder, kabul
            süreçlerinizde destek oluruz.
          </p>
        </div>
        <div class="flex-col space-y-4 lg:space-y-3 text-center py-5">
          <img
            src="https://elephantapps.co/static/0aaa9996862ba4a80acf0e76d59274bb/aa5a5/dev_launch.webp"
            alt="React Image"
          />
          <p class="text-2xl font-light">Yayınlama</p>
          <p class="text-stone-500 text-md leading-4 ">
            İster kendi hesaplarınızda, ister ElephantApps hesaplarında
            uygulamalarınızı yayınlarız.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UygulamaGelistirmeAsamalari;
