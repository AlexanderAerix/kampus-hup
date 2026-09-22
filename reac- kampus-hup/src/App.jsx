import { useState } from "react";
import { dataA } from "./data.js";
import "./style.css";

export default function App() {
  // useState = "kotak penyimpan nilai" yang kalau berubah, otomatis
  // bikin React render ulang bagian yang pakai nilai itu.
  // searchTerm = nilai sekarang, setSearchTerm = fungsi buat mengubahnya.
  const [searchTerm, setSearchTerm] = useState("");

  // Ini pengganti addEventListener("input", filterByName) di main.js.
  // Setiap kali user ngetik di input, fungsi ini jalan.
  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  // Di vanilla JS tadi, filter dilakukan dengan manipulasi DOM langsung
  // (item.style.display = "none"). Di React, kita TIDAK menyentuh DOM
  // secara manual. Sebagai gantinya, kita hitung ulang data yang mau
  // ditampilkan, lalu biarkan React yang menggambar ulang elemennya.
  const filteredMahasiswa = dataA.filter((mhs) =>
    mhs.nama.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );

  return (
    <div id="wrapper">
      <div id="header">
        <h3 className="header1">
          kampus <br />
          hup
        </h3>
        <h3 className="header1">
          papan pengumuman <br />
          UNIWA
        </h3>

        <div id="nav">
          <h3 className="nav1">Pengumuman</h3>
          <h3 className="nav1">Tentang</h3>
          {/* href tetap boleh dipakai kalau memang mau pindah halaman biasa.
              Kalau nanti pakai react-router, ini akan diganti jadi <Link>. */}
          <a href="mahasiswa.html" className="nav1">
            Mahasiswa
          </a>
        </div>

        <div id="serch">
          {/* Beda dari vanilla: input di sini "controlled" -> nilainya
              selalu sama dengan searchTerm yang ada di state React. */}
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
          {/* Belum ada sumber data pengumuman di project awal, jadi
              di sini cuma disiapkan tempatnya. Kalau nanti ada data
              pengumuman (mirip dataA), tinggal di-map seperti daftar
              mahasiswa di bawah. */}
          <li id="articlechild"></li>
        </div>

        <h4>MAHASISWA</h4>
        <ul id="listMahasiswa">
          {/* .map() = pengganti loop forEach + document.createElement.
              Untuk tiap objek "mhs" di array hasil filter, kita bikin
              satu <li>. "key" wajib diisi (di sini pakai nama) supaya
              React tahu mana elemen yang berubah. */}
          {filteredMahasiswa.map((mhs) => (
            <li key={mhs.nama}>
              {mhs.nama} — semester {mhs.smester} — {mhs.prodi} — IPK {mhs.ipk}
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
