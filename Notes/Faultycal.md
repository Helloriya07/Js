# Faulty calculator...
```
let random = Math.random()
let a = parseFloat(prompt("enter num 1"))
let b = parseFloat(prompt("enter numb2"))
let c = prompt("enter operation")
console.log(random)
let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
};
if (random >= 0.1) {
    if (c == "+") {
        console.log(a - b);
    }

else if (c == "*") {
    console.log(a + b);
}
else if (c == "-") {
    console.log(a / b);
}
else if (c == "/") {
    console.log(a ** b);
}
else {
    console.log("invalid input")
}
}
else {
    console.log("no calculation performed")
}
```