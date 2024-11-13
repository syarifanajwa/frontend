// Daftar pilihan kota dan biaya jarak antar kota
const kotaOptions = ['Banyuwangi', 'Jember', 'Probolinggo', 'Surabaya'];
const biayaJarak = {
  Banyuwangi: { Banyuwangi: 5000, Jember: 7500, Probolinggo: 10000, Surabaya: 15000 },
  Jember: { Banyuwangi: 7500, Jember: 0, Probolinggo: 8500, Surabaya: 12500 },
  Probolinggo: { Banyuwangi: 10000, Jember: 8500, Probolinggo: 0, Surabaya: 6500 },
  Surabaya: { Banyuwangi: 15000, Jember: 12500, Probolinggo: 6500, Surabaya: 5000 },
};

// Menambahkan daftar kota ke dalam dropdown kota asal dan kota tujuan
$(document).ready(function () {
  kotaOptions.forEach((kota) => {
    $('#kotaAsal').append(`<option value="${kota}">${kota}</option>`);
    $('#kotaTujuan').append(`<option value="${kota}">${kota}</option>`);
  });
});

// Fungsi untuk menghitung biaya berat
function biayaBerat(berat) {
  if (berat > 0 && berat <= 1) return 1500;
  else if (berat > 1 && berat <= 5) return 2500;
  else if (berat > 5 && berat <= 10) return 3500;
  else return 4500;
}

// Fungsi untuk menghitung total biaya pengiriman
function hitungBiaya() {
  const kotaAsal = $('#kotaAsal').val();
  const kotaTujuan = $('#kotaTujuan').val();
  const beratBarang = parseFloat($('#beratBarang').val());

  if (kotaAsal && kotaTujuan && beratBarang) {
    // Ambil biaya jarak dan biaya berat
    const biayaJarakKota = biayaJarak[kotaAsal][kotaTujuan];
    const biayaBeratBarang = biayaBerat(beratBarang);

    // Hitung total biaya
    const totalBiaya = biayaJarakKota + biayaBeratBarang;

    // Tampilkan hasil
    $('#totalBiaya').val(totalBiaya);
  } else {
    alert('Silakan lengkapi semua data.');
  }
}
