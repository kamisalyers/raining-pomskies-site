export default function Home() {
  const puppies = [
    {
      name: "Luna",
      gender: "Female",
      eyes: "Blue",
      coat: "Wooly",
      size: "Mini",
      ready: "June 20th",
      status: "Available",
      price: "$3,500",
    },
    {
      name: "Storm",
      gender: "Male",
      eyes: "Blue",
      coat: "Plush",
      size: "Toy",
      ready: "June 28th",
      status: "Reserved",
      price: "$4,000",
    },
  ];

  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Raining Pomskies</h1>
      <p>Quality pomsky puppies raised in the heart of Oklahoma</p>
      <p><strong>Embark Tested</strong></p>

      <h2>Available Puppies</h2>

      {puppies.map((dog, index) => (
        <div key={index} style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "15px",
          marginBottom: "15px"
        }}>
          <h3>{dog.name}</h3>
          <p>Gender: {dog.gender}</p>
          <p>Eyes: {dog.eyes}</p>
          <p>Coat: {dog.coat}</p>
          <p>Size: {dog.size}</p>
          <p>Ready: {dog.ready}</p>
          <p>Status: {dog.status}</p>
          <p><strong>{dog.price}</strong></p>
        </div>
      ))}
    </main>
  );
}
