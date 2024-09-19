const fs = require("fs");

const carProducts = [
  {
    id: 1,
    name: "ESEMKA SUV 4x4 Hybrid",
    price: null,
    tag: ["Produk Terlaris"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertalite",
      },
      {
        color: "silver",
        transmission: "manual",
        type: "hybrid",
        fuelType: "pertalite",
      },
    ],
    isPreorder: true,
  },
  {
    id: 2,
    name: "BAGATATA Hyper Car V12",
    price: 370000000000,
    tag: ["Produk Terlaris", "Promo"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "engine",
        fuelType: "premium",
      },
      {
        color: "white",
        transmission: "manual",
        type: "engine",
        fuelType: "premium",
      },
    ],
    isPreorder: false,
  },
  {
    id: 3,
    name: "FIRIRIRI F8 Hyper Car Limited Edition",
    price: 4400000000,
    tag: ["Produk Terbaru", "Promo"],
    variant: [
      {
        color: "red",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertalite",
      },
      {
        color: "white",
        transmission: "manual",
        type: "engine",
        fuelType: "pertalite",
      },
    ],
    isPreorder: false,
  },
  {
    id: 4,
    name: "LEMBERGEMBER Revuelto Supercar V12 Plug-In Hybrid",
    price: 7000000000,
    tag: ["Produk Terbaru"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
      {
        color: "blue",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
      {
        color: "green",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
      {
        color: "red",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
    ],
    isPreorder: false,
  },
  {
    id: 5,
    name: "TOYOTA Land Cruiser Prado 4x4",
    price: 250000000,
    tag: ["Produk Terlaris"],
    variant: [
      {
        color: "matte black",
        transmission: "automatic",
        type: "engine",
        fuelType: "solar",
      },
      {
        color: "army",
        transmission: "automatic",
        type: "engine",
        fuelType: "solar",
      },
      {
        color: "white",
        transmission: "automatic",
        type: "engine",
        fuelType: "solar",
      },
    ],
    isPreorder: false,
  },
  {
    id: 6,
    name: "Wuling YangWang U9 EV",
    price: null,
    tag: ["Produk Terbaru"],
    variant: [
      {
        color: "matte black",
        transmission: "automatic",
        type: "electric",
        fuelType: "battery",
      },
      {
        color: "navy",
        transmission: "automatic",
        type: "electric",
        fuelType: "battery",
      },
      {
        color: "white",
        transmission: "automatic",
        type: "electric",
        fuelType: "battery",
      },
    ],
    isPreorder: true,
  },
  {
    id: 7,
    name: "Beat Esp 110 Second",
    price: 7500000,
    tag: ["Produk Terlaris", "Bekas"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
      {
        color: "navy",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
      {
        color: "white",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
      {
        color: "red",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
    ],
    isPreorder: false,
  },
];

//   1. Cari dan tampilkan data mobil dengan harga tertinggi dan terendah
const expensive = carProducts.reduce((acc, cur) =>
  acc.price > cur.price ? acc : cur
);
const cheap = carProducts
  .filter((data) => data.price)
  .reduce((acc, cur) => (acc.price > cur.price ? cur : acc));
console.log("harga mobil tertinggi: ", expensive);
console.log("harga mobil terendah: ", cheap);

//   2. Cari dan tampilkan data mobil dengan tag "Promo"
const promo = carProducts.filter((item) => item.tag.includes("Promo"));
console.log("daftar mobil dengan tag promo: ", promo);

//   3. Urutkan dan tampilkan mobil dari harga tertinggi ke rendah, jika ada harga yang null, tampilkan diurutan terakhir
const price = carProducts.sort((a, b) => b.price - a.price);
console.log("list harga mobil tertinggi ke terendah: ", price);

//   4. Kelompokkan mobil-mobil berdasarkan tipe (engine, hybrid, electric) dan tampilkan data mobil berdasarkan kelompoknya
const engine = carProducts.filter((item) =>
  item.variant.some((item) => item.type === "engine")
);
const hybrid = carProducts.filter((item) =>
  item.variant.some((item) => item.type === "hybrid")
);
const electric = carProducts.filter((item) =>
  item.variant.some((item) => item.type === "electric")
);
console.log("mobil berdasarkan tipe engine: ", engine);
console.log("mobil berdasarkan tipe hybrid: ", hybrid);
console.log("mobil berdasarkan tipe electric: ", electric);

//   5. buat fungsi yang membaca data dari file JSON carProducts.json secara ASYNCHRONOUS, lalu urutkan mobil berdasarkan harga dari tinggi ke rendah, tampilin hasilnya ke file JSON yang sama
function getCarProducts() {
  return new Promise((resolve, reject) => {
    fs.readFile("./carProducts.json", "utf8", (err, data) => {
      if (err) {
        reject("error readFile => " + err);
        return;
      }

      try {
        const cars = JSON.parse(data);
        cars.sort((a, b) => b.price - a.price);
        resolve(cars);
      } catch (parseError) {
        reject("Error parsing JSON: " + parseError);
      }
    });
  });
}

// getCarProducts()
//   .then((res) => console.log("ini res => ", res))
//   .catch((err) => console.log("error bos => "));

async function storeBackToJson() {
  try {
    const response = await getCarProducts();

    fs.writeFile("./carProducts.json", JSON.stringify(response), (err) => {
      if (err) throw err;
    });
  } catch (error) {
    console.log("error getData => ", error);
  }
}
storeBackToJson();

//   6. Buat fungsi untuk menambahkan mobil baru dari carProducts.json kedalam file "addNewCarProducts.json"
function getDataCars() {
  return new Promise((resolve, reject) => {
    fs.readFile("./carProducts.json", "utf8", (error, data) => {
      if (error) {
        reject("eror => ", error);
        return;
      }
      try {
        const newCars = JSON.parse(data);
        newCars.push([
          {
            id: 8,
            nama: "Toyota Alphard 2.5L X CVT",
            price: 1407000000,
            tag: ["Produk Terlaris"],
            variant: [
              {
                color: "black",
                transmission: "automatic",
                type: "engine",
                fuelType: "premium",
              },
              {
                color: "white",
                transmission: "manual",
                type: "engine",
                fuelType: "premium",
              },
            ],
            isPreorder: false,
          },
        ]);
        resolve(newCars);
      } catch (parseError) {
        reject("eror => ", parseError);
      }
    });
  });
}
async function productBackToJson() {
  try {
    const response = await getDataCars();

    fs.writeFile(
      "./addNewCarProducts.json",
      JSON.stringify(response),
      (err) => {
        if (err) throw err;
      }
    );
  } catch (error) {
    console.log("error getData => ", error);
  }
}
productBackToJson();

//   7. buat fungsi ASYNCHRONOUS yang mengambil produk mobil dengan harga tertinggi dan terendah, lalu hitung selisih harganya.
function getCarProductsPrice() {
  return new Promise((resolve, reject) => {
    fs.readFile("./carProducts.json", "utf8", (err, data) => {
      if (err) {
        reject("error readFile => ", err);
        return;
      }

      try {
        const cars = JSON.parse(data);
        const maxSalary = cars.reduce((acc, cur) =>
          acc.price > cur.price ? acc : cur
        );
        const minSalary = cars
          .filter((price) => price.price)
          .reduce((acc, cur) => (acc.price > cur.price ? cur : acc));
        const difference = maxSalary.price - minSalary.price;
        resolve({ maxSalary, minSalary, difference });
      } catch (parseError) {
        reject("error parsing JSON: ", parseError);
      }
    });
  });
}

async function fetchData() {
  try {
    const response = await getCarProductsPrice();
    console.log("harga mobil tertinggi: ", response.maxSalary);
    console.log("harga mobil terendah: ", response.minSalary);
    console.log("selisih harga mobil: ", response.difference);
  } catch (error) {
    console.log("error getData => ", error);
  }
}
fetchData();

//   8. buat fungsi yang mencari mobil dengan varian warna terbanyak.
const variantCars = carProducts.reduce((acc, cur) =>
  acc.variant.length > cur.variant.length ? acc : cur
);
console.log("daftar mobil dengan varian warna terbanyak: ", variantCars);

//   9. buat fungsi untuk mencari mobil yang tidak preorder
const nonPreorderCars = carProducts.filter((data) => data.isPreorder !== true);
console.log("list mobil yang tidak preorder: ", nonPreorderCars);

//   10. buat looping untuk menampilkan SEGITIGA SAMA KAKI
//     *
//    ***
//   *****
//  *******
// *********
let nomor = 1;
let max = 5;
let string = "";
for (nomor; nomor <= max; nomor++) {
  for (let i = 1; i <= max - nomor; i++) {
    string += " ";
  }
  for (let j = 0; j < 2 * nomor - 1; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
