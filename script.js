
const harga = 21000;

let dimsum = 0;
let tahu = 0;

// Mengubah jumlah pesanan
function ubahJumlah(menu, nilai) {

    if (menu === "dimsum") {
        dimsum = Math.max(0, dimsum + nilai);
    }

    if (menu === "tahu") {
        tahu = Math.max(0, tahu + nilai);
    }

    hitungTotal();
}

// Menghitung total harga
function hitungTotal() {

    let total = (dimsum + tahu) * harga;

    document.getElementById("jumlahDimsum").innerText = dimsum;
    document.getElementById("jumlahTahu").innerText = tahu;

    document.getElementById("totalDimsum").innerText = dimsum;
    document.getElementById("totalTahu").innerText = tahu;

    document.getElementById("totalHarga").innerText =
        "Rp" + total.toLocaleString("id-ID");
}

// Pesan melalui GoFood
function pesanGoFood() {

    if (dimsum === 0 && tahu === 0) {
        alert("Silakan pilih menu terlebih dahulu!");
        return;
    }

    // Masukkan link toko Umma Dimsum di GoFood
    const linkGoFood = "https://gofood.link/a/QU5xpdd";

    window.open(linkGoFood, "_blank");
}
