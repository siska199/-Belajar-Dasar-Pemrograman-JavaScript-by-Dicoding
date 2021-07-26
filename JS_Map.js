/*Map mirip seperti Object bedanya key memperbolehkan key dalam 
bentuk format apapun*/

const myMap = new Map()

/*Jika ingin menetapkan nilai dari Map secara langsung, gunakan array multi dimensi seperti ini: */
const myMap1 = new Map([
    ['1','a String key'], /*Array pertama adalah key dan array kedua adalah value*/
    [1, 'a number key'],
    [true, true]
])

console.log(myMap1)

/*Contoh Kedua: */
const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
])

console.log(capital.size); /* Mengetahui jumlah pasangan ke-value didalam variabel Map*/
console.log(capital.get("London")) /*memperoleh nilai dari key tertentu*/
capital.set("New Delhi", "India") /*Menambahkan nilai ke-value baru*/
console.log(capital)

/*Cara menghapus key-value dalam map*/
capital.delete("London")
console.log(capital)

/*Cek key Value dalam Map:*/
console.log(capital.has("Jakarta"))
console.log(capital.has("New York"))

/* Jangan menggunakan cara berikut untuk menambah elemen key-alue kedalam map:*/
const Map2 = new Map();
Map2.set("Siska","Dinda")
console.log(Map2)
