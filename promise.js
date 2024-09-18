/** PROMISE : objek yang memiliki hasil dari operasi asynchronous*/

function getdataFromServer() {
  return new Promise(function (resolve, reject) {
    let data = [1, 23, 4, 5];
    resolve(data);
  });
}

getdataFromServer()
  // .then : untuk menangani hasil ketika Promise terpenuhi/data berhasil diambil
  // function(data) : fungsi yang dieksekusi dengan nilai yang diberikan dari resolve ketika Promise terpenuhi
  .then(function (data) {
    console.log("Data yang diterima: ", data);
  })
  .catch(function (error) {
    // .catch : untuk menangani error ketika Promise tidak terpenuhi/data gagal diambil
    console.log("Terjadi kesalahan: ", error);
  });

//   CONTOH LAIN ngambil beberapa data/API sekaligus (MANGGIL BEBERAPA PROMISE SEKALIGUS)
console.log("=== PARALEL PROMISE ===");
// data pertama
function getFirstData() {
  return new Promise((resolve, reject) => {
    resolve("data ke 1");
  });
}

// data kedua
function getSecondData() {
  return new Promise((resolve, reject) => {
    resolve("data ke 2");
  });
}

// Ambil data secara paralel
const getDataInParalel = () => {
  return Promise.all([getFirstData(), getSecondData()]);
};

// jalanin fungsi getDataInParalel
getDataInParalel()
  .then((data) => {
    console.log("data: ", data);
  })
  .catch((error) => {
    console.log("error: ", error);
  });
