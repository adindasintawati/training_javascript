const a = 100;
const b = 5;

// OPERATOR MATEMATIKA
const add = a + b;
console.log("perjumlahan: ", add);
console.log("pengurangan: ", a - b);
console.log("perkalian: ", a * b);
console.log("modulus: ", a % b);
console.log("jumlah dan kali: ", (a + b) * b);

// OPERATOR PERBANDINGAN
console.log("===Equal==="); //sama dengan
console.log(a == 100); //true
console.log(a == 20); //false

let sifat = "rajin";
console.log("===Not Equal==="); //tidak sama dengan
console.log(sifat != "nakal"); //true
console.log(sifat != "Rajin"); //true

console.log("===Strict Equal==="); //sama dengan variabel dan tipedatanya
console.log(a === 100); //true
console.log(a === "100"); //false

console.log("===Strict Not Equal==="); //tidak sama dengan variabel dan tipedatanya
console.log(a !== "100"); //true
console.log(a !== 100); //false

console.log("===Kurang/Lebih dari atau sama dengan===");
console.log(a < 100); //false
console.log(a > 100); //false
console.log(a <= 100); //true
console.log(a >= 100); //true

// Operator kondisional OR (ngehasilin nilai false kalo ada salah satu nilai yang true) (OR untuk ngebandingin kondisi)
console.log("true or true : ", true || true); //true
console.log("false or true : ", false || true); //true
console.log("false or false : ", false || false); //false
console.log("false or true or false : ", false || true || false); //true
console.log(
  "false or false or true or true or false : ",
  false || false || true || true || false
); //true
console.log(
  "true or false or true or false : ",
  true || false || true || false
); //true

// Operator kondisional AND (ngehasilin nilai false kalo ada salah satu nilai yang true) (kebalikan dari OR) (AND untuk nambahin kondisi)
console.log("true and true : ", true && true); // true
console.log("false and true : ", false && true); // false
console.log("false and false : ", false && false); // false
console.log("false and true and false : ", false && true && false); // false
console.log(
  "false and false and true and true and false : ",
  false && false && true && true && false
); // false
console.log(
  "true and false and true and false : ",
  true && false && true && false
); // false
