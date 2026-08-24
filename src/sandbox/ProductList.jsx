export default function ProductList() {
  const products = [
    { id: 1, name: "Keyboard", price: 799 },
    { id: 2, name: "Mouse", price: 399 },
    { id: 3, name: "Monitor", price: 1999 },
    { id: 4, name: "Webcam", price: 599 },
  ];

  return (
    <section>
      <h2>Produkter</h2>

      {products.map((product) => (
        <article key={product.id}>
          <h2>{product.name}</h2>
          <p>Pris: {product.price} kr.</p>
        </article>
      ))}
    </section>
  );
}
