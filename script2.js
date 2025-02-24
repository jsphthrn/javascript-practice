function add7 (n) {
    return (n + 7);
}

function multiply (a, b) {
    return (a * b);
}

function capitalize (str) {
    str = str.toLowerCase();
    let a = str.charAt(0);
    a = a.toUpperCase();
    str = str.slice(1);
    return (a + str); 
}

function lastLetter (str) {
    return (str.charAt(str.length-1));
}