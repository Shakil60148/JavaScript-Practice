function displayGreeting(name, age) {
    alert("Hello, " + name + "! You are " + age + " years old.");
    if (age >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are a minor.");
    }
}

let userName = prompt("Enter your name:");
let userAge = parseInt(prompt("Enter your age:"));
displayGreeting(userName, userAge);