console.log("chalo padhai karte hain...")


# Methods...
```
document.body.firstElementChild

document.body.firstElementChild.childNodes

document.body.firstElementChild.children

document.body.firstElementChild.children[2].style.color="green";

document.body.firstElementChild.children[4].style.backgroundColor="pink";


document.body.firstElementChild.children[4].previousSibling

ocument.body.firstElementChild.children[2].previousElementSibling

document.body.firstElementChild.children[2].parentElement

document.body.firstElementChild.children[0].nextElementSibling
```
```
let boxes=document.getElementsByClassName("box")
console.log(boxes);

boxes[2].style.backgroundColor="blue";

//or id dekar bhi particular element ko select kr skte hain
document.getElementById("yellow").style.backgroundColor="yellow";

//inline css using js..it will select first box matches with .box
document.querySelector(".box").style.backgroundColor="orange";

//agar aap sare box ko select krege
console.log(document.querySelectorAll(".box"));//it will return a htmlcollection(nodelist)

//entire collection me property set krne k liye loop lgega!!
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="pink";
})
```
```
//using tag name..
console.log(document.getElementsByTagName("div"))

e=document.getElementsByTagName("div")
e[4].matches("#redbox")

// return false bcoz box 4 has no id.
e[6].matches("#yellow");
//return true

e[4].closest("#yellow")

e[4].closest(".container")

e[4].closest("html")

document.querySelector("body").contains(document.querySelector(".container"))
// returns true
```




