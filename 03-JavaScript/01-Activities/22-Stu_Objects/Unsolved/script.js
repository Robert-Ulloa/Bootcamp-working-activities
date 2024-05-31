// WRITE YOUR CODE BELOW
const customerDrink = {
    name: "Latte",
    sugar: 2,
    ready: false
};

console.log(`drink: ${customerDrink.name}, sugar: ${customerDrink.sugar}`)

if (customerDrink.ready ===false ) {
    console.log("Still in order queue");
}
else{
    console.log("Ready for pick-up");
}