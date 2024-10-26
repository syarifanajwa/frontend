function tampilkanData() {
  var buah = document.getElementById('buah').value.toLowerCase();
  var dataPembelian = document.getElementById('dataPembelian');
  var namaBuah = document.getElementById('namaBuah');
  var harga = document.getElementById('harga');
  var diskon = document.getElementById('diskon');

  // Simulasi data buah (ganti dengan data dari database atau API)
  var daftarBuah = {
    nanas: { harga: 7500, diskon: 5 },
    anggur: { harga: 35000, diskon: 15 },
    melon: { harga: 12500, diskon: 10 },
  };

  if (daftarBuah[buah]) {
    namaBuah.textContent = buah;
    harga.textContent = daftarBuah[buah].harga;
    diskon.textContent = daftarBuah[buah].diskon + '%';
    dataPembelian.style.display = 'block';
  } else {
    alert('Buah tidak ditemukan');
  }
}
