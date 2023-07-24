import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Anasayfa from "./pages/Anasayfa";
import Navbar from "./components/Navbar";
import Hakkimizda from "./pages/Hakkimizda";
import Hizmetlerimiz from "./pages/Hizmetlerimiz";
import Islerimiz from "./pages/İşlerimiz";
import Kariyer from "./pages/Kariyer";
import Iletisim from "./pages/İletisim";
import KariyerDetay from "./components/KariyerDetay";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Anasayfa />} />
            <Route path="/Hakkimizda" element={<Hakkimizda />} />
            <Route path="/Hizmetlerimiz" element={<Hizmetlerimiz />} />
            <Route path="Islerimiz" element={<Islerimiz />} />
            <Route path="Kariyer" element={<Kariyer />} />
            <Route path="Iletisim" element={<Iletisim />} />
            <Route path="KariyerDetay" element={<KariyerDetay />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
