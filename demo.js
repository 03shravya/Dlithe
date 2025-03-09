// Primitive Types
let name = "Alice", age = 25, isStudent = true;
let height, emptyValue = null;
console.log(name, age, isStudent, height, emptyValue);

// Non-Primitive Types
let person = { name: "Bob", age: 30 };
let colors = ["Red", "Green", "Blue"];
let greet = () => console.log("Hello!");
console.log(person, colors);
greet();

// Variable Declaration
var x = 10;
let y = 20;
const z = 30;
console.log(x, y, z);

x = 15; y = 25; // Modifying variables
console.log(x, y);