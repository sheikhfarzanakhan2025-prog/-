// ১. কার্ডে নাম আপডেট
function updateCard() {
    const input = document.getElementById('nameInput').value;
    document.getElementById('outputName').innerText = input ? input : "আপনার নাম";
}

// ২. কার্ড ডাউনলোড
function downloadImage() {
    const card = document.getElementById('cardCanvas');
    const btn = document.querySelector('.btn-gold');
    btn.innerText = "Processing...";

    html2canvas(card, {
        scale: 3, 
        backgroundColor: '#0a0f16',
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'Eid_Card_By_HashPakhi.png';
        link.href = canvas.toDataURL();
        link.click();
        btn.innerText = "Download Card";
    });
}

// ৩. মিউজিক কন্ট্রোল
const music = document.getElementById('eidMusic');
const musicBtn = document.getElementById('musicBtn');
const musicIcon = document.getElementById('musicIcon');

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicIcon.innerText = "⏸️";
        musicBtn.style.animation = "pulse 1.5s infinite";
    } else {
        music.pause();
        musicIcon.innerText = "🎵";
        musicBtn.style.animation = "none";
    }
}

// ৪. সালামি ট্র্যাকার
let income = 0;
let expense = 0;

function calcSalami(type) {
    const amtField = document.getElementById('salamiAmt');
    const amt = parseInt(amtField.value);

    if (!amt || amt <= 0) return;

    if (type === 'in') {
        income += amt;
        document.getElementById('totalIn').innerText = '৳ ' + income;
    } else {
        expense += amt;
        document.getElementById('totalOut').innerText = '৳ ' + expense;
    }
    amtField.value = '';
}
