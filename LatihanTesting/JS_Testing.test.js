/*
Sebuah proses pengujian perangkat lunak dapat dilakukan secara
--> Manual: proses pengujian dilakukan oleh manusia.
--> Otomatis: proses pengujian dilakukan oleh komputer dengan menulis script khusus

Proses pengujian secara umum ada 4 jenis:
1. Static test: memastikan tidak ada typo (naming convention yang standar) dan memastikan tidak ada error types.
2. Unit test: memastikan bahwa setiap unit kode yang kita tulis sudah bisa bekerja sesuai harapan.
3. Integration test: memastikan beberapa serangkaian funsgi yang saling ketergantungan satu sama lain berjalan semestinya.
4. End-to-End test:  menguji flow aplikasi dari awal sampai akhir.

*/

//Menggunakan module jest untuk melakukan testing


// contoh


test("Dua tambah dua harus bernilai 4",()=>{expect(2+2).toBe(4)})

//Untuk melakukan test ketikkan : npm test di terminal

//Menguji dua atau lebih fungsi
describe("Pengujian Fungsi Aritmatika",()=> {
    test("Penjumlahan",()=>{expect(2+2).toBe(4)});
    test("Perkalian",()=>{expect(2**4).toBe(16)});

})//fungsi describe memiliki dua parameter

/*
toBe() disebut dengan matcher. Dalam jest 
terdapat berbagai matchers diantaranya:
1. toBe(x) : bahwa nilai ekspektasi yang diharapkan adalah x
2. toEqual(x) : bahwa nilai ekspektasi yang diharapkan sama dengan x
3. toBeNull() : bahwa nilai ekspektasi yang diharapkan adalah null
4. toBeTruthy : bahwa nilai ekspektasi yang diharapkan adalah truth
5. toBeFalsy : bahwa nilai ekspektasi yang diharapkan adalah false
*/


import {averageExams, isStudentPassExam} from './gradeCalculations.js';

test('it should return exact average', () => {
    const listValueOfExams = [80, 100, 100, 80];
    expect(averageExams(listValueOfExams)).toEqual(90);
})
//More detail information about hasil test: npm run test -- --coverage


