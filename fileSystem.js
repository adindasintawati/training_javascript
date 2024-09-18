// FileSystem(fs) : modul untuk berinteraksi dengan file di javascript

// import module
const fs = require("fs");

// Menulis file menggunakan .writeFile("filepath", "isi file", encoding, return)
fs.writeFile(
  "./textFile.txt",
  "Halo, nama saya dinda. Saya adalah king of java",
  "utf8",
  (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("File berhasil disimpan");
  }
);

// .appendFile("filepath", "isi data", encording, return) (ngedit data dari file yang udah ada)
fs.appendFile(
  "./textFile.txt",
  "\n Saya adalah ayahnya dinda",
  "utf8",
  (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("konten berhasil ditambahkan");
  }
);

// .readFile("filepath", encoding, return) : buat ngebaca data dari sebuah file secara asynchronous
fs.readFile("./textFile.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("read file: ", data);
});

// .readFileSync : ngebaca file secara synchronous
try {
  const data = fs.readFileSync("./textFile.txt", "utf8");
  console.log("read sync: ", data);
} catch (error) {
  console.log(error);
}

// .unlink("filepath", return) : buat menghapus file
// buat file dummy bernama delete.txt didalam direktori/folder 5-nodejs-modules
fs.unlink("./delete.txt", (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("File berhasil dihapus");
});
