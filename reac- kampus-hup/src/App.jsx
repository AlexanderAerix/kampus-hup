import { Link, Route, Routes } from "react-router-dom";
import Beranda from "./beranda.jsx";
import Berita from "./berita.jsx";
import Tentang from "./tentang.jsx";
import "./style.css";

export default function App() {
  return (
    <div id="wrapper">
       <div id="header">
        <h3 className="header1">
          kampus <br className="hidden-xs" />
          hup
        </h3>
         <nav id="nav">

        <Link className="nav1" to="/">Beranda</Link>
        <Link className="nav1" to="/berita">Berita</Link>
        <Link className="nav1" to="/tentang">Tentang</Link>
      </nav>
      </div>
     

      <main id="main">
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/tentang" element={<Tentang />} />
        </Routes>
      </main>
    </div>
  );
}
