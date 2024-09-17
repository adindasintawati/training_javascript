/**for loop mirip dengan while, sama-sama perulangan
 * tapi for dipake kalo kita udah tau kapan perulangan tersebut harus di berhentiin*/

/**let i = 0; = inisiasi nilai awal perulangan dengan nilai 0
 * i < 5; = kondisi yang nentuin kapan perulangan akan berhenti dalam kasus ini (kurang dari 5)
 * i++; increment untuk menghentikan looping*/

for (let i = 0; i < 5; i++) {
  console.log("looping ke-", i);
}

let array = [1, 2, 3];
let tambah = 0; //nilai awal perhitungan
let kali = 2;
for (let i = 0; i < array.length; i++) {
  tambah += array[i]; //buat nambahin 0 setiap data dalam array
  kali *= array[i]; //buat kaliin 2 setiap data dalam array
}
console.log("tambah: ", tambah);
console.log("kali: ", kali);
