/** hitung luas lingkaran menggunakan Math*/
const radius = 10;
const pi = Math.PI;
const luasLingkaran = (radius, pi) => {
  return pi * radius * radius;
};
console.log("luas lingkaran: " + luasLingkaran(radius, pi));

/**cari nilai tertinggi dari 5 siswa menggunakan math*/
const nilaiSiswa = [75, 80, 65, 95, 50];
let max = nilaiSiswa[0];
for (let i = 1; i < nilaiSiswa.length; i++) {
  if (nilaiSiswa[i] > max) {
    max = nilaiSiswa[i];
  }
}
console.log("Nilai tertinggi siswa: ", max);

/**buat perhitungan harga barang yang di diskon dan bulatkan kebawah hasilnya!*/
let hargaBarang = 98000;
let persentaseDiskon = 30;
let jumlahDiskon = (hargaBarang * persentaseDiskon) / 100;
let hargaSetelahDiskon = hargaBarang - jumlahDiskon;
let hargaAkhir = Math.floor(hargaSetelahDiskon);
console.log("harga barang yang di disko: ", hargaAkhir);

/**cari selisih gaji karyawan tertinggi dan gaji terendah pake Math*/
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
const salary = employee.map(
  (item) => item.jobDesk.find((item) => item.salary).salary
);
const maxSalary = salary.reduce((acc, cur) => (acc > cur ? acc : cur));
const minSalary = salary.reduce((acc, cur) => (acc > cur ? cur : acc));
const difference = maxSalary - minSalary;

console.log("Gaji karyawan tertinggi: ", maxSalary);
console.log("Gaji karyawan terendah: ", minSalary);
console.log("Selisih gaji karyawan: ", difference);
console.log("salary: ", salary);
