/*Array : tipe data yang bisa menyimpan banyak data sekaligus,
baik dengan satu jenis tipe data, atau tipe data campuran(bisa integer, string, objek)*/

// array biasa dengan total indeks 4
const array = [1, 2, 3, 4, 5];
/*cara ngambil data tertentu dari array dengan cara berikut:
 * array : panggil variabelnya
 * [n] : masukkan nilai indeksnya*/
array[4] = 10; //mengganti nilai data dari dalam array (ganti angka 5 menjadi 10)
console.log(array[2]); //ambil data indeks tertentu (ambil angka 3)
console.log(array); //ambil semua data array

// METHODS ARRAYS

// .push() : method array untuk nambahin data kedalam baris akhir array
const fruits = ["banana", "orange", "apple", "mango"];
console.log(fruits); //cek array sekarang
fruits.push("kiwi"); //push untuk nambahin data baru di akhir array
console.log(fruits); //cek array yang udah ditambahin data baru

// .unshift() : method array buat nambahin data diawal baris array
fruits.unshift("durian", "dragonfruit");
console.log(fruits); //cek array yang udah di unshift

// .shift() : method array buat ngehapus data di awal baris array
console.log("data dihapus diawal: ", array.shift());
console.log(array);
console.log("data dihapus diawal: ", fruits.shift());
console.log(fruits);

// .pop() : method array buat ngehapus data di akhir array
console.log("data dihapus diakhir: ", array.pop());
console.log(array);
console.log("data dihapus diakhir: ", fruits.pop());
console.log(fruits);

/*.splice() : method array buat nyisipin data ke dalam array
 * parameter pertama : buat ngambil posisi indeks
 * parameter kedua : buat ngehapus data*/
const fruits2 = ["banana", "orange", "apple", "mango"];
console.log("data yang belum displice: ", fruits2);
fruits2.splice(1, 2, "lemon", "kiwi");
console.log("data displice: ", fruits2);

/*slice: method array buat motong/hapus array dalam urutan tertentu*/
const fruits3 = ["banana", "orange", "lemon", "apple", "mango"];
const slicedFruits = fruits3.slice(2);
console.log("data dislice: ", slicedFruits);

/*slice 2 argumen: method array buat motong/hapus array dalam rentang data tertentu*/
const fruits4 = [
  "papaya",
  "watermelon",
  "dragonfruit",
  "apple",
  "banana",
  "startfruit",
  "grape",
];
const sliceUpTo = fruits4.slice(2, 4);
console.log("data dislice upto: ", sliceUpTo);

// .sort() : method array buat ngurutin data
const reversedArray = [7, 6, 5, 4, 3, 2, 1];
console.log("sort: ", reversedArray.sort());

// .reverse() : method array buat ngurutin data secara terbalik
const reverseArray = [1, 2, 3, 4];
console.log("reverse: ", reverseArray.reverse());

// .concat() : method aray buat nambahin data dari array lain ke array yang udah ada
let newArray = [1, 2, 3, 4, 5];
let otherArray = [12, 13, 14];
console.log("concat: ", newArray.concat(otherArray));

// .forEach(parameter) : method array buat manggil fungsi untuk nampilin isi dari setiap elemen array
let printFruit = fruits3.forEach(myFruit);
function myFruit(params) {
  console.log("for each fruit: ", params);
}

// .toString() : method array buat ngubah data array jadi string
console.log("array to string: ", newArray.toString());

// .toLocaleString() : method array buat ngubah nilai array jadi format lokal misalkan rupiah
const price = [1000, 2000, 5000, 20000, 70000];
console.log(
  "Rp. ",
  price.toLocaleString({ style: "currency", currency: "IDR" })
);

/*.reduce : method array buat mengakumulasi / totalin nilai dalam array kedalam satu hasil akhir
 * accumulator : buat nyimpen hasil yang udah di totalin dari tiap elemen sebelumnya
 * currentvalue : data selanjutnya yang mau ditotalin*/
const totalPrice = price.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue;
}, 0); // 0 : inisiasi awal nilai 0 (ngitungnya dari 0 baru di tambah 1000) (kalo ga di kasi 0 ga bisa)
console.log("reduced array(price) : ", totalPrice);

// ARRAY OF OBJECT
const employe = [
  {
    id: 1,
    nama: "dinda",
    age: 20,
    jobDesk: ["frontend", "backend", "quality assurance"],
  },
  {
    id: 1,
    nama: "adinda",
    age: 19,
    jobDesk: ["frontend", "backend"],
  },
  {
    id: 1,
    nama: "sinta",
    age: 21,
    jobDesk: ["frontend"],
  },
];

// exercise foreach (untuk nampilin data karyawan yang umurnya diatas 25) (foreach buat ngecek data, nanti hasilnya true / false)
const oldEmployee = employe.forEach((data) => {
  console.log(
    "karyawan yang umurnya diatas 20 tahun: ",
    data.nama,
    data.age > 20
  );
});

/* .map(): method array buat ngubah setiap elemen dalam array jadi nilai baru (map buat ngambil data tertentu doang) (persyaratan map: butuh return)
 * dalam contoh ini mengubah data array karyawan menjadi data namanya saja
 * sehingga data array of objek karyawan sebelumnya berubah menjadi data array yang hanya berisi nama saja*/
const basicMapping = employe.map((item) => {
  return item.nama;
});
console.log("map: ", basicMapping);

const employe2 = [
  {
    id: 1,
    nama: "naila",
    age: 25,
    jobDesk: [{ title: "backend", salary: 4000000 }],
    hobby: ["membaca", "tidur"],
  },
  {
    id: 1,
    nama: "aulia",
    age: 20,
    jobDesk: [{ title: "frontend", salary: 5000000 }],
    hobby: ["membaca"],
  },
  {
    id: 1,
    nama: "yesi",
    age: 21,
    jobDesk: [{ title: "backend", salary: 8000000 }],
    hobby: ["menulis"],
  },
];

//   mapping buat ngambil nama, jobdesk, dan hobby (menulis)
const mappingEmployee = employe2.map((item) => {
  const newObject = {
    nama: item.nama,
    job: item.jobDesk.map((job) => job.title),
    hobby: item.hobby.find((item) => item === "menulis"),
  };
  return newObject;
});
console.log("mapping data karyawan: ", mappingEmployee);

// .find() : method array buat mencari suatu data dalam array (nyari isinya)
console.log(
  fruits3.find((item) => {
    return item === "apple";
  })
);

// .findIndex() : method buat nyari index data suatu elemen dalam array (nyari datanya(nyari index ke berapa))
const findName = employe.findIndex((item) => {
  return item.nama === "dinda";
});
console.log("find index: ", findName);

// .filter() : method array buat ngefilter data dalam array
// .some() : buat ngecek apakah ada data array (minimal 1) yang memenuhi kondisi tertentu (some buat cek cuma beberapa data doang, kalau map bakal cek semuanya)
const filterFrontendDeveloper = employe2.filter((item) => {
  return item.jobDesk.some((job) => job.title === "frontend");
});
console.log("filter frontend dev: ", filterFrontendDeveloper);

// .length : method array buat menghitung panjang/jumlah data dalam array
console.log("jumlah karyawan: ", employe.length);

// .includes() : method array yang ngebalikin true or false jika data yang di cek cocok dengan suatu data dalam array
const fruits5 = [
  "banana",
  "papaya",
  "mango",
  "apple",
  "lemon",
  "kiwi",
  "orange",
];
// basic
console.log("array isi jeruk: ", fruits5.includes("orange")); //true

// argumen pertama = data yang cek, argumen kedua = urutan awal mulai pengecekan
console.log(
  "cek array isi pisang dimulai dari urutan ke tiga: ",
  fruits5.includes("banana", 3) //false
);

// .every() : method array yang ngecek apakah semua elemen dalam array memenuhi kriteria tertentu (ngecek jika ada 1 kondisi yang salah/false maka semuanya false)
const cekUmurKaryawan = employe2.every((item) => {
  return item.age >= 25;
});
console.log("karyawan umur 25 kebawah: ", cekUmurKaryawan);

// latihan:
const employee = [
  {
    id: 1,
    nama: "Danu",
    age: 25,
    jobDesk: [{ title: "frontend", salary: 12000000 }],
    hobby: ["menulis"],
  },
  {
    id: 1,
    nama: "Dinda",
    age: 26,
    jobDesk: [{ title: "frontend", salary: 2000000 }],
    hobby: ["membaca"],
  },
  {
    id: 1,
    nama: "Fatma",
    age: 27,
    jobDesk: [{ title: "backend", salary: 3000000 }],
    hobby: ["membaca", "bernyanyi"],
  },
  {
    id: 1,
    nama: "Akmal",
    age: 28,
    jobDesk: [{ title: "backend", salary: 4000000 }],
    hobby: ["membaca", "tidur"],
  },
];

// buatlah logic untuk mencari karyawan yang memiliki hobi "menulis" dan usianya diatas 25 tahun pake .find dan .includes
const hobbyAndAge = employee.find(
  (item) => item.hobby.includes("menulis") && item.age > 25
);
console.log("hobby dan umur karyawan: ", hobbyAndAge);

// buatlah logic untuk nampilin data karyawan yang bekerja sebagai "backend" dan memiliki gaji lebih dari 3 juta pake .filter & .some
const filterjobDeskAndSalary = employee.filter((item) =>
  item.jobDesk.some((item) => item.title === "backend" && item.salary > 3000000)
);
console.log("filter jobDesk and salary: ", filterjobDeskAndSalary);

// buatlah logic buat dapetin nama karyawan yang cuma punya 1 hobby pake .filter, .map, .length
console.log(
  "karyawan yang memiliki 1 hobi: ",
  employee.filter((item) => item.hobby.length === 1).map((item) => item.nama)
);

/* buatlah logic untuk nyari karyawan yang posisinya frontend dengan gaji tertinggi, lalu return nama karyawan saja pake
.filter, .some, .reduce, .find*/
const frontendEmployee = employee
  .filter((item) => item.jobDesk.some((item) => item.title === "frontend"))
  .reduce((acc, cur) =>
    acc.jobDesk[0].salary > cur.jobDesk[0].salary ? acc : cur
  );
console.log(frontendEmployee);
