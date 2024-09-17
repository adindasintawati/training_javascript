/*1 buat logic switch case untuk nampilin nama hari (pake bahasa inggris) berdasarkan input angka 1-7
 *jika angka yang dimasukin diluar rentang tersebut, maka tampilin pesan input tidak valid*/

const day = 7;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Pesan input tidak valid");
    break;
}

/*2 (if else if)
 * buat logic untuk nentuin status kelulusan orang berdasarkan nilai yang didapet
 * jika nilai lebih dari atau sama dengan 80, maka status lulusnya adalah "Lulus dengan sangat baik"
 * jika nilai lebih dari sama dengan 70 dan kurang dari 80, maka status lulusnya adalah "Lulus dengan baik"
 * jika nilai lebih dari sama dengan 60 dan kurang dari 70, maka status lulusnya adalah "Lulus tapi B aja"
 * jika nilai kurang dari 60, maka statusnya "Tidak lulus lol*/

const nilaiKelulusan = 90;
if (nilaiKelulusan >= 80) {
  console.log("Lulus dengan sangat baik");
} else if (nilaiKelulusan >= 70) {
  console.log("Lulus dengan baik");
} else if (nilaiKelulusan >= 60) {
  console.log("Lulus tapi b aja");
} else {
  console.log("Tidak lulus lol");
}

/**3
 * buat nested if untuk nentuin nilai rata-rata siswa dengan ngitung nilai rata-rata dari 3 pelajaran (mtk, fisika, kimia)
 * jika nilai masing-masing pelajaran yang dimasukin ga valid (diluar rentang 0-100), maka nampilin pesan "Nilai tidak valid"
 * jika nilai rata-rata lebih besar sama dengan 80, maka tampilin pesan "Selamat, anda lulus dengan baik!"
 * jika nilai rata-rata lebih kecil dari 80 dan lebih besar sama dengan 60, maka tampilin pesan "Anda lulus!"
 * jika nilai rata-rata lebih kecil dari 60, maka tampilin pesan "Anda tidak lulus.*/

const mtk = 80;
const fisika = 90;
const kimia = 85;
let rataRata = (mtk + fisika + kimia) / 3;
if (rataRata >= 80) {
  console.log("Selamat, anda lulus dengan baik!");
} else if (rataRata >= 60) {
  console.log("Anda lulus!");
} else {
  console.log("Anda tidak lulus");
}

/**4
 * buat nested if untuk menghitung total harga pembelian barang
 * jika total harga sama dengan 0 maka tampilin pesan tidak valid
 * jika total pembelian melebihi 1 juta, maka kasih diskon 10%,
 * sedangkan jika total pembelian lebih dari 500 ribu, maka kasih diskon 5%, jika kurang dari 500 ribu, maka ga dapet diskon. lalu cek,
 * jika dapat diskon maka tampilin pesan "Selamat! anda mendapatkan diskon sebesar <diskon>%. total harga sebelum diskon : <totalHarga>"
 * jika ga dapat diskon maka tampilin pesan "Maaf, anda tidak mendapat diskon. Harga total adalah <hargaSeletelahDiskon>"*/

const totalHarga = 0;
const totalPembelian = 5000000;
let hargaSeletelahDiskon = totalHarga;
let diskon = 0;
if (totalHarga === 0) {
  console.log("Tidak valid");
}
if (totalPembelian > 1000000) {
  diskon = 10;
} else if (totalPembelian > 500000) {
  diskon = 5;
}
if (diskon > 0) {
  hargaSeletelahDiskon = totalHarga - (totalHarga * diskon) / 100;
  console.log(
    "Selamat! anda mendapatkan diskon sebesar 10%. total harga sebelum diskon : 5000000"
  );
} else {
  console.log("Maaf, anda tidak mendapat diskon. Harga total adalah 200000");
}
