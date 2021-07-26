/* Tipe Data Object (object di dalam python sama dengan dictionary)
- key dan value dalam object disebut properties
- key hars berupa string tapi kita tidak perlu menuliskan tanda petik kecuali ada karakter khusus seperti spasi
cara run javascript di VSC: belajarJavaScript2.js
*/

let object = {'1 1':"siska"}
console.log(object)

const user = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 19,
    isJedi: true,
    "home world": "Tattooine"
}

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`)
console.log(`Umur saya ${user.age} tahun`)

/*
Gunakan bracket ketika key  terdiri dari lebih dari dua kata
*/
console.log(`Saya berasal dari ${user["home world"]}`)

/*memodifikasi sebuah object: */
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellin Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
}

spaceship.color = "Glossy red"
spaceship["maxSpeed"] = 5000
console.log(spaceship)

/*yang tidak boleh dilakukan ketika mendefinisikan object sebgai constanta:
spaceship = {name: "New Millenium Falcon"}
console.log(spaceship) Output Error */

/*Menambahkan properti baru di object*/
spaceship.class = "Light freighter"
console.log(spaceship)

/*Menghapus property dari object*/
delete spaceship.manufacturer
console.log(spaceship)

const artistsAndSongs = {
    "Keyakizaka46": ["Silent Majority"],
    "Blackpink": ["How You Like That", "Ice Cream"],
    "JKT48": ["Rapsodi", "Heavy Rotation"],
    "Twice": ["What is Love?"],
}

artistsAndSongs["Babymetal"] = ["Gimme chocolate"];
delete artistsAndSongs["Keyakizaka46"];
artistsAndSongs["Blackpink"].push("Rose - Gone");

console.log(artistsAndSongs);
