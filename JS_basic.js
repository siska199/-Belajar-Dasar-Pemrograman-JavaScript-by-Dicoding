console.log("Belajar Java Script");
//Membuat Variabel menggunakan let 
let FirstName;
FirstName = "Siska Apriana";
console.log(FirstName);

//Menginialisasi variabel dengn const (nilai tidak dapat dirubah lagi)
const z ="siska uwu banget"
console.log(z);


//Menghilangkan ambiguitas
let StringLossAmbigu = "sisk 'apriana' ";
console.log(StringLossAmbigu);
const answer = '"I think it\'s awesome!" he answered confidently';

console.log(answer);

console.log("Windows path: C:\\Program Files\\MyProject");

//String Interpolasi
let myName = "siska"
console.log(`Hello, my name is ${myName}`)
/* 
untuk mendefinisikan string template, Anda perlu menggunakan backticks (`), biasanya 
terletak di keyboard di sebelah kiri tombol 1).  
*/

// Tipe Data Boolen
let a = 10
let b = 2

let isGreater = a>b
let isLess = a<b
console.log(isGreater)
console.log(isLess)

//Penggunaan Null:
let isNull = null
console.log(isNull)

//Penggunaan Symbol
let id = Symbol("id")
console.log(id)


//loopingdengan FOR
//Cara 1:

for (i=0; i<=5;i++){
    console.log(i)
}

//cara looping baru (Cara 2:)
let myArray = ["siska", "kyuuchan"]
for(const arrayItem of myArray){
    console.log(arrayItem)
}

//looping dengan While

while (i<=100){
    console.log(i);
    i++
}

//looping dengan do-while
let ii = 1;
do{
    console.log(ii)
    ii++
}while(ii<=100)


const firstString = "Hello";
const secondString = "JavaScript";

console.log(firstString + secondString);
let myVariable = 12;
myVariable = 30;
myVariable = 5;

console.log(myVariable);


let x;
x = 7;
x = 'JS is great';
console.log(x);
