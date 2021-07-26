/*-----Synchronous vs Asynchronous----
---> Dalam Synchronous program kode dijalankan secara berururtan dari atas ke bawah
---> Dalam Asynchronous program, jika menulis dua baris kode kita dapat membuat baris kode kedua dieksekusi tanpa harus menunggu baris pertama selesai dieksekusi
     Task yang kecil akan lebih dahulu selesai dibandingkan task yang besar, meskipun task yang besar lebih dahulu dijalankan.
     Program dengan tipe ini memungkinkan suatu operasi bisa berjalan sembari menunggu operasi lainnya selesai.
*/

/*------setTimeout----------
Merupakan cara yang paling mudah untuk membuat kode dijalankan secara asynchronous.
Fungsi setTimeout menerima dua parameter, parameter pertama adalah fungsi yang akan dijalankan secara asynchronous dan parameter kedua
adalah waktu tunggu sebelum waktu akhirnya fungsi tersebut dijalankan (dengan satuan milisecond)
*/
//Contoh:
console.log("Selamat Datang!");
setTimeout(()=>{console.log("Terimakasih sudah mampir, silakan datang kembali!")},
3000);
console.log("Ada yang bisa dibantu?")

/*---Callback Function analoginya adalah pelayan pada kedai kopi*/

const orderCoffee = callbackqq => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tungggu...");
    //Membuat program Asynchronous:
    setTimeout(()=>{
    callbackqq(coffee)
    }, 3000)
}

orderCoffee(coffee1=>{
    console.log(coffee1)
})

/*---Promise (Janji) : nisa terpenuhi bisa tidak---
->Promise dapat menggantikan peran callback dengan menggunakan ciri khas fungsi .then-nya
->Promise memiliki tiga kondisi:
1. Pending (janji sedang dalam proses)
2. Fulfilled (janji terpenuhi)
3. Rejected (janji gagal terpenuhi)
*/

/*---Constructing Promise Object---
---> Untuk membuat object promise kita menggunakan keyword new diikuti dengan constructor dan Promise. */
//Example:
//const coffee = new Promise()//seharusnya harus ada parameter didalam fungsi promise agar dapat digunakan
//Fungsi diatas akan memberikan error.
// Solving: Didalam constructor promise, kita perlu menetapkan resolver function atau biasa disebut executor function.

//Membuat executor function : terdiri dari dua parameter yaitu resolve dan reject
const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady){
        resolve("Kopi berhasil dibuat")
    }else{
        reject("Mesin kopi tidak bisa digunakan")
    }
}

const MakeCoffe = ()=>{
    return new Promise(executorFunction)
}
console.log(MakeCoffe())
/*Ouput yang dihasilkan baik ketika fulfilled ataupun rejected masih berupa promise bukan nilai yang dibawa oleh fungsi resolve atau reject.
Lantas bagaimana kita bisa mengakses nilai yang dibawa oleh fungsi2 tersebut? caranya menggunakan metode .then()
yang tersedia pada objek promise
*/

/* Consuming Promises */
//example: console.log(MakeCoffe().then(onFullfilled,onRejected))//onFullfilled dan onRejected adalah callback function yang berfungsi sebagai handler

//Membuat program untuk mengecek stok barang:
const stock = {
    coffeeBeans : 250,
    water : 1000
}
const cekStok = ()=>{
    return new Promise((resolve,reject) =>{
    if(stock.coffeeBeans>= 16 && stock.water >= 256){
        resolve("Stock cukup. Bisa membuat kopi")
    } else{reject("Stok tidak cukup")}}
    )   
}

console.log(cekStok())
//Mengakses nilai promise
const handleSuccess = resolvedValue =>{
    console.log(resolvedValue)
}

const handleFailure = rejectionReason =>{
    console.log( rejectionReason)
}
//Cara 1:
console.log(cekStok().then(handleSuccess,handleFailure))
//Cara2 //Kode lebih terlihat rapi:
cekStok()
    .then(handleSuccess)
    .catch(handleFailure)/*onRejected with Catch Method*/

