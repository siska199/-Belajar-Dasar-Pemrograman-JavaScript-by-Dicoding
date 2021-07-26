//Chaining Promises:
const state = {
    stock : {
        coffeeBeans: 250,
        water: 1000 
    },
    isCoffeeMachineBusy: false,
}

const checkAvailability = ()=>{
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(!state.isCoffeeMachineBusy){
            resolve("Mesin kopi siap digunakan.");
        }else{
            reject("Maaf, mesin sedang sibuk.");
        }
    },1000);
});
};

const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if(state.stock.coffeeBeans >= 16 && state.stock.water >= 250){
                resolve("Stock cukup. Bisa membuat kopi.");
            }else{
                reject("Stock tidak cukup!");
            }
        }, 1500);
    });
};

const brewCoffee = () => {
    console.log("Membuat kopi Anda...")
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Kopi sudah siap!")
        }, 2000);
    });
};
/*
function makeEspresso(){
    checkAvailability()
        .then((value)=>{
            console.log(value); 
            return checkStock();
        })
        .then((value)=>{
            console.log(value);
            return brewCoffee();
            })
        .then(value=>{
            console.log(value); 
            state.isCoffeeMachineBusy=false;
        })
        .catch(rejectedReason=>{
            console.log(rejectedReason);
            state.isCoffeeMachineBusy = false;
        });    
}

makeEspresso();
*/
 /*---Promise All---*/
 //Analogi: ketika kita dan teman kita memesan kopi maka tak ayal pelayan mengantarkan pesanan kita dan teman kita secara bersamaan maka pelayan tersebut menggunakan fungsi promise.all()
/*
Example:
const promises = [promise1(), promise2(), promise3()] Semua promise didalamnya dijalankan bersamaan

Promise.all(promises)
    .then(nilai =>{
        console.log(nilai);
    })
*/

//Real Example:
//Promise tambahan yang akan dieksekusi secara bersamaan:

const boilWater = () =>{
    return new Promise((resolve,reject)=>{
        console.log("Memanaskan air");
        setTimeout(()=>{resolve("Air panas sudah sudah siap!")},2000)
    })
}

const grindCoffeeBeans = () =>{
    return new Promise((resolve,reject)=>{
        console.log("Menggiling biji kopi...");
        setTimeout(()=>{resolve("kopi sudah siap!")},1000);
    })
}
/*
function makeEspresso(){
    checkAvailability()
        .then((value)=>{
            console.log(value); 
            return checkStock();
        })
        .then(value=>{
            console.log(value);
            const promises = [boilWater(), grindCoffeeBeans()];
            return Promise.all(promises)
        })
        .then((value)=>{
            console.log(value);
            return brewCoffee();
            })
            .then(value=>{
                console.log(value); 
                state.isCoffeeMachineBusy=false;
            })
            .catch(rejectedReason=>{
                console.log(rejectedReason);
                state.isCoffeeMachineBusy = false;
            });   
}

makeEspresso();

*/


//Handle onRejected using asyncawait:
async function makeEspresso() {
    try{
        await checkAvailability();
        await checkStock();
        await Promise.all([boilWater(), grindCoffeeBeans()]);
        const tahapAkhir = await brewCoffee();
        console.log(tahapAkhir)
    }catch (error){
        console.log(error)
    }}

makeEspresso()