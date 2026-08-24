import reactRouterLogo from "../assets/example.svg";
import Button from "../sandbox/Button.jsx";
import Course from "../sandbox/Course.jsx";
import CourseCard from "../sandbox/CourseCard.jsx";
import FilteredProducts from "../sandbox/FilteredProducts.jsx";
import Greeting from "../sandbox/Greeting.jsx";
import NameChanger from "../sandbox/NameChanger.jsx";
import ProductDetails from "../sandbox/ProductDetails.jsx";
import ProductList from "../sandbox/ProductList.jsx";
import StudentCard from "../sandbox/StudentCard.jsx";
import StudentList from "../sandbox/StudentList.jsx";
import Teacher from "../sandbox/Teacher.jsx";
import Welcome from "../sandbox/Welcome.jsx";

const publicLogoUrl = `${import.meta.env.BASE_URL}logo.webp`;

export default function HomePage() {
  const name = "Anna";
  const education = "Multimedia Design";
  const email = "anna@example.com";

  const student = {
    name,
    education,
    email,
  };

  return (
    <>
      <header>
        <h1>Hjem</h1>
      </header>
      <main>
        <article>
          <h2>Displaying images in React</h2>

          <h3>1. Import from src/assets</h3>
          <p>
            Import the image file at the top of your component. The image is
            bundled with your app and gets a unique filename for better caching.
          </p>
          <img src={reactRouterLogo} alt="Example SVG" className="img-small" />

          <h3>2. Public folder</h3>
          <p>
            Place the image in the /public folder and reference it by path. The
            file is served directly without any processing.
          </p>
          <img
            src={publicLogoUrl}
            alt="Favicon from public folder"
            className="img-small"
          />

          <h3>3. External URL</h3>
          <p>
            Use a full URL to load an image from the internet, just like in
            regular HTML.
          </p>
          <img
            src="https://picsum.photos/200"
            alt="Random external image"
            className="img-medium"
          />
        </article>
        <Teacher />
        <Welcome />
        <Greeting name="Anna" />
        <Greeting name="Peter" />
        <Greeting name="Sara" />
        <Button />
        <Course />
        <StudentCard student={student} />
        <CourseCard title="JavaScript" teacher="Anna" duration={5} />
        <StudentList />
        <NameChanger />
        <ProductList />
        <FilteredProducts />
        <ProductDetails />
      </main>
    </>
  );
}
