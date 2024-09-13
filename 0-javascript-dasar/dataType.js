/* DATA TYPE (Tipe Data)
 * tipe data adalah jenis nilai yang disimpan dalam variabel
 * tipe data terbagi menjadi 2, tipe data primitif sama non-primitif
 * -tipe primitif : tipe data simple/sederhana yang cuma punya 1 nilai
 * -non-primitif : tipe data kompleks yang mempunyai lebih dari 1 nilai. contohnya: array*/

// Tipe data String (data yang ada kutipnya)
let mobil = "wuling";

// Integer: tipe data KHUSUS angka
let nomor = 123;

// Boolean: buatt nentuin nilai benar(true) atau salah(false)
const isFlying = false;

// array: buat nyimpen lebih dari 1 data(banyak)
const buah = ["duren", "apel", "mangga"];
console.log("nama buah-buahan", buah);

// Object: tamplate data
const employee = {
  nama: "dinda",
  umur: 20,
  jobDesk: "dokter",
  salary: 10000000,
};
console.log("karyawan", employee);

// null: buat nandain kalo data ini kosong
let duit = null;

// undefined: buat nandain kalo data ini belum dikasih nilai/isi
let job;

let nomorString = "123";
console.log(parseInt(nomorString)); //buat ngubah string ke integer
console.log(nomor.toString()); //buat ngubah integer ke string
console.log(JSON.stringify(employee)); //buat ngubah objek biasa ke format JSON
// console.log(JSON.parse(employee)); //buat ngubah data JSON jadi objek biasa

// Function: untuk membuat fungsi atau tugas tertentu(function biasa)
function printAnyting() {
  console.log("sinta");
}
printAnyting(); //manggil fungsinya

// arrow function with parameter
const whoIam = (name) => {
  return name;
};
console.log(whoIam("aku sinta"));
