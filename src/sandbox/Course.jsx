export default function Course() {
  const course = {
    title: "JavaScript",
    teacher: "Anna",
    duration: 5,
  };

  return (
    <section>
      <h2>{course.title}</h2>
      <p>Underviser: {course.teacher}</p>
      <p>Varighed: {course.duration} uger</p>
    </section>
  );
}
