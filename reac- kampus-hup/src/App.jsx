import { useState } from "react";
import { dataA, dataB } from "./data.js";
import "./style.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  const filteredMahasiswa = dataA.filter((mhs) =>
    mhs.nama.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );
  const filteredArticle = dataB.filter((article) =>
    `${article.judul} ${article.isi} ${article.tanggal}`
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase()),
  );

  return (
    <div id="wrapper">
      <div id="header">
        <h3 className="header1">
          kampus <br class="hidden-xs" />
          hup
        </h3>
       

        <div id="nav">
          <h3 className="nav1">ARTICLE</h3>
          
        
           <h3 className="nav1">MAHASISWA</h3>
        </div>

        <div id="serch">
          {}
          <input
            type="search"
            className="search-input"
            id="search"
            placeholder="pengumuman terbaru"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <input type="button" value="Cari judul" className="cari" />
        </div>
      </div>

      <div id="main">
        <h4>ARTICLE</h4>
        <div className="pengumuman">
          {filteredArticle.map((article) => (
            <li key={article.judul}>
              <div className="judul">{article.judul}</div>  
              <div className="isi">{article.isi}</div>  
              <div className="tanggal">{article.tanggal}</div>
            </li>
          ))}
          {filteredArticle.length === 0 && (
            <li id="articlechild">Pengumuman tidak ditemukan.</li>
          )}
        </div>

        <h4>MAHASISWA</h4>
        <ul  id="listMahasiswa">
          {}
          {filteredMahasiswa.map((mhs) => (
            <li key={mhs.nama}>
              <div className="namaMHS">{mhs.nama}</div> 
              <div className="smesterMHS"><p>Semester: {mhs.smester} </p></div>
              <div className="prodi">{mhs.prodi}</div>
              <div className="ipkMHS"><p>IPK: {mhs.ipk}</p></div> 
            </li>
          ))}

          {filteredMahasiswa.length === 0 && (
            <li>Mahasiswa tidak ditemukan.</li>
          )}
        </ul>
      </div>

      <div id="footer">
        <div id="footer1">
          <h2>Tentang aplikasi ini</h2>
        </div>
        <div id="footer2">
          <p>Pemrograman Web Arif rahmat darmawan 2026 nim:20252210169</p>
        </div>
      </div>
    </div>
  );
}
