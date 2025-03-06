//collection of character is string
let name ="riya";
console.log(name);
console.log(name.length);
let friend ='Anaya';
//let a ='vinod" dont do this....
console.log(friend);
console.log(name[1]);
console.log(name[2]);

//Template literals...
let b1 = "jaggu";
let b2 ="haggu";
let s=`b1 is friend of b2`
console.log(s);
let s1=`${b1} is friend of ${b2}`/*agar badmosh ko variable insert 
                     krna hai template literal me directly --${}string interpolation*/
console.log(s1);

//Escape Sequence Characters
let pani ='wat\'er';
let ppani ='wa\nter'
console.log(pani.length);
//it will treat 'er'as single character--qki escape sequence character hai wo bhaiahab!!
console.log(ppani);
let n='Adam D\'Angeeb'
let n1="Adam D\"Angeeb";
let n3="yo yo honey paji \n yo bro"
