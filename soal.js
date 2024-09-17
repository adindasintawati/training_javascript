/**1 for
 * buat loopingan untuk menghasilkan bilangan ganjil antara 1 sampai 20*/
for (let i = 0; i < 20; i++) {
  if (i % 2 !== 0) {
    console.log("bilangan ganjil: ", i);
  }
}

/** buatlah sebuah fungsi untuk mencari nilai tertinggi dari sebuah array menggunakan for loop*/
const array = [3, 7, 2, 9, 5, 10];
let max = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
console.log("Nilai tertinggi: ", max);

/**buat looping menggunakan for untuk membentuk segitiga sama siku seperti dibawah ini
 *
 **
 ***
 ****
 *****
 */

let awal = 1;
let maks = 5;
let segitiga = "*";
for (awal; awal <= maks; awal++) {
  console.log(segitiga);
  segitiga += "*";
}

/**buat fungsi untuk menghitung nilai rata-rata dari sebuah data array menggunakan for loop*/
const nilaiArray = [3, 7, 2, 9, 5, 10];
let maksimal = 0;
for (let i = 0; i < nilaiArray.length; i++) {
  maksimal += nilaiArray[i];
}
const average = maksimal / nilaiArray.length;
console.log("Nilai rata-ratanya: ", average);
