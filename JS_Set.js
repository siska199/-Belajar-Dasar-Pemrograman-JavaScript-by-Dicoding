/* Set sederhananya merupakan kumpulan nilai (set of values). Hal yang membedakan set dengan struktur data
yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks */

/*Data didalam set juga bersifat unik dan tidak ada duplikasi */

const numberSet = new Set([1,4,5,6,7,8,8]);
console.log(numberSet); /*angka 8 tidak dicetak 2 kali */

/*Menambahkan data ke dalam Set */
numberSet.add(77);
numberSet.add([1,2,6,7,800]); /*menambahkan array*/

console.log(numberSet);

/*Menghapus elemen di dalam set*/
numberSet.delete([1,2,6,7,800]); /*Tidak bisa dihapus*/
numberSet.delete(77); /*Argumen yang dimasukkan ke dalam fungsi delete adalah nilai yang ingin dihapus*/
console.log(numberSet);

