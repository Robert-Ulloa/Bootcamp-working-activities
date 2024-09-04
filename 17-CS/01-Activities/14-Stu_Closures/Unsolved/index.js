// TODO: Complete the 'counter' function below.
function counter() {
    let count = 0; //Private variable `count` that is only accesible within the `counter`  function/

    //return an obeject with the `increment` method that modifies the `count` variable.
    return {
        increment: function() {
            count += 1 ; // increment the count by 1.
            return count; // return the updated count.
        }
    };
}

module.exports = counter;
