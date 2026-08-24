import { useState } from "react";

export default function NameChanger() {
  const [name, setName] = useState("Anna");

  return (
    <section>
      <p>{name}</p>
      <button onClick={() => setName("Peter")}>Change name</button>
    </section>
  );
}
