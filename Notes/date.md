# Date in js
```
let mydate= new Date() //declaration
console.log(mydate)
console.log(typeof(mydate))
```

# Methods of date.
```
console.log("toString()",mydate.toString())
console.log("toDateString()",mydate.toDateString())
console.log("toLocaleString()",mydate.toLocaleString())
console.log("toLocaleDateString",mydate.toLocaleDateString())
console.log("getTime",mydate.getTime())
console.log("toJSON",mydate.toJSON())

let crnewDate = new Date(2024,0,26,4,30) // declaration
console.log(crnewDate);

let newDate = new Date("2024/1/14") //yy-mm-dd
console.log(newDate.toLocaleString())

let newDate1 = new Date("2/16/2023") //mm-dd-yy
console.log(newDate1.toLocaleString())
```

//****************************************//
```
let myTimeStamp =  Date.now()
console.log(myTimeStamp)

console.log(newDate.getTime()) //convert date into miliseconds

console.log(Math.floor(Date.now()/1000))

let f = new Date()
```

# Methods..
```
console.log(f.getTime())
console.log(f.getMonth()+1)
console.log(f.getFullYear())
console.log(f.getDay())
console.log(f.getHours())
```


