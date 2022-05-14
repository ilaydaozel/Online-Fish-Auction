import { useState } from "react";

const FishForm = () => {
  const [species, setspecies] = useState('');
  const [kilogram, setkilogram] = useState('');
  const [floor_price, setfloor_price] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const new_fish = { species, kilogram, floor_price };

    // ! lazım olcak saat dilimi de 
    // const current = new Date();
    // // const currentDateTime: current.toLocaleString();
    // current.dateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'";
    // console.log(current);
    //!

    fetch('http://localhost:8080/package', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fishType: new_fish.species,
        fishAmount: new_fish.kilogram,
        sellerId: "12314123",
        buyerId: null,
        basePrice: new_fish.floor_price,
        soldPrice: null,
        soldDate: null,
        auctionId: "1",
        status: "UNSOLD"
      }),
    }).then((response) => response.json())
      .then((result) => {
        console.log("ekledi");
      })
  }

  return (
    <div className="create">
      <h1>Deniz ürünlerini sıradaki mezata ekle</h1>
      <p style={{ color: '#1b4171', fontWeight: 'bold' }}>Sıradaki mezat tarihi : 16.06.2022 16:00</p>

      <form onSubmit={handleSubmit}>
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