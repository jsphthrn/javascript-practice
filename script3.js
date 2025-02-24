const para = document.querySelector("p");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", setValue);


function isFizz (num) {
    if (num % 3 === 0) return true;
    else return false;
}

function isBuzz (num) {
    if (num % 5 === 0) return true;
    else return false;
}

function getNext (num) {
    if (isFizz(num) && isBuzz(num)) {
        return "FizzBuzz";
    } else if (isFizz(num) && !isBuzz(num)) {
        return "Fizz";
    } else if (!isFizz(num) && isBuzz(num)) {
        return "Buzz"
    } else if (!isFizz(num) && !isBuzz(num)) {
        return `${num}`;
    }
}

function fizzBuzz (num) {
    let final = "1";
    let i = 2
    while (i <= num) {
        final = `${final}, ${getNext(i)}`;
        i = i + 1;
    }
    return final;
}

function setValue() {
    (isNaN(input.value)) 
    ? document.getElementById("buzzfizz").innerHTML = "Not a number" 
    : document.getElementById("buzzfizz").innerHTML = fizzBuzz(input.value);
}
