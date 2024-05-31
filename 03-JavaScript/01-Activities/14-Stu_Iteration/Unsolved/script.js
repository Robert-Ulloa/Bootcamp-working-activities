// WRITE YOUR CODE BELOW
const students = ["Roberto", "Neil", "Gypzie", "David", "Dilan"];
console.log(students.length);

for (let i = 0; i < students.length; i++) {
    console.log(`${i + 1}) ${students[i]}`);
}
for (const name of students) {
    console.log(`Great to see you ${name}`);
}