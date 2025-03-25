# Array in js
/*array is collection of multiple data types or elements 
enclosed in square brackets under a single variable...*/
```
const arr = [1, 2, 3, 4, "hii"] //array in js can be resizeable
console.log(arr[0]);
console.log(arr[3]);//acces elements of array
const avengers = ["thor", "iron man"]
const dost = new Array(1, "you")
console.log(dost[1]);
```
/*copy of creates shallow and deep copy in js
shallow--changes occures in original array shares same reference point
deep--changes does not occures in original 
only copied array is changed as it does not share same reference variable.*/

# Methods of array............

## push pop...
```
dost.push("nobody")
console.log(dost);
dost.pop()
console.log(dost)
```

## shift unshift includes indexof
```
dost.unshift(9)
console.log(dost)
dost.shift()

console.log(dost.includes("tera"))
console.log(dost.indexOf("you"))
```

## Join
```
const newdost = dost.join()
console.log(dost);
console.log(newdost)

console.log(typeof(dost));
console.log(typeof(newdost))// values are converted into string
 ```

## slice and splice...........
```
const s=[1,2,3,"no",4,5,"riya"]
console.log("A",s)
const new1 =s.slice(1,5) //returns section & changes are not reflcted in original array.
console.log(new1);
console.log("B",s)

const new2 =s.splice(1,5)//manipulates original array
console.log(new2)
console.log("C",s)
```

# Array2
```
const mine = ["Amit", "riya", "poonam"]
const other = ["shivani", "none", "Ashish"]
```

## push
```
mine.push(other)
console.log(mine)// array ke ander array print hoga
```

## concat
```
const dono = mine.concat(other)
console.log(dono) //do array properly merge ho gye
```

## spread operator ke through
```
const all = [...mine, ...other]
console.log(all)
```

## using flat
```
const a = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10]]
const r = a.flat(Infinity)
console.log(r)

console.log(Array.isArray("riya"))// return false as it is not array
```
## To create an array using from
```
console.log(Array.from("riya"))

console.log(Array.from({ name: "mirza" })) //it will return an empty array as it cannot convert it into array


let sc = 10;
let sc1 = 20;
let sc2 = 30;
console.log(Array.of(sc, sc1, sc2));
```