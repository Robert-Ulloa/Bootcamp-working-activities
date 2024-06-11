const shoppingFormEl = $('#shopping-form');
const shoppingListEl = $('#shopping-list');
const listValue = $('input[name="shopping-input"]');


// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

function handleFormSubmit(event) {
    event.preventDefault();
    
    const listEl = $('<li>');
    listEl.text(listValue.val());
    
    shoppingListEl.append(listEl);
    
    $('input[type="text"]').val('');

}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', handleFormSubmit);
