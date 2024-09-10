const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO: Why is the 'binarySearch' function not running properly??
function binarySearch(array, element) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    // Check if the element is present at mid
    if (array[mid] === element) {
      return mid; // return the index if element is founf
    } else if (array[mid] < element) {
      start = mid + 1; // if the element is greater, ignored left half
    } else {
      end = mid - 1; // if element is smaller, ignore right half
    }
  }
  return -1; // retunr -1 if the element is not found
}

console.log(binarySearch(arr, 7)); // testing to see if it returns the correct index

module.exports = binarySearch;
