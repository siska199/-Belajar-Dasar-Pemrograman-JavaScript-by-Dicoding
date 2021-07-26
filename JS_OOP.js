/* OOP (Object Oriented Programming) adalah salah satu paradigma dalam pemrograman komputer .
Ia adalah pendekatan berbasis objek, diaman suatu objek terdiri dari kumpulan atribut dan method di dalamnya. */

//Didalam javaScript atribut adalah variabel yang digunakan untuk menyimpan nilai.
//Sementara method adalah fungsi yang digunakan untuk menjalankan suatu proses
this._contact = [] //Cara untuk membedakan private variabel perhatikan: _

class Mail {
    constructor(){
        this._contact = [];
        this.form = "pengirim@dicoding.com";
        
    }
    sendMessage(msg,to,from){
        console.log(`you send: ${msg} to ${to} from ${from}`);
        this._contact.push(to); //untuk menginisialisasi ataupun mengakses sebuah attribute global dari sebuah kelas, maka harus menggunakan thi.attributeName
    }
}



const mail = new Mail(); //instance object (melakkan instantiasi)
console.log(mail.contact);
mail.sendMessage("Hai apa kabar", "penerima@dicoding.com","aku@gmail.com");
//Kita tidak dapat langsung mengakses sendMessage tanpa melakukan instantiasi
//Mail.sendMessage('hallo','penerima@dicoding.com') ---> outputnya akan error

/* Static Method adalah function atau method yang sama seperti class method,
akan tetapi untuk mengaksesnya tidak perlu meng-instantiate class. Kita cukup menuliskan nama kelas dan nama metodenya secara langsung
(NamaClass.namaMethod()) */

class Mail2{
    static isValidPhone(phone){
        return typeof phone==='number';
    }
}
console.log(Mail2.isValidPhone(0987123768))

//CONSTRUCTOR adalah sebuah method/function yang dijalankan pertama kali ketika objek dibuat

class Mail1 {
    constructor(author){
        this.from = 'pengirim@dicoding.com'
        console.log('is instantiated', author)
    }
}

const mail1 = new Mail1("Siska")
console.log(mail1)


/*---------------4 PILAR OOP--------------------
1. Encapsulation adalah kondisi diamana attribute atau method di dalam kelas dibungkus dan bersifat privat
2. Abstraction berarti sebuah objek hanya menunjukkan operasinya secara high-level.
3. Inheritance: Beberapa objek bisa memiliki karakteristik atau perilaku yang sama, tetapi mereka bukanlah objek yang sama
*/
class Mail3 {
    constructor(author){
        this.from = author;
        this._contacts = [];
    }
    sendMessage(msg, to){
        console.log(`you send: ${msg} to ${to} from${this.from}`)
        this._contact.push(to)
    }
    showAllContacts(){
        return this._contacts;
    }
}

//Membuat turunan dari objek Mail3:
class WhatsApp extends Mail {
    constructor(){
        super();
        this.username = 'dicoding';
        this.isBussinessAccount = true;
    }
    myProfile(){
        return `my name ${this.username}, is ${this.isBussinessAccount ? 'Business':'Personal'}`
    }
}
const wa1 = new WhatsApp()
console.log(wa1.myProfile())
wa1.sendMessage("Siska cantik", "Jodohku")
console.log(wa1)

/* Overriding adalah teknik untuk kita melakukan perombakan (baik secara keseluruhan maupun tidak)
pada sebuah method ataupun constructor yang dimiliki oleh parent class, sehingga dapat disesuaikan dengan behaviour di child class*/

//Overriding Constructor: super(...) digunakan untuk memanggil constructor parent dan hanya dapat digunakan di constructor
class WhatsApp1 extends Mail3{
    constructor(username, isBussinessAccount, phone){
        super(phone);
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }
}

const wa2 = new WhatsApp1('dicoding', true, 089989090898)
console.log(wa2)

//Overriding Method: super.methodName(...) digunakan untuk memanggil parent method
//example:
class WhatsApp7 extends Mail {
    constructor(username, isBussinessAccount, phone) {
        super(phone);
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }
 
    // Overriding method => Melakukan Override Total
    sendMessage(msg, to) {
        console.log('Send by WA'); //outputnya hanya dari fungsi sendMesssage dari objek child
        super.sendMessage(msg, to) // Output dari fungsi sendMessage yang berda di parent juga akan keluar
    }
}

/* Object Composition: prinsip komposisi dari sebuah alur bisnis tanpa perlu melakukan pewarisan dari parent class. */

//[1] list of abstractions

const canSendMessage = self =>({
    sendMessage: () => console.log('send message: ', self.message)
})

const checkIsValidPhone = self => ({
    isValid: () => console.log('valid phone', self.from)
})

// [2] Create object composition
const personalEnterprise = (from, message, store) => {
    // [3] attributes
    const self ={
        from,
        message,
        store
    }
    // [4] Method
    const personalEnterpriseBehaviours = self => ({
        createCatalog: () => HTMLFormControlsCollection.log('Catalog has created: ', self.store)
    })
    //[5] create object composition
    return Object.assign(self, personalEnterprise(self), canSendMessage(self), checkIsValidPhone(self));
}

const pe1 = personalEnterprise('pengirim@gmail.com', 'hei produk baru nih', 'Dicoding Store')
pe1.sendMessage();
pe1.createCatalog();
pe1.isValid();


/* Built-In Class */
//Object date  object bawaan dari javaScript
