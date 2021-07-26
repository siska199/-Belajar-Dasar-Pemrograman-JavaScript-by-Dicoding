/*Reusable Function yang sudah ada di JavaScript,
khususnya beberapa High-Order Function yang dimiliki array, seperti map, filter, dan forEach.*/

//1. Array Map ---> array.map() : Fungsi map akan mengembalikan array baru.
//Contoh:
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name)=>{return `${name}!`})
console.log(newArray)

//2. Array Filter ---> array.filter : Fungsi filter sangat berguna untuk melakukan proses penyaringan (filtering) terhadap nilai array yang ada.
//Contoh kasus penggunaan: Bila kita ingin menghilangkanbeberapa item di array berdasarkan spesifikasi tertentu.
//Contoh:
const truthArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item) )

console.log(truthArray)

const filterEven = [1,2,3,4,5,6,7,8,9,10].filter((i)=>i%2==0)
console.log(filterEven)

const student = [
    {name: 'Harry', score: 60},
    {name: 'James', score: 88},
    {name: 'Ron', score: 90},
    {name: 'Bethy', score: 75}
]

const filterScore = student.filter(i=>i.score > 85)
console.log(filterScore)

//3. Reduce digunakan untuk mengeksekusi data yang bertipe array yang digunakan untuk mengeksekusi nilai pada setiap elemen dan menampilkan dalam sebuah nilai saja.
//Contoh:
const totalScore = student.reduce((acc,i)=>acc+i.score, 0)
console.log(totalScore)
const totalEven = [1,2,3,4,5,6,7,8,9].reduce((acc,i)=>acc+i,0) 
console.log(totalEven)

//4. Array some (fungsi ini akan menghasilkan nilai boolean).
//Digunakan untuk mengecek apakah ada setidaknya satu deretan nilai dalam array tersebut lolos berdasarkan kriteria yang kita tulis dalam callback function.
//Contoh:

const array = [1,2,3,4,5];
const even = array.some((i)=>i%2!=0)
console.log(even)

//5. Array find digunakan untuk mencari apakah di dalam deretan nilai terdapat nilai yang sesuai dengan kriteria kita
//Contoh:

const findArray = [[1,2,3,4],[22,333],44,5,6,7,8,9].find(i=>i[3]==4)
console.log(findArray)

//6. Array sort: hanya mengurutkan tipe data string berdasarkan alfabetnya.
const compareNumber = (a,b) => {return a-b;};

const angka = [1,30,100,20,50].sort(compareNumber)
console.log(angka)

/* Penjelasan:
Jika, negative maka `a` akan diletakan sebelum `b`
Jika, positive maka `b` akan diletakan sebelum `a`
Jika, 0 maka tidak ada perubahan posisi.
*/

//Array every : digunakan untuk mengechek apakah semua nilai dari sebuah array sesuai dengan kriteria yang didefinisikan.
//Outputnya berupa true or false
const score = [30,76,90]
const cekScore = score.every(i => i>=30)
console.log(cekScore)

//Array forEach : untuk memanggil fungsi callback pada setiap iterasi index array.

//Before:
const names = ["Harry", "Ron", "Jeff", "Thomas"]
for (let i = 0; i<names.length; i++){
    console.log(`Hello, ${names[i]}!`)
}
//after
names.forEach((i)=>{ //Tidak bisa menggunakan "continue" atau "break"
    console.log(`Hello, ${i}!`)
})

//SOAL:
const books = [
    { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
    { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
    { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
    { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
    { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
    { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
    { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
  ];
 const greatAuthors = books.filter(i => i.sales>1000000).map(i => {return `${i.author} adalah penulis buku ${i.title} yang sangat hebat!`})

 console.log(greatAuthors)