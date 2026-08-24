export default function CourseCard({ title, teacher, duration }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>Underviser: {teacher}</p>
      <p>Varighed: {duration} uger</p>
    </article>
  );
}
