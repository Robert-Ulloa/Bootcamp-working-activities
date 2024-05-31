function keydownAction(event) {
  // TODO: Complete keydown function
  document.querySelector("#key").textContent = event.key;
  document.querySelector("#code").textContent = event.keyCode;
  document.querySelector("#status").textContent = "KEYDOWN Event";
}

function keyupAction() {
  document.querySelector("#status").textContent = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event

document.addEventListener("keydown", keydownAction);
