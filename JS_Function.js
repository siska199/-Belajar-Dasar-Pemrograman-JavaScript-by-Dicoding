function multiply(a, b){
    return a*b
}

console.log(multiply(3,4))


function greeting(name, language){ /*Parameter tidak perlu didefinisikan dengan let, var atau const*/
    if(language=="English"){
        console.log(`Good Morning ${name}!`)
    }
    else if(language=="French"){
        console.log(`Bonjour ${name}!`)
    }
    else {
        console.log(`Selamat Pagi ${name}!`)
    }
    
}

greeting("Roby", "English")

let result = multiply(9.8,9)
console.log(result)

/*Expression fuction adalah fungsi yang tidak bernama */
const greeting1 = function(name1, language1){
   if(language1=="English"){
       return `Good Morning ${name1}!`
    }
    else if(language1=="French"){
        return `Bonjour ${name1}!`
    }
    else {
        return `Selamat Pagi ${name1}!`
    }
}

console.log(greeting1('Roni','Indonesia'))


/*Parameter dari fungsi dapat berupa tipe data apapun, mulai dari string, number, object, bahkan fungsi lain */

/*Jika parameter fungsi adalah object kita dapat memanfaatkan destructing object uuntuk mendapatkan nilainya */

const user1 = {
    id : 24,
    displayName: "Keren",
    fullName: "Kylo Ren"
};

function introduce(user){
    const {displayName, fullName}=user
    console.log(`${displayName} is ${fullName}`)
}
introduce(user1)

/*Lebih sederhana*/
function introduce1({displayName, fullName}){
    console.log(`${displayName} is ${fullName}`)
}
introduce(user1)

/*Memberikan nilai defalt pada parameter*/

function exponentsFormula(baseNumber, exponent=2){
    let result = baseNumber**exponent
    console.log(`${baseNumber}^${exponent} = ${result}`)
}

exponentsFormula(10, exponent=2)

/*Rest parameter (...) berfungsi untuk menggabungkan beberapa elemen
menjadi satu array. */

function sum(...numbers){
    let result = 0;
    for (let number of numbers){
        result +=number;
    }
    return result;
}

console.log(sum(1,2,3,4,5,67,9))

/*Arrow Function : Function didefinisikan menggunakan tanda panah atau fat arroe (=>).
Tentunya penulisan arrow function ini akan lebih singkat
*/

/*Regular function dapat berupa function declaration dan function expression*/

//function declaration
function sayHello(great){
    console.log(`${greet}!`)
}

//function expression
const sayHello1 = function(name){
    console.log(`Nama saya ${nama}!`)
}

/*Arrow function hanya berupa expression function saja */


const sayHello11 = (greet) =>{ /*Tidak perlu menggunakan keyword function*/
    console.log(`${greet}!`)
}

/*Jika fungsi hanya memiliki 1 parameter maka kita tidak perlu memberikan tanda kurng pada parameter tersebut*/

const sayName = name =>{
    console.log(`Nama saya ${name}`)
}
sayName("Siska")

/*Jika tidak ada parameter tanda kurung tetap ditulis namun kososng*/
const sayHello111 = () =>{
    console.log("Selamat pagi semuanya")
}
sayHello111()

/*Ketika body dari function hanya terdiri dari satu baris maka kita bisa menghapus kurung kurawal */
const sayHello2 = () => console.log("Selamat pagi semuanya")

sayHello2()

//Khusus fungsi satu baris tidak perlu menggunakan return:
const multiply1 = (a,b) => a*b
console.log(multiply(6,10))


// Penting!!!
function kali(num){
    const total = num*num //jika variabel total tidak di definisika dengan let, const atau var maka akan menjadi variabel global
    return total
}

let total = 900
console.log(total)

//return ++counter; nilai counter bertambah 1

function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(7));