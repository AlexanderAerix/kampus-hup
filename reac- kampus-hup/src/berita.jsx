import berita from "./berita.json";

export default function Berita() {
  return (
    <div id="beritaWrapper">

      { berita.map((item) => (
        <article key={item.id}>
          <div id="beritaContent"> 

          <img id="beritaIMG" src={item.gambar} alt={item.judul} />
          <h2>{item.judul}</h2>
          <p>{item.ringkasan}</p>
          <small>
            {item.kategori} | {item.tanggal}
          </small>
          </div >
        </article>
      ))}
      
    </div>
  );
}