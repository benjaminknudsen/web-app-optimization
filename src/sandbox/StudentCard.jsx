export default function StudentCard({ student }) {
  return (
    <article>
      <h2>{student.name}</h2>
      <p>E-mail: {student.email}</p>
      <p>Uddannelse: {student.education}</p>
    </article>
  );
}
