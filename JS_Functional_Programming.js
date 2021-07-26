/* Paradigm Functional Programming (FP)  adalah paradigma pemrograman dimana 
proses komputasi didasarkan pada fungsi matematika murni.
FP lebih berfoku pada "what to soleve (gaya deklaratif)" dibanding "how to solve" yang dianut gaya imperatif*/

//Perbedaan antara deklaratif dan imperatif:
//Imperatif
const names = ['Harry', 'Ron', 'Jeff', 'Thomas']
const newNamesWithExMark = [];
for(i =0; i<names.length;i++){
    newNamesWithExMark.push(`${names[i]}`)
}

//Deklaratif
const newNamesWithExMark1 = names.map((name)=> `${name}!`);
console.log(newNamesWithExMark1)

/*Konsep-Konsep Functional Programming:*/

/*1 Pure Function */
//Contoh yang tidak pure function karena memengaruhi nilai yang berada diluar

const createPersonWhiteAge = (age, person) => {
   person.age = age; //person adalah Object
   return person
}

person1 = {}
console.log(createPersonWhiteAge(18,person1))
console.log(person1) //Nilai person1 berubah 

//Contoh pure function: kita akan memanfaatkan destructing object
const createPersonWhiteAge1 = (age, person) =>{
    return {...person, age}
}

const person2 = {name : 'Bobo'};

const newPerson2 = createPersonWhiteAge1(10, person2)
console.log({person2,newPerson2});

/*2. Immutability --> immutable berarti sebuah objek tidak boleh
diubah setelah objek tersebut dibuat*/

//Contoh penerapan immutability
const user = {
    firstname: 'Harry',
    lastName : 'Protter' }
const createUserWithLastName = (newLastName, user) => {
    return {...user,lastName: newLastName}
} 

console.log(createUserWithLastName('Potter',user))
console.log(user);

/*3. Rekursif merupakan teknik pada sebuah function yang memanggil dirinya sendiri*/

/*4. Higher-Order Function, JavaScript memiliki kemampuan First Class Functions karenanya fungsi pada JavaScript 
dapat diperlakukan layaknya data (kita dapat menyimpan functioan di dalam variable)*/

/*
Higher-Order Function menjadi konsep pada paradigm FP. Higher-Order function
merupakan fungsi yang dapat menerima fungsi lainnya pada argumen; mengembalikan
sebuah fungsi; atau bahkan keduanya.
*/