
import { useState } from "react";

export default function HomePage() {
  const [form, setForm] = useState({
    pickup: "",
    delivery: "",
    service: "",
    date: "",
    details: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cererea a fost trimisă! (demo)");
  };

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Romanian Transport Solutions</h1>
      <p style={{ marginBottom: '2rem' }}>
        Servicii de transport rapide și sigure în Londra și împrejurimi
      </p>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem' }}>
        <input type="text" name="pickup" placeholder="Locație preluare" required onChange={handleChange} />
        <input type="text" name="delivery" placeholder="Locație livrare" required onChange={handleChange} />
        <select name="service" required onChange={handleChange}>
          <option value="">Selectează tipul de serviciu</option>
          <option value="mutare">Mutare locuință</option>
          <option value="livrare">Livrare expres</option>
          <option value="ridicare">Ridicare magazin</option>
        </select>
        <input type="date" name="date" required onChange={handleChange} />
        <textarea name="details" placeholder="Detalii adiționale (opțional)" rows={4} onChange={handleChange} />
        <button type="submit">Trimite cererea</button>
      </form>
    </main>
  );
}
