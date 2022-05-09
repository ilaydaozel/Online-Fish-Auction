import { useState } from "react";

const FishForm = () => {
  const [species, setspecies] = useState('');
  const [kilogram, setkilogram] = useState('');
  const [floor_price, setfloor_price] = useState('');

  return (
    <div className="create">
      <h1>Deniz ürünlerini sıradaki mezata ekle</h1>
      <p style={{color: '#1b4171', fontWeight: 'bold'}}>Sıradaki mezat tarihi : 16.06.2022 16:00</p>

      <form>
        <label>Balık Türü:</label>
        <input 
          type="text" 
          required 
          value={species}
          onChange={(e) => setspecies(e.target.value)}
        />

        <label>Kilosu:</label>
        <input
          required
          value={kilogram}
          onChange={(e) => setkilogram(e.target.value)}
        />

        <label>Taban Fiyatı:</label>
        <input
          value={floor_price}
          onChange={(e) => setfloor_price(e.target.value)}
        />
        
        <button>Balık Ekle</button>
      </form>
    </div>
  );
}
 
export default FishForm;