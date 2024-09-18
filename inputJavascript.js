// import modul readline dari nodejs(untuk input/output)
const readline = require("readline");

// buat interface untuk input ke terminal
const inputNama = readline.createInterface({
  input: process.stdin, //untuk ngambil inputan dari keyboard user
  output: process.stdout, //untuk nampilin output ke terminal
});

// comment salah satu dari contoh dibawah ini buat jalanin program
// contoh ngambil 1 inputan
// .question untuk nampilin pertanyaan ke user
// inputNama.question("Masukkan nama: ", (nama) => {
//   console.log("Halo, ", nama); //nampilin jawaban
//   inputNama.close(); //close input
// });

// contoh ngambil 2 inputan
inputNama.question("Masukkan nama: ", (nama) => {
  inputNama.question("Masukkan umur: ", (age) => {
    console.log("Halo, ", nama, ", umur ", age); //nampilin jawaban
    console.log("Halo, ${nama} umur ${age}"); // cara cepet nampilin beberapa data dalam string
    inputNama.close(); //close input
  });
});
