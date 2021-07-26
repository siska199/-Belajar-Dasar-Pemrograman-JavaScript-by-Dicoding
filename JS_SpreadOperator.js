const favorites = ["Seafood", "Salad", "Nugget", "Soup"]
console.log(favorites)

/*Menggunakan spread operator*/
console.log(...favorites)
/*Output dari hasil diatas sama dengan*/
console.log(favorites[0], favorites[1], favorites[2], favorites[3])

/*Kegunaan Spread Operator:
1. menggabungkan dua buah aray ke dalam satu array */
const others = ["Cake", "Pie", "Donut"]

const allFavorites = [...favorites, ...others]
console.log(allFavorites)

/*2. menggabungkan dua buah object ke dalam satu object */
const obj1 = { firtName: 'Obi-Wan', age: 30}
const obj2 = { lastName: 'Kenobi', gender: 'M'}

const newObj = {...obj1, ...obj2}
console.log(newObj)