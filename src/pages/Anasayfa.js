import React from "react";
import Giris from "../components/AnasayfaGiris";
import Navbar from "../components/Navbar";
import Musterilerimiz from "../components/AnasayfaMusterilerimiz";
import YasamDongusu from "../components/AnasayfaYasamDongusu";
import UygulamaGelistirmeAsamalari from "../components/AnasayfaUygulamaGelistirmeAsamalari";
import BakimveDestek from "../components/AnasayfaBakimveDestek";
import Ekip from "../components/AnasayfaEkip";
import BuradanBaslayin from "../components/AnasayfaBuradanBaslayin";

const Anasayfa = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Giris></Giris>
      <Musterilerimiz></Musterilerimiz>
      <YasamDongusu></YasamDongusu>
      <UygulamaGelistirmeAsamalari></UygulamaGelistirmeAsamalari>
      <BakimveDestek></BakimveDestek>
      <Ekip></Ekip>
      <BuradanBaslayin></BuradanBaslayin>
    </div>
  );
};

export default Anasayfa;
