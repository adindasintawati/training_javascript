/**callback adalah fungsi didalam fungsi / fungsi yang manggil fungsi lainnya
 * callback yaitu fungsi yang dikirim sebagai argumen/parameter ke fungsi yang lain
 * callback disebut asynchronous
 */
function printResult(data) {
  console.log("callback: ", data);
}
function myCalculator(nul1, nul2) {
  let sum = nul1 + nul2;
  return sum;
}
printResult(myCalculator(5, 5));
