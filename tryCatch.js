// trycatch fungsinya untuk menangani error jika data gagal diproses

// contoh
const pembagian = (num1, num2) => {
  try {
    if (num2 === 0) {
      throw "Gabisa dibagi 0 bre!";
    }
    return num1 / num2;
  } catch (error) {
    console.log(error);
  }
};

console.log("success: ", pembagian(10, 2));
console.log("failed: ", pembagian(10, 0));
