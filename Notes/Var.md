# VARIABLES.....variable is a container that stores value
console.log("variables in javascipt");
```
var a = 5;
var b = "riya";
var c = 5;
console.log(typeof (a), typeof (b), typeof (c)); //gives type of js variable.
```


## Var vs Const
```
const a1= 6;
// not allowed as const are not changed a1=a1+1; 
console.log(a1); 
let blockscope = 77;
var globalscope = 99;
console.log(blockscope,globalscope);
{
    let blockscope =88;
    var globalscope = 44;
    console.log(blockscope,globalscope);
}
console.log(blockscope,globalscope);//77,44 bcoz var is globalscoped.
```
# Case senstive..
```
var d = "Riya";
console.log(b == d); // false
```

console.log("javascript");
```
var a= 45;
var a=4; //var can be reclared and updated
//let b= "miss" this is nit possible because let can't be reclared it is only updated;
//b=5; updated hokar 4 ho jayega..
const name = "riya shukla"; //this identifier can't be changed or redeclared
let b= "riya";
{
    let b= "mohan";
}
console.log(b);
//primtive data type in java script
let i=null;
let u=44;
let c = BigInt(444);
console.log(typeof(u));
```
## .....................................practice set 1.........................
```
let n = "oo";
let h= 7;
console.log(n+h);
console.log(typeof(n+h));
const p{
    n
}
```
--- wap to store name  and mobile of student..
```
let student = {
    Name: "Riya",
    mobilenum: "9399785612"
}
console.log(student);
```

---wap to create a variable of type string and try to add numbers to it.
```
let a = "mohan";
console.log(a + 6);

//use typeof operator to find type of above question
console.log(typeof (a + 6));

const obj = {
    n: "palaya",
}
obj.n = "5",
    obj.p = "mine",
    console.log(obj);
```
---word meaning dictonary
```
let dictonary = {
    despair: "A state where hope is missing",
    cargo: "The goods which are being carried",
    Criticize: "To say something against",
    Invert: "To change the normal position of something",
}
console.log(dictonary);

```



















