function showGallery() {
  document.getElementById('gallery').classList.remove('hidden');
}


function blowCandle() {
  const flame = document.getElementById('flame');
  if (flame) {
    flame.style.display = 'none'; // matikan api
    // Tambahkan efek suara tiupan (opsional)
    const audio = new Audio('tiupan.mp3');
    audio.play();
  }
}
