export default function ProductDetails() {
  const products = [
    { id: 1, name: "Keyboard", price: 799 },
    { id: 2, name: "Mouse", price: 399 },
    { id: 3, name: "Monitor", price: 1999 },
  ];

  const productId = 3;
  const product = products.find((product) => product.id === productId);

  return (
    <article>
      <h2>{product.name}</h2>
      <p>{product.price} kr.</p>
    </article>
  );
}
