import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Kariyer = () => {
  return (
    <div>
      <div class="flex-col bg-stone-50 pt-20 pb-20 px-7">
        <p class="text-5xl text-center font-light pb-5">Ekimize Katılın</p>
        <p class="text-xl text-center py-8 text-gray-400">
          Sizi aramızda görmekten mutluluk duyarız.
        </p>
        <p class="text-xl text-gray-400 ">
          ElephantApps'ın deneyimli ekibine katılmak ve büyük ve heyecan verici
          projelere katkıda bulunmak ister misiniz?
        </p>
        <p class="text-xl text-gray-400 py-5">
          Binlerce hatta milyonlarca kişinin kullandığı mobil uygulamaları
          bizimle birlikte geliştirmek için bu fırsatı kaçırmayın.
        </p>
        <div class="">
          <Link to="/KariyerDetay">
            <div class="flex bg-white p-8 my-8 justify-between ">
              <p class="text-2xl font-light">
                Native iOS Developer (Mid-Senior Level)
              </p>

              <button className=" min-w-[125px] h-10  rounded-full bg-red-500  text-white text-sm font-light">
                DAHA FAZLA
              </button>
            </div>
          </Link>
          <Link to="/KariyerDetay">
            <div class="flex bg-white p-8 my-8 justify-between ">
              <p class="text-2xl font-light">
              Native Android Developer (Mid-Senior Level)
              </p>

              <button className="rounded-full bg-red-500 min-w-[125px] h-10 text-white text-sm font-light">
                DAHA FAZLA
              </button>
            </div>
          </Link>
          <Link to="/KariyerDetay">
            <div class="flex bg-white p-8 my-8 justify-between ">
              <p class="text-2xl font-light">
              Frontend Developer (Mid-Senior Level)
              </p>

              <button className="rounded-full bg-red-500 min-w-[125px] h-10 text-white text-sm font-light">
                DAHA FAZLA
              </button>
            </div>{" "}
          </Link>
          <Link to="/KariyerDetay">
            <div class="flex bg-white p-8 my-8 justify-between ">
              <p class="text-2xl font-light">
              Backend Developer (Mid-Senior Level)
              </p>

              <button className=" rounded-full bg-red-500 min-w-[125px] h-10 text-white text-sm font-light">
                DAHA FAZLA
              </button>
            </div>
          </Link>
          <Link to="/KariyerDetay">
            <div class="flex bg-white p-8 my-8 justify-between ">
              <p class="text-2xl font-light">
              UI/UX Designer
              </p>

              <button className="rounded-full bg-red-500 min-w-[125px] h-10 text-white text-sm font-light">
                DAHA FAZLA
              </button>
            </div>
          </Link>
          <Link to="/KariyerDetay">
            <div class="flex bg-white p-8 my-8 justify-between ">
              <p class="text-2xl font-light">
              Software Project Manager
              </p>

              <button className="rounded-full bg-red-500 min-w-[125px] h-10 text-white text-sm font-light">
                DAHA FAZLA
              </button>
            </div>
          </Link>
        </div>
        <div class="text-start">
        <p class="text-lg  py-8 text-gray-400">
          ElephantApps, fırsat eşitliği sunan bir işyeri olmaktan gurur duyar.
          Tüm nitelikli başvuru sahipleri, ırk, renk, din, cinsiyet, cinsel
          kimlik veya ifade, cinsel yönelim, ulusal köken, genetik, engellilik,
          yaş veya gazilik durumuna bakılmaksızın istihdam için
          değerlendirilecektir. Geleneksel fırsat eşitliğinin çok ötesine
          geçmeye ve herkesin gelişmesine olanak tanıyan bir ortam yaratmaya
          çalışıyoruz.
        </p>
        <p class="text-lg  py-4 text-gray-400">
          * Şu anda pandemi sezonu içerisinde uzaktan çalışıyoruz. Haftada
          sadece bir gün ofis çalışması gerekli olabilir.
        </p>
        </div>
        
      </div>
      <div class="flex text-center space-x-5 bg-stone-50 pb-24" >
        <Link to="http://localhost:3000/Hakkimizda" class="flex-col text-center space-y-4 py-5">
          <img
            src="https://elephantapps.co/static/ebed9e6f9b586f058fa67dce3af9ecae/aa5a5/fin_01.webp"
            alt="React Image"
          />
          <p class="text-sm ">HAKKIMIZDA</p>
        </Link>
        <Link to="http://localhost:3000/Hizmetlerimiz" class="flex-col text-center space-y-4 py-5">
          <img
            src="https://elephantapps.co/static/76a4322f72fbbdcedbff7ac1f4aa2f8b/aa5a5/fin_02.webp"
            alt="React Image"
          />
          <p class="text-sm">HİZMETLERİMİZ</p>
        </Link>
        <Link to="http://localhost:3000/Islerimiz" class="flex-col text-center space-y-4  py-5">
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

export default Kariyer;
