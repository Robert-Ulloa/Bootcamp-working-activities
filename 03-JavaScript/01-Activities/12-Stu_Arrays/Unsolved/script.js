// WRITE YOUR CODE HERE
const students = ["Roberto", "Neil", "Gypzie", "David", "Dilan"];
console.log(students.length);


console.log(`Welcome to the class, ${students[0]}.`);
console.log(`Welcome to the class, ${students[1]}.`);
console.log(`Welcome to the class, ${students[2]}.`);
console.log(`Welcome to the class, ${students[3]}.`);
console.log(`Welcome to the class, ${students[4]}.`);

students[0] = "Robert";

if (students[0] === "Robert") {
    console.log(` ${students[0]} is in class!`);
}

