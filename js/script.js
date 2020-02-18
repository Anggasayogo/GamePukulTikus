const tikus = document.querySelectorAll('.tikus');
const tanah = document.querySelectorAll('.tanah');
const papanSkor = document.querySelector('.papan-score');

let tanahSebelumnya;
let selesai;
let skor;

function randomTanah(tanah) {
    const t = Math.floor(Math.random() * tanah.length);
    const tRandom = tanah[t];
    if (tRandom == tanahSebelumnya) {
        randomTanah(tanah)
    }
    tanahSebelumnya = tRandom;
    return tRandom;
}

function randomeWaktu(max, min) {
    return Math.round(Math.random() * (max, min) + min);
}

function munculkanTikus() {
    const tRandom = randomTanah(tanah);
    const wRandom = randomeWaktu(200, 500);
    tRandom.classList.add('muncul')
    setTimeout(() => {
        tRandom.classList.remove('muncul')
        if (!selesai) {
            munculkanTikus()
        }
    }, wRandom);
}

function mulai() {
    selesai = false;
    skor = 0;
    papanSkor.textContent = 0;
    munculkanTikus();
    setTimeout(() => {
        selesai = true;
    }, 100000);
}


function pukul() {
    skor++;
    papanSkor.textContent = skor;
    this.parentNode.classList.remove('muncul');
}

tikus.forEach(t => {
    t.addEventListener('click', pukul);
});