console.log("number in js")

const score = 400;
console.log(score); 


const bal = new Number(10000000)
console.log(bal); 

//methods of number
const num = 42000;
console.log("tostring",num.toString().length); 
console.log("toFixed",num.toFixed(2));
console.log("valueOf",num.valueOf()) 

const num1 = 1235.8566;
//gives precise value and round off the values.
console.log("toPrecision",num1.toPrecision(6))
console.log("toPrecision",num1.toPrecision(4)) 
console.log("toPrecision",num1.toPrecision(3))


console.log("toExponential",num1.toExponential(3))

const num3 = 100000
//put commas based on international standard
console.log("toLocaleString",num3.toLocaleString())
console.log("toLocaleString",num3.toLocaleString('en-IN')) 

//property in javascript
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.EPSILON)

