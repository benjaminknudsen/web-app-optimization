console.log("Sandbox initialized");
console.log(teachers);

import { teachers } from "./teachers.js";

function showWelcomeMessage() {
  console.log("Welcome to the sandbox!");
}

showWelcomeMessage();
showWelcomeMessage();
showWelcomeMessage();

const sayHi = (name) => {
  return `Hello, ${name}!`;
};

console.log(sayHi("Benjamin"));
console.log(sayHi("Mette"));
console.log(sayHi("Jonas"));

const multiply = (a, b) => a * b;

console.log(multiply(4, 5));

function calculateTotal(price, quantity) {
  return price * quantity;
}

const total = calculateTotal(100, 3);
console.log(total);

const course = {
  title: "JavaScript og React",
  teacher: "Benjamin",
  duration: 8,
  isActive: true,
};

const { title, teacher } = course;

console.log(title);
console.log(teacher);
console.log(course);
console.log(course.title);
console.log(course.teacher);
console.log(course.duration);
console.log(course.isActive);

console.log(course["title"]);

const name = "Anna";
const age = 24;
const email = "anna@example.com";

const student = {
  name,
  age,
  email,
};

console.log(student);

const courses = ["JavaScript", "React", "WordPress", "UX"];
const [firstCourse, secondCourse] = courses;

console.log(courses);
console.log(courses[0]);
console.log(courses[2]);
console.log(courses.length);
console.log(firstCourse);
console.log(secondCourse);

const products = [
  { id: 1, name: "Keyboard", price: 799 },
  { id: 2, name: "Mouse", price: 399 },
  { id: 3, name: "Monitor", price: 1999 },
  { id: 4, name: "Headphones", price: 599 },
];

const productNames = products.map((product) => product.name);
const affordableProducts = products.filter((product) => product.price < 800);
const product = products.find((product) => product.id === 2);

console.log(productNames);
console.log(affordableProducts);
console.log(product);
console.log(product.name);
