const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// TODO: Complete the linearSearch function below.
//Should be implement an algorithm that is O(n)...
const linearSearch = (array, element) => {
    // Loop through each elemet in the array
    for (let i = 0; i < array.length; i++ ) {
        // Check if the current array element matches the search element
        if (array[i] === element ){
            // Return the index of the elemt if found
            return i;
        }
    }
    // Return -1 if the element is not found in the array
    return -1;
};

module.exports = {linearSearch};