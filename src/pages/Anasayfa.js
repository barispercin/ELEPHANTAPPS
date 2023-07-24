import React from "react";
import Giris from "../components/AnasayfaGiris";
import Navbar from "../components/Navbar";
import Musterilerimiz from "../components/AnasayfaMusterilerimiz";
import YasamDongusu from "../components/AnasayfaYasamDongusu";
import UygulamaGelistirmeAsamalari from "../components/AnasayfaUygulamaGelistirmeAsamalari";
import BakimveDestek from "../components/AnasayfaBakimveDestek";
import Ekip from "../components/AnasayfaEkip";
import BuradanBaslayin from "../components/AnasayfaBuradanBaslayin";
import Footer from "../components/Footer";

const Anasayfa = () => {
  return (
    <div class="mb-20">
      
      <Giris></Giris>
      <Musterilerimiz></Musterilerimiz>
      <YasamDongusu></YasamDongusu>
      <UygulamaGelistirmeAsamalari></UygulamaGelistirmeAsamalari>
      <BakimveDestek></BakimveDestek>
      <Ekip></Ekip>
      <BuradanBaslayin></BuradanBaslayin>
      <Footer></Footer>
    </div>
  );
};

export default Anasayfa;
