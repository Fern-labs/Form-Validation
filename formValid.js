// event listner for Input
// span to display bellow confrim password
// use .value
// use a function

const Password = document.getElementById("passw");
const passCheck = document.getElementById("passcheck");
const msgDisplay = document.getElementById("msg");

function formValid() {
  if (Password.value === passCheck.value) {
    msgDisplay.style.color = "green";
    msgDisplay.textContent = "Passwords Match";
  } else {
    msgDisplay.style.color = "Red";
    msgDisplay.textContent = "Passwords Do Not Match";
  }
}

passCheck.addEventListener("input", formValid);
Password.addEventListener("input", formValid);
