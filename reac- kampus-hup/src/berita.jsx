import berita from "./berita.json";

export default function Berita() {
  return (
    <div>
      {berita.map((item) => (
        <article key={item.id}>
          <img src={item.gambar} alt={item.judul} />
          <h2>{item.judul}</h2>
          <p>{item.ringkasan}</p>
          <small>
            {item.kategori} | {item.tanggal}
          </small>
        </article>
      ))}
    </div>
  );
}