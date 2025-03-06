 /*array is collection of multiple data types or elements 
enclosed in square brackets under a single variable...*/

const arr = [1, 2, 3, 4, "hii"] //array in js can be resizeable
console.log(arr[0]);
console.log(arr[3]);//acces elements of array
const avengers = ["thor", "iron man"]
const dost = new Array(1, "you")
console.log(dost[1]);

/*copy op creates shallow and deep copy in js
shallow--changes occures in original array shares same reference point
deep--changes does not occures in original 
only copied array is changed as it does not share same reference variable.*/

//methods of array............

//push pop...
dost.push("nobody")
console.log(dost);
dost.pop()
console.log(dost)


//shift unshift includes indexof
dost.unshift(9)
console.log(dost)
dost.shift()

console.log(dost.includes("tera"))
console.log(dost.indexOf("you"))

//Join
const newdost = dost.join()
console.log(dost);
console.log(newdost)

console.log(typeof(dost));
console.log(typeof(newdost))// values are converted into string
 

//slice and splice...........
const s=[1,2,3,"no",4,5,"riya"]
console.log("A",s)
const new1 =s.slice(1,5) //returns section & changes are not reflcted in original array.
console.log(new1);
console.log("B",s)

const new2 =s.splice(1,5)//manipulates original array
console.log(new2)
console.log("C",s)