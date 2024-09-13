function penjumlahan(a, b) {
  return a + b;
}
console.log("penjumlahan: ", penjumlahan(10, 5));

const cekAngkaPositif = (angka) => {
  if (angka < 0) {
    return "Angka Negatif";
  }
  return "angka positif";
};
console.log(cekAngkaPositif(-10));
console.log(cekAngkaPositif(10));

// fungsi cek karyawan terdaftar
function cekKaryawanAigen(nama, jobDesk, salary) {
  if (nama && jobDesk && salary) {
    //ngecek semua kondisi
    return "Anda karyawan terdaftar"; //output kalo semua kondisi terpenuhi
  }
  return "Anda tidak terdaftar karyawan"; //output kalo salah satu kondisi tidak terpenuhi
}
console.log(cekKaryawanAigen("dinda", "dokter", 10000000)); //true
console.log(cekKaryawanAigen("sinta", "dokter")); //false

function cekKaryawan(nama, jobDesk, salary) {
  if (nama || jobDesk || salary) {
    return "Anda karyawan terdaftar"; //output jika salah satu dari kondisi diatas terpenuhi
  }
  return "Anda tidak terdaftar karyawan"; //sebaliknya
}
console.log(cekKaryawan("dinda", "dokter")); //true
console.log(cekKaryawan()); //false

/**latihan soal: buat fungsi simple untuk menentukan apakah karyawan memenuhi syarat untuk mendapatkan BPJS.
 * syaratnya: nama, kerjanya sudah lebih dari setahun, sudah punya kartu BPJS, dan gajinya dibawah 2500000
 * jika salah satu tidak terpenuhi maka tampilkan output "Anda belum memenuhi syarat untuk mendapatkan BPJS" (kalo ada soal jika salah satu : maka pakenya &&)*/
function cekKartuBpjs(nama, pengalaman, kartu, salary) {
  if (nama && pengalaman > 12 && kartu && salary < 2500000) {
    return "Anda telah memenuhi syarat untuk mendapatkan BPJS";
  }
  return "Anda belum memenuhi syarat untuk mendapatkan BPJS";
}
console.log(cekKartuBpjs("adinda", 11, true, 3000000));
console.log(cekKartuBpjs("sinta", 24, true, 1000000));

/*Buatlah sebuah fungsi "findUserCountry" yang menerima satu parameter 
berupa objek "user". fungsi ini akan mengembalikan nilai berupa negara tempat 
tinggal "user" tersebut.
jika objek "user" atau properti "address" tidak ditemukan, maka nilai kembalikan
berupa string "unknow".*/
function findUserCountry(user) {
  // Tulis jawaban di sini
  const country = user.address && user.address.country;
  return country || "unknow";
}
let user1 = {
  name: "Puan Maharani",
  age: 25,
  address: {
    city: "Tangerang",
    country: "Indonesia",
  },
};
let user2 = {
  name: "Mega chan",
  age: 30,
};
console.log(findUserCountry(user1));
console.log(findUserCountry(user2));
