console.log("Menyalakan mesin kopi");
console.log("Menggiling biji kopi");
console.log("Memanaskan air");
console.log("Mencampurkan air dan kopi");
console.log("Menuangkan kopi ke dalam gelas");
console.log("Menuangkan susu ke dalam gelas");
console.log("Kopi Anda sudah siap!");
/*Menjalankan object script */
//npm run start
//npm run test

/*Membuat package.json : npm init */

/*cara import dan eksport module:

//state.js:
const coffeeStock = {
  arabica: 100,
  robusta: 150,
  liberica: 200
}
 
module.exports = coffeeStock;

//Mengakses module yang berada di state.js:
//index.js:
const coffeeStock = require('./state');
 
console.log(coffeeStock);
 
/* output
{ arabica: 100, robusta: 150, liberica: 200 }
*/

/* import export lebih dari satu nilai:
import:
module.exports = {coffeeStock, isCoffeeMachineReady}; 

eksport:
const {coffeeStock, isCoffeeMachineReady} = require('./state');

*/

/*Import eksport menggunkana ES6 Module
Untuk satu nilai :
export default coffeeStock;
import coffeeStock from "./state.js";

Untuk banyak nilai:
export {coffeeStock, isCoffeeMachineReady};
import { coffeeStock, isCoffeeMachineReady } from './state.js';

*/