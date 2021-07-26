/*
--> package manager javaScript contohnya adalah NPM (Node Package Manager) dan Yarn Package Manager
--> NPM merupakan package manager standar yang disediakan Node.js

Install package
--> lokal: npm install <package-name>
--> global: npm install -g <package-name>

Beberapa contoh package yang perlu diinstal secara global, antara lain:
npm, nodemon, mocha, dan create-react

Ada dua jenis tipe object depencies dalam package.json:
1. object dependencies
2. object devDependencies : hanya digunakan saat proses testing (pengembangan), tidak digunakan ketika aplikasi di rilis.

Untuk memasang package sebagai devDependencies:
npm install <package-name> --save-dev

//Contoh penggunaan module/package :
1. Definisikan modul
const _ = require('lodash');

const myArray = [12,3,4,5]

console.log(_.sum(Array))

//Cara menghapus package:
tinggal rubah install muanjadi uninstall
*/

