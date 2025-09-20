// Array produk awal
let produkToko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

// Fungsi untuk menambahkan produk baru
const tambahProduk = (nama, harga, stok) => {
    let idBaru = produkToko.length + 1;
    let produkBaru = {id: idBaru, nama, harga, stok};
    produkToko.push(produkBaru);
    console.log(`Produk "${nama}" berhasil ditambahkan!`);
};

// Fungsi untuk menghapus produk berdasarkan id
const hapusProduk = (id) => {
    let index = produkToko.findIndex(item => item.id === id);
    if (index !== -1) {
        console.log(`Produk "${produkToko[index].nama}" berhasil dihapus.`);
        produkToko.splice(index, 1);
    } else {
        console.log("Produk tidak ditemukan!");
    }
};

// Fungsi untuk menampilkan daftar produk
const tampilkanProduk = () => {
    console.log("=== Daftar Produk Toko ===");
    produkToko.forEach(item => {
        console.log(`ID: ${item.id}, Nama: ${item.nama}, Harga: Rp${item.harga}, Stok: ${item.stok}`);
    });
    console.log("==========================");
};

// ------------------------------
// Contoh penggunaan fungsi
// ------------------------------

tampilkanProduk(); // tampilkan awal
tambahProduk("Headset", 150000, 12);
tambahProduk("Monitor", 1200000, 4);
tampilkanProduk(); // tampilkan setelah tambah
hapusProduk(2); // hapus Mouse
tampilkanProduk(); // tampilkan setelah hapus
