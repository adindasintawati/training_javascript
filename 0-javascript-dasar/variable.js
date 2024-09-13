// VARIABEL DAN TIPE DATA

// VARIABEL : UNTUK MENYIMPAN DATA

/* cara membuat variabel:
1. menggunakan kata kunci let
2. menggunakan kata kunci cons*/

// tidak disaranin make var karena variable bisa terduplikat dan runci
var hobby = "nyanyi";
var hobby = "nonton film";

// let datanya bisa diubah atau di perbaharui tapi ga bisa di deklarasiin ulang
let studentName = "adinda";
studentName = "dinda";

//cons tidak dapat diberi nilai baru (tidak dapat diubah)
const age = 20;
// age = 19; //bakal eror karna tipe datanya constan

// console.log buat nampilin output ke terminal
console.log("nama murid: ", studentName);
console.log("umur: " + age);
console.log("nama: ", studentName, "umur: ", age);
console.log(hobby);
