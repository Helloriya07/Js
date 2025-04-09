# Sync Js--
sync matalb ek ke baad dusra hoga,jab tak ek command complete naa ho,dusra nahi hoga.

# Async Js--
Async matlab saare kaam ek saath shuru kardo,jiska answer pahle aajaye uska jawaab dedena 

setTimeout
setInterval
promises            
fetch
axios
XMLhttpRequest // eska kahi use hoga to async code and rest is sync.

```
//example -- apne facebook se photo lane ke liye server se request bheji--code1 (ye code execute hone k bad jb complete hoga)
--facebook se request accept hone ke baad show hogi--code2 (tab ye code chalega) 
```
//demo--
```
setTimeout(callback function(){},timeinms) //callback func hamesha async coe mein answer ane k bad chalega.
console.log("pahle ye chalega)
setTimeout(function(){
    console.log("2 sec bad chalegi);
},2000
```

# Js async hai hi nhi --- hein<> yess!!
* javascript is single threaded matlb ek bar me ek hi process execute hoti hain

* so basically esme jo sync code hota hai wo main stack me jata hai or jo async code hota hai wo side stack me.
* main stack ka code pahle execute hoga or jab main stack matlb sync code execute ho jayega tab side stack ka code execute hota hai.
```
console.log("hey")
console.log("hey1")
setTimeout(function(){
console.log("hey2")
},0);

console.log("hey3")

//output will be hey hey1 hey 3 and hey2 as hey 2 is async it will be executed after sync code.
```
# Callback --
* Callback ek function hota hai , ye sirf tab chalata hai jab async code ka completion hojata hai.

# Promises--
* Promise is a constructor function.
* Promises ----case1: resolve--variable then
*  ----case 2: reject--variable catch 

```
var ans = new Promise((res,rej)=>{
    if(true){
        return res();
    }
    else{
        return rej();

    }
})
ans
.then(function(){
    console.log("resolve ");
    })
    .catch(function(){
        console.log("reject")
    })
```
// user will ask for a number btw 0-9 and if num is below 5 resolve if not reject.
```
var ans = new Promise((res,rej)=>{
   var n= Math.floor(Math.random()*10);
   if(n<5){
    return res();
    }
    else
    {
        return rej();
    }
   
})
ans.then(function(){
    console.log("below");

})
.catch(function(){
    console.log("above");
})
```
// Agar particular line of code of ek ke bad ek execute karana hai to ayese promise banate hai
```
var ans = new Promise(function(res,rej){
    return res("sabse pahle promise create kro")
})
var p2= ans.then (function(data){
    console.log(data);
    return new Promise (function(res,rej){
        return res("phir pahle ke then ke ander dusra promise");
    })
})
var p3 = p2.then(function(data){
    console.log(data);
    return new Promise ( function (res,rej){
        return res("ayese hi agar ek ke bad dusri promise banani hai to karo");
    })
})
```
# Fetch , Async-Await..
* Fetch ka use external link se data collect krne k liye
* Koi bhi esa function jisme aap async code likhege, kyoki async code hai to aap promises ka estemal kar skate hai,jab uska answer ayega to then lagate hai , to then ko bar bar lagane se bachne ke liye , aap async await ka estemal karte hai
```
function abcd(){
    fetch ("url")
    .then(function(raw){
        return raw.json();
    })
    .then(function(data){
        console.log(data);
    });
}
abcd();
```
// esi code ko apna asycs-await ka use karke likh sakte
```
async function abcd(){
    let raw = await fetch('url');
    let ans = await raw.json();
    console.log(ans);
}
abcd();
```
### Concurrency => js mein async and sync code ek sath process ho raha that is concurrency..
### Parallelism => focus jyda karta hai different processors and unke cores par kaam chalane ko.