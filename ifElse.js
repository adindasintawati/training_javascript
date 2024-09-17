/*if else : logic untuk memilih salah satu atau beberapa kondisi sekaligus*/

// if
let nilaiSiswa = 100;
if (nilaiSiswa === 100) {
  console.log("Selamat anda mendapatkan nilai sempurna!");
}

// if else
const bootcampStatus = "active";
if (bootcampStatus === "active") {
  console.log("Bootcamp masuk");
} else {
  console.log("Bootcamp libur");
}

// if else if
const classStatus = "close";
const minuteRemaining = 5;
if (classStatus === "open") {
  console.log("Kelas bootcamp sedang berjalan");
} else if (minuteRemaining <= 5) {
  console.log("Kelas bootcamp tersisa 5 menit lagi");
} else {
  console.log("Kelas bootcamp telah berakhir");
}

// nested if (kondisi bersarang)
const nilai = 92;
if (nilai >= 70) {
  if (nilai >= 90) {
    console.log("Nilai A");
  } else {
    console.log("Nilai B");
  }
} else {
  console.log("Nilai C");
}

// Ternary operator (pengganti if else) (1 kondisi)
let hasil = nilai >= 70 ? "Lulus" : "Tidak Lulus";
console.log("hasil: ", hasil);

// Ternary operatorn if else if (lebih dari 1 kondisi)
const result = nilai >= 90 ? "A" : nilai >= 80 ? "B" : nilai >= 70 ? "C" : "D";

// Ternary operator pake &&
const statusSiswa = "siswa";
const resultStatus =
  nilai >= 90 && statusSiswa === "siswa" ? "Lulus" : "Anda bukan siswa";
console.log("Hasil: ", resultStatus);
