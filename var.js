//VARIABLES.....variable is a container that stores value
console.log("variables in javascipt");
var a = 5;
var b = "riya";
var c = 5;
console.log(typeof (a), typeof (b), typeof (c)); //gives type of js variable.

//case sentitive
var d = "Riya";
console.log(b == d); // false

//..............var vs let vs const..............
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















