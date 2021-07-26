/*Destructing array bekerja berdasarkan posisi daripada penamaan propertinya */
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const [food1, food2, food3] = favorites
console.log(food1, food2, food3)

const favorites1 = ["Seafood", "Salad", "Nugget", "Soup"];
const [,,,foodKu] = favorites;
console.log(foodKu);

/*Destructing assignment pada array tidak memerlukan tanda kurung*/

const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];
let myFood = "Ice Creame";
let herFood = "Noodles";
[myFood, herFood] = favorites2;
console.log(myFood);
console.log(herFood);

/*Array Destructing berguna untuk menukar objek*/
let a = 1;
let b = 2;
console.log("Sebelum Swap")
console.log("Nilai a: "+a);
console.log("Nilai b: "+b);
[a,b] = [b,a];
console.log("Setelah Swap")
console.log("Nilai a: "+a);
console.log("Nilai b: "+b);

/*Default values*/
const favorites3 = ["Seafood"]
const [myFood1, herFood1="Salad"] = favorites3
console.log(myFood1)
console.log(herFood1)
