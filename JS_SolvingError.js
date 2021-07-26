/* Try and Catch */
//Contoh yang tidak terjadi error
try {
    console.log("Awal blok try");
    console.log("Akhir blok try") ;
} catch (error) {
    console.log("Tidak terjadi eror, maka kode ini diabaikan");
}

//Contoh Terjadi Error
try{
    console.log("Awal blok try");   // (1)
    errorCode;               // (2)
    console.log("Akhir blok try");  // (3)
}catch (error){
    console.log("Terjadi error!");  // (4)
    //Menampilkan kode properti error
    console.log(`${error.name}`)// Nama error yang terjadi
    console.log(`${error.message}`)//Pesan tentang detail error
    console.log(`${error.stack}`)//urutan kejadian yang menyebabkan error, berisi informasi dimana letak baris yang berisi error
//Output dari error.name berupa ReferenceError karena errorCode dianggap sebagai sebuah variabel / nilai yang tidak terdefinisi 
}
/*
//Tanpa block try and catch aplikasi akan crash
console.log("Awal blok try");   // (1)
errorCode;               // (2)
console.log("Akhir blok try");  // (3)
*/

//Blok finally akan selalu dieksekusi tanpa perduli apapun yang terjadi
try{
    console.log("Awal blok try");
    console.log("Akhir blok try");
    codeError
}catch (error){
    console.log("Terjadi Error");
}finally{
    console.log("Akan tetap dieksekusi");
}

/* Throwing Errors*/
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
 
let json = '{ "age": 30 }';
 
try {
    let user = JSON.parse(json);
 
    if (!user.name) {
        throw new ValidationError("'name' is required.");
    }
    if (!user.age) {
        throw new ValidationError("'age' is required.");
    }
 
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${error.message}`);
    } else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}

/**
 * Saat ini, Anda sudah memiliki fungsi detectTriangle yang berguna untuk
 * mendeteksi jenis segitiga berdasarkan nilai argumen.
 * Contoh:
 *  - 1, 1, 1 -> Segitiga sama sisi
 *  - 4, 4, 2 -> Segitiga sama kaki
 *  - 3, 4, 6 -> Segitiga sembarang
 *
 * Namun fungsi detectTriangle belum berjalan dengan baik karena
 * bila ada argumen fungsi yang bukan number, alih-alih error, ia akan mengembalikan "Segitiga sembarang".
 * Contoh:
 *  - 1, false, 1 -> Segitiga sembarang
 *  - 'a', 3, 5 -> Segitiga sembarang
 *  - 12, 2, null -> Segitiga sembarang
 * Kondisi yang diharapkan:
 *  - 1, false, 1 -> Argumen kedua harus number
 *  - 'a', 3, 5 -> Argumen pertama harus number
 *  - 12, 2, null -> Argumen ketiga harus number
 *
 *  Tugas Anda adalah memperbaiki fungsi detectTriangle agar berjalan dengan kondisi yang diharapkan.
 *  Pastikan Anda menggunakan teknik Throwing dan Handling Error yah.
 *
 * TODO 1:
 * - Buatlah class ValidationError yang merupakan custom error dengan spesifikasi berikut:
 *   - Turunan dari class Error
 *   - Memiliki constructor(message)
 *   - this.name harus bernilai "ValidationError"
 *
 * TODO 2:
 * - Buatlah fungsi validateNumberInput yang memvalidasi 3 buah input (argumen) dengan spesifikasi berikut:
 *   - Menerima 3 argumen
 *   - Bila argumen pertama bukan number:
 *     - throw ValidationError dengan pesan 'Argumen pertama harus number'
 *   - Bila argumen kedua bukan number:
 *     - throw ValidationError dengan pesan 'Argumen kedua harus number'
 *   - Bila argumen ketiga bukan number:
 *     - throw ValidationError dengan pesan 'Argumen ketiga harus number'
 *
 * TODO 3:
 * - Panggil fungsi validateInputNumber di dalam fungsi detectTriangle untuk memvalidasi nilai argumen a, b, dan c.
 *   - pastikan Anda memanggil validaateInputNumber menggunakan try .. catch.
 *   - bila block catch terpanggil, kembalikan fungsi detectTriangle dengan pesan error yang dibawa fungsi validateInputNumber.
 */


// TODO 1

class ValidationError extends Error{
    constructor(message){
        super(message)
        this.name = "ValidationError"

    }
}

// TODO 2
function validateNumberInput (a,b,c) {
    if (typeof(a)!="number"){
        throw new ValidationError('Argumen pertama harus number')
    }
    if (typeof(b)!="number"){
        throw new ValidationError('Argumen kedua harus number')
    }
    if (typeof(c)!="number"){
        throw new ValidationError('Argumen ketiga harus number')
    }
}


const detectTriangle = (a, b, c) => {
    // TODO 3
    try{
        let cek = validateNumberInput(a,b,c)
     }catch(error){
         if (error instanceof ValidationError) {
             return `${error.message}`;
     }}
    if (a === b && b === c) {
      return 'Segitiga sama sisi';
    }
  
    if (a === b || a === c || b === c) {
      return 'Segitiga sama kaki';
    }
  
return 'Segitiga sembarang';}

let siska =  detectTriangle("a", 12, 12)
console.log(siska)


let myString = "";

try {
    myString += "a";
    throw Error();
} catch(e) {
    myString += "b";
} finally {
    myString += "c";
    throw Error();
    myString += "d";
}

console.log(myString);

/*
kita bisa menggunakan throw. Operator ini akan “melemparkan” eror pada program, 
sehingga eksekusi kode akan masuk pada blok catch. 
*/
//operator instanceOf, kita bisa mendapatkan tipe dari eror yang terjadi

