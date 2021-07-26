const arr = [12,13,24,15]
arr[0] = 15
console.log(arr)

const obj1 = {hari :["senin", "selasa", "rabu", "kamis"]}
obj1["hari"].push("jum'at")
console.log(obj1)

function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

this._contacts = [];
// contoh
class Mail {
    constructor() {
        this._contacts = [];
        this.from = 'pengirim@dicoding.com';
    }
}
const mail = new Mail();
 
console.log(mail.contacts);

class Animal{
    constructor(name1, age1, isMammal1){
        this.name = name1
        this.age = age1
        this.isMammal = isMammal1
    }

}

class Rabbit extends Animal{
    constructor(name1, age1, isMammal1){
        super(name1, age1, isMammal1)   
    }
    eat(){
        console.log(`${this.name} sedang makan!`)

    }
}


class Eagle extends Animal{
    constructor(name1, age1, isMammal1){
        super(name1, age1, isMammal1)   
    }
    fly(){
        console.log(`${this.name} sedang terbang!`)
    }
}

const myRabbit = new Rabbit("Labi", 2, true)

const myEagle = new Eagle("Elo", 4, false)
