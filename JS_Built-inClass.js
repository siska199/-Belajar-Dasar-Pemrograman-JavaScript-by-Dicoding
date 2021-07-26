/* Built-in Class bawaan contohnya: Date, Object, Array, Math, dan String */

/* Date adalah built-in object bawaan dari bahasa pemrograman JavaScript yang 
digunakan untuk utilitas terkait tanggal dan waktu, misalnya untuk manipulasi tanggal dan waktu */

const myDate = new Date()
console.log(myDate)

const myDateS = new Date("January 02, 2021") //kelebihan 1 hari
console.log(myDateS)

const myDateM = new Date(87400000)
console.log(myDateM)

/* Lengkap:
const myDateL = new Date(year,month,date,hour,minute,second,millisecond); 
console.log(myDateL)
*/
console.log(myDate.getMonth()) // 0 januari, 1 februari ... jadi 6 = juli
console.log(myDate.getFullYear())
console.log(myDate.getDate())
console.log(myDate.getHours())
console.log(myDate.getMinutes())
console.log(myDate.getSeconds())
console.log(myDate.getMilliseconds())
console.log(myDate.getTime()) // dimulai dari 1 january 1970 yang berarti 0
console.log(myDate.getDay()) // 0 berarti minggu

//Static metod yang bisa digunakan tanpa perlu melakukan instance:
console.log(Date.parse("2021-01-01"))
console.log(Date.UTC(2021, 01, 01))
console.log(Date.now())


//Menggunakan Arrow Function
const myAge = (birthday) => {
    const birtday = new Date(birthday)//nanti dirubah jadi milisecond
    const today = Date.now()
    const diff_ms = today - birtday.getTime()
    const diffDate = new Date(diff_ms)
    return diffDate.getFullYear()-1970
}

//console.log(myAge('2000-01-22'))
console.log(myAge('2000-04-11'));

const myDate11 = new Date(2000)
console.log(myDate.getFullYear())