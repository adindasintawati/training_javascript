/**1
 * buat perintah untuk membaca file JSON bernama employee.json
 * yang berisi data array of object, dan tampilin hanya nama-nama semua karyawan
 * menggunakan readFile*/
const fs = require("fs");
fs.readFile("./employee.json", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const employees = JSON.parse(data);
  employees.map((employee) => {
    console.log(employee.nama);
  });
});

/**2
 * buat perintah untuk menambahkan minimal 1 data JSON kedalam file bernama employee.json
 * gunakan readFile dan WriteFile (bukan appendFile) untuk mereplace data*/
let employee2 = [
  {
    id: 6,
    nama: "Amel",
    age: 20,
    jobDesk: [
      {
        title: "backend",
        salary: 2000000,
      },
    ],
  },
];
let data = JSON.stringify(employee2, null, 2);
fs.readFile("./employee2.json", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("read file: ", data);
});

fs.writeFile("./employee2.json", data, (err) => {
  if (err) throw err;
  console.log("File berhasil disimpan");
});

/**3
 * buat perintah untuk mencari karyawan yang usianya diatas atau sama dengan 26
 * dan simpan datanya kedalam file yang bernama karyawan_tuwir.json
 * gunakan readFile dan WriteFile (bukan appendFile) untuk mereplace data*/
fs.readFile("./employee.json", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("read file: ", data);

  let employees = JSON.parse(data);
  let filteredEmployees = employees.filter((employee) => employee.age >= 26);
  fs.writeFile(
    "karyawan_tuwir.json",
    JSON.stringify(filteredEmployees),
    (err) => {
      if (err) throw err;
    }
  );
});

/**4
 * buat perintah untuk menghapus karyawan dengan id=1 dari data employee.json
 * lalu simpan perubahannya ke file deleted_data.json
 * gunakan readFile dan WriteFile (bukan appendFile) untuk mereplace data*/
fs.readFile("./employee.json", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("read file: ", data);

  let employees = JSON.parse(data);
  let deleteId = employees.filter((employee) => employee.id !== 1);
  fs.writeFile("employee.json", JSON.stringify(deleteId), (err) => {
    if (err) throw err;
  });
});

// CLUE: JSON.parse dan JSON.stringift sangat berguna di soal-soal ini
