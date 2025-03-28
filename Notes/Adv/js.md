# GETTING STARTED WITH JAVASCRIPT.

1. Version of js-

- ES5 (old)--var tha
- ES6 (new)--esme let or const aya

2. Difference btw var let const

- Var-- function scoped hota hai jaha
- Let & const -- function braces scope hota hai
  Example--

```
function abdc{
for(var i=1;i<=13;i++){
    console.log(i)
}
console.log(i)
}
abdc();

function abdc{
for(let i=1;i<=13;i++){
    console.log(i)
}
console.log(i)
}
abdc();
```

- var itself adds to window object but let doesn't.

## Window object

- is something or feature that is not present in JS. Js asks windows for it.
  window is box of feature console me jakr window type krke dekh skte hai...ex- alert,scroll,console etc are inside window.

## Execution Context

- container where function's code is executed basically it contains 3 chize var, function and lexical environment.
- it is created whenever the function is called.

## Lexical environment

Esme Scope and Scope chain ka chart present rahta hai ex-- nested function me koi bhi function apne parent fun ki property ko access kar skta hai but it cannot access the child function element.

- Maltab ghar ke property ke Jaise, ki maa-baaap ke paiso me kiska hak or unke bacche ke paiso pe kiska hak hoga, 

## How to copy reference values

let a=[1,2,3,4,5]
let b=[...a];

let obj={name:"riya"}
let obj2={...obj};

## Truthy vs Falsy

Everything in js is dividied into two parts 1)Truthy 2)Falsy

- Falsy values are--- 0, false, undefined, null, NaN, document.all
- Enke alawa baki sab truthy me ata hain..

## Switch

```
switch(case){
   case 1:
   //statement;
   break;

   default:
   //statement
}
```

# ForEach | Forin
* ForEach ka use array ke liye hota hai and it does'nt change the original array values.
``` 
var array =[1,2,55,89,7,5]
array.forEach(function(val){ //high order function
    console.log(val);
})
```

* For in object me loop chalane ke liye
 ```
let obj={
    name:"riya",
    age: 22,
    mobilenumber:7470456095,

 }
 for(var key in obj){
    console.log(key,obj[key]);
 }
```
## Dowhile =:
```
var a=8;
do{
  console.log("Hui");
  a++;
}
while(a<4)
```
## CallBack Function...
*  callback function as an argument pass kiya jata hai 
*  callback is executed after completion of some code which usually envoloves third party.

```
setTimeout(function(){
   console.log("hey");
 },2000);

```
* yaha par jab 2 sec jab ho jayege tab callback function chalega kaam complete hone k bad.

## First Class Function
* js me function ko hum as an argument pass kar sakte hain to another function
* like jaha hum normal variables me value rakhte hai uha par function rakh skte hain..
* First call function are treated as a normal variable.
```
const var = function oppa();

function sayYes()
{
  console.log("Yes");
}
const response = sayYes();
response(); //calling function using variable.
  ```
  * here function is treated as variable and value.

  ## High Order Function..
   * A high order function takes another function as an parameter or returns a function or both.
   ```
   function highOrder(callback){
    calling();
   }
   highorder(function(){
    console.log("I am callback function");
   });
```

  ## How arrays are made behind the scenes..
 * let arr = [111,202 ,3,4,5] 
 * -> this is not array it is object , js convers it as...
 ```
  let arr={
    0:111,
    1:202,
    3:3,
    4:4,
    5:5,
  } //typeof[]=object.

  
  !! kaise pata kare .....
  Array.isArray([])-->true,hai array
  Array.isArray({})-->false,hai object
  ```
