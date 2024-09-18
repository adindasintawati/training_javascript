/**
 * bahasa pemrograman bisa di eksekusi dengan 2 cara yaitu synchronous dan asynchronous
 * synchronous : kode akan di eksekusi secara terurut dari atas sampe bawah
 * asynchronous : kebalikannya, kode tidak harus menunggu kode lainnya di eksekusi,
 * melainkan bisa di eksekusi secara langsung, atau sesuai waktu yang di tentukan*/

console.log("=== eksekusi pertama ===");
/**setTimeout : fungsi untuk menunda eksekusi suatu kode
 * setTimeout(fungsi/kode, waktu(milisecond))*/
function printLog() {
  console.log("===eksekusi kedua===");
}
setTimeout(printLog, 3000);
console.log("===eksekusi ketiga===");
