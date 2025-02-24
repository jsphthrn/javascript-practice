/*

let user, password;

user = prompt("User");

if (user === "Admin") {
    password = prompt("Password");
    if (password === "TheMaster") {
        alert("Welcome")
    } else if (password) {
        alert("Wrong password");
    } else {
        alert("Cancelled")
    }
} else if (user) {
    alert("I don't know you");
} else {
    alert("Cancelled")
}

*/

/* const select = document.querySelector("select");

const body = document.querySelector("body");

document.body.style.padding = "10px"; // set whole page body padding to 10 px

function update(bgColor, textColor) { // declares update function
    body.style.backgroundColor = bgColor; // setting the background color for tag html.
    body.style.color = textColor; // setting the default text color for text included inside html document.
}



select.addEventListener("change", () =>
    select.value === "black"
    ? update("black", "white")
    : update("white", "black"),
);
*/

let ask = (question, yes, no) => (confirm(question)) ? yes() : no();

ask("Do you agree?", () => alert("You agreed"), () => alert("You canceled the execution"));