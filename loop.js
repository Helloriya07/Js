//loops in js

for (let i = 0; i < 10; i++) {
    console.log(i);
}
let object = {
    name: "mish",
    role: "developer",
    institute: "youra",
}
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(key)

    }
}
let a =[1,2,3,4]
for (const iterator of object) {
    console.log(a[4]);

}
