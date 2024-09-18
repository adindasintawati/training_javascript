/**async biasanya dipakai untuk manggil data/API */

// fungsi biasa
function getdataFromServer() {
  // Promise : objek yang mewakili hasil dari operasi asynchronous
  return new Promise(function (resolve, reject) {
    let data = { id: 1, name: "dinda", job: "frontend" };
    if (data) {
      resolve(data); // resolve akan mengembalikan data yang berhasil diambil
    } else {
      reject("data tidak ditemukan"); //reject buat mengembalikan error jika data gagal diambil
    }
  });
}

// async : dipake untuk membuat/menandai kalo fungsi ini dijalankan secara asynchronous
async function fetchData() {
  // blok tryCatch buat menangani error jika data gagal diambil
  try {
    // await : kata kunci dalam async buat nunggu hasil dari sebuah Promise
    const getData = await getdataFromServer();
    console.log("Data yang diterima: ", getData);
  } catch (error) {
    console.log("Terjadi kesalahan saat mengambil data: ", error);
  }
}
fetchData();
