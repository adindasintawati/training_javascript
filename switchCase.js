/*switch case : adalah logic untuk memilih salah satu dari kondisi yang sudah ditentukan*/

let remoteButton = 1; // variabel yang nilainya akan di kirim ke parameter switch case

switch (
  remoteButton // switch case dengan parameter
) {
  case 1:
    console.log("Turn On"); // kondisi yang akan di eksekusi
    break; //eksekusi logic akan berhenti jika kondisi terpenuhi
  case 2:
    console.log("Turn Off");
    break;
  case 3:
    console.log("Volume up");
    break;
  case 4:
    console.log("Volume down");
    break;
  default:
    console.log("input tidak valid"); //kondisi jika semua kondisi diatas tidak terpenuhi
    break;
}
