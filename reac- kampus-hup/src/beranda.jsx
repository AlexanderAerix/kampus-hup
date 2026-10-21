import { useState } from "react";
import { dataA } from "./data.js";

export default function Beranda() {
  const [searchTerm, setSearchTerm] = useState("");
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const filteredMahasiswa = dataA.filter((mhs) =>
    `${mhs.nama} ${mhs.smester} ${mhs.prodi} ${mhs.ipk}`
      .toLowerCase()
      .includes(normalizedSearchTerm),
  );

  return (
    <div id="wrapper">
        <div id="header">
        

        <div id="serch">
          <input
            type="search"
            className="search-input"
            id="search"
            placeholder="Cari Mahasiswa"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
      </div>

      <div id="main">
        <h4>MAHASISWA</h4>
        
        <ul  id="listMahasiswa">
          {}
          {filteredMahasiswa.map((mhs) => (
            <li id="limahasiswa" key={mhs.nama}>
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

     
    </div>
    
  );
}
