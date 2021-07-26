/* Metode destructing object setelah ES6 rilis*/
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

const {firstName, lastName, age, isMale = false} = profile;
console.log(firstName, lastName, age);

/*Destructing ketika terdapat variabel yang memiliki nama yang sama telah didefinisikan */
const profile1 = {
    firstName1: "Sony",
    lastName1: "Gor",
    age1: 21
}

let firstName1 = "gigi";
let age1 = 17;

({firstName1, lastName1, age1} = profile1);
console.log(firstName1);
console.log(age1);

/* Default Value 
Ketika mendestruksi objek dan menetapkan variabel dengan nama yang bukan 
merupakan properti objek, maka nilai dari variabel tersebut menjadi undifined
*/
console.log(isMale); /* Outputnya adalah undefined*/

/*Kita bisa mengubah output undefined diatas sesuai apa yang kita mau:
const {firstName, lastName, age, isMale = false} = profile;
*/

/*Kita bisa merubah nama varabel lokal*/

const profile3 = {
    firstName3: "Siska",
    lastName3: "Apriana Rifianti",
    age3: 21
}


const {firstName3: localFirstName, lastName3: localLastName, age3: localAge} = profile3;

console.log(localFirstName)
console.log(localLastName)
console.log(localAge)