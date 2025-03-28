 # Let us understand First class , high order and callBack function ...
 ```
 const add = function(a,b){ // ye sabhi first class function hai jo variable to store kar sakte hain
 return a+b;
}
 const sub = function(a,b){
 return a-b;
}
 const mult = function(a,b){
 return a*b;
}
 const div = function(a,b){
    if(b===0){
        return "Cannot perform division";
    }
 return a/b;
 
}
//High order function as it is taking function as an argument
function calculate(a,b,operation){
    return operation(a,b); // callback function which is calling operation.
}
const num1=8;
const num2=5;

console.log("Add",calculate(num1,num2,add)); //callback function =>add,sub,mult,div
console.log("Sub",calculate(num1,num2,sub));
console.log("Multiply",calculate(num1,num2,mult));
console.log("Divide",calculate(num1,num2,div));
```

# Constructor function...
 * constructor function agar normal function ko new keyword use krke call kiya
 * new keyword is used to inside the function and returns an object with all prperties and method.
 ```
 function constrfun(){
    ths.property = value;
 }
 var pookie =new constrfun();
 ```
 * new keyword makes a new blank object and returns to the pookie.

 * New keyword : It is used to create a blank object whenever the constructor function is called.


 # iife : immediately invoked function or expression.
 * Function ko turant chalane ki kala  , is tarike se hum koi private variable bana payein.
 * iife ke ander private variables declare hote hai jinhe iife ke ander ki hum access kar sakte hai.
 
 ```
 (function(){

    var private =12; //private variable you can't access.

 })() //immediately function is called.
//function bante hi chal jayega.

```
* To access the private value-->
```
var ans = (function(){
     var private = 12;
     return{
        getter: function(){
             console.log(private);
        },
        setter:function(val){
            private = val;
        }
     }

})()
```
## Prototype ---
yaha par photo...

# Prototype Inheritance...
```
var human={
   name: "Riya Shukla",
   canFly: false,
   canTalk: true,
   canThink: true,
   haveEmotion : true,
}

var Riya ={
   willMakewebsite: true,
   isDoingGreat :false,
   WillDoDsa :  true,
}
Riya.__proto__ = human;
 ```

 # This Keyword --
 1) Global Scope -- this keyword gives Window
 ```
 console.log(this);
 ```
 2) Function Scope -- this keyword gives Window
 ```
 function lucky(){
    console.log(this);
 }
 ```
 3) In method Scope-- this keyword gives object
 ```
 var obj={
    bolo : function(){
        console.log(this);
    }
 }
obj.bolo();
```
* Note=> In any method this keyword always refer to parent object.

4) Event listner - this keyword is equal to whatever written before addEventListener,in the case button.
```
var button = document.querySelector("button");
button.addEventListener ("click",function(){
    this.style.backgroundColor="red";
});

```
# Call , Apply and Bind--
* Call ka use basically this ki by default value(window) ko change krne k liye hota hai.
* If you call a function using .call and whatever parameter you will pass will be assigned to the value of this.
* Use basically whenever you want to assign some other value to this we use call,apply,bind.
```
function gilli(val1,val2,val3){
    console.log(this,val1,val2,val3);

}
var obj={age:24}
gilli.call(obj,12,15,44);   //here obj is assigned to this and val1,val2,val3 values will be assigned respectively.

```
* Apply is same as call but only two paramerters can be passed an as argument while calling.
```
gilli.apply(obj,[11,22,33])  // array is used so that we can assign  values to every parameters

```
* Bind will bind obj to gilli function and will give a binded function.
```
var bindedfunc = gilli.bind(obj);
bindedfunc();                      

```
# Pure and Impure Function--
* Pure function always returns same output for same input.
* It will never change/update the value of a global variable.
```
 var global = 444;
function good(nice,bad){
    global = 888; // this is wrong , it will become impure function
    return nice*bad;
}
var dekho = good(2,2);
var dekho1 = good(2,2);
```
* Impure function which are not pure.

``` 
function dabba(val){
 
return Math.random()*val;

}
var ans1=dabba(2);
var ans2=dabba(2);
```