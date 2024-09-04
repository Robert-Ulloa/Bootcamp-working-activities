const grades = [56, 78, 99, 85];

// TODO: Complete the 'findAverage' function below.
//'findAverage' function calculates the average of the average of an array of numbers
function findAverage(accumulator, currentValue, index, array) {
    //accumulate the sum of all grades
    accumulator += currentValue;

    //if it's the last element in the array, return the average
    if (index === array.length -1) {
        return accumulator / array.length
    }

    return accumulator;
}

// TODO: Pass the 'findAverage' into the reduce method.
//pass the 'findAverage' into the reduce method to calculate the average grade
let gradeAverage = grades.reduce(findAverage, 0); //start accumulation from 0

console.log(`The average grade is: ${gradeAverage}`);
