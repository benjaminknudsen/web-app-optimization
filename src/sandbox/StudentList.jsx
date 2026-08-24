export default function StudentList() {
  const students = [
    { id: 1, name: "Anna", education: "Multimedia Design" },
    { id: 2, name: "Peter", education: "Web Development" },
    { id: 3, name: "Sara", education: "Multimedia Design" },
  ];

  return (
    <section>
      <h2>{students[0].name}</h2>
      <p>{students[0].education}</p>

      <h2>{students[1].name}</h2>
      <p>{students[1].education}</p>
    </section>
  );
}
