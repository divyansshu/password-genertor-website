
// defining different types of character strings
const keys = {
    symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-=",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789"
}

// creating an array of objects that returns 1 random character  from these strings 
const getKeys = [
    {name: "upperCase", fn: function upperCase() {
        return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length-1)];
    }},

    {name: "lowerCase", fn: function lowerCase() {
        return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length-1)];
    }},

    {name: "symbol", fn: function symbol() {
        return keys.symbol[Math.floor(Math.random() * keys.symbol.length-1)];
    }},

    {name: "number", fn: function number() {
        return keys.number[Math.floor(Math.random() * keys.number.length-1)];
    }},
];

// creating a random password generator function 
function createPassword() {

// check if at least one checkbox is checked 
const upper = document.getElementById("upperCase").checked;
const lower = document.getElementById("lowerCase").checked;
const symbol = document.getElementById("symbol").checked;
const number = document.getElementById("number").checked;

if(upper + lower + symbol + number === 0) {
    alert("please check at least one checkbox");
    return;
}
const passwordBox = document.getElementById("passwordBox");
const length = document.getElementById("length").value;
let password = "";

while(length > password.length) {
    let keyToAdd = getKeys[Math.floor(Math.random() * getKeys.length)];
    let isChecked = document.getElementById(keyToAdd.name).checked;
    if(isChecked) {
        password += keyToAdd.fn();
    }
}
passwordBox.innerHTML = password;
}

// created a function to copy the password
function copyPassword() {
    const textArea = document.createElement("textarea");
    const password = document.getElementById("passwordBox").innerText;

    if(!password) {
        return;
    }

    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
    alert("password copied to clipboard");
}




