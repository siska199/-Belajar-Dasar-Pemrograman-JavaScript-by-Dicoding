/* Array adalah tipe data yang dapat mengelompokkan lebih dari satu nilai
dan menempatkannya dalam satu variabel */

let myArray = ["Cokelat", 42.5, 22, true, "Programming"]
console.log(myArray)
console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])
console.log(myArray[3])
console.log(myArray[4])
console.log(myArray[5])
console.log("Panjang nilai myArray adalah "+myArray.length +".")

const myArray1 = ["Cokelat", 42.5, 22, true, "Programming"]
/*Menambahkan data di akhir array */
myArray1.push('JavaScript')
myArray1.push(400)
console.log(myArray1)

/*Mengeluarkan data dari elemen array terakhir */
myArray1.pop()
console.log(myArray1)

/*Menambahkan data pada array di elemen pertama */
myArray1.unshift(1)
console.log(myArray1)
/*menghapus data pada array di elemen pertama */
myArray1.shift()
console.log(myArray1)
/*delete data dari objek array*/
delete myArray1[1] 
console.log("Testing: "+myArray1) /*not work*/
 /*gunakan metode splice*/
 myArray1.splice(0,1)
 console.log(myArray1)


 const phoneticAlphabet = ["Alpha", "Bravo", "Delta"];
 phoneticAlphabet.splice(2,0,"Charlie")
 console.log(phoneticAlphabet)

/*Merubah nilai di dalam array*/
const arr = [12,13,24,15]
arr[0] = 15
console.log(arr)



