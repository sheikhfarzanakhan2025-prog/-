// ১. কার্ডে নাম আপডেট করা
function updateCard() {
    const input = document.getElementById('nameInput').value;
    document.getElementById('outputName').innerText = input ? input : "আপনার নাম";
}

// ২. কার্ড ডাউনলোড এবং কনফেটি ইফেক্ট
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

        // বড় কনফেটি এনিমেশন
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#FFD700', '#FFFFFF', '#00ffcc']
        });
    });
}

// ৩. মিউজিক কন্ট্রোল
const music = document.getElementById('eidMusic');
const musicBtn = document.getElementById('musicBtn');
const musicIcon = document.getElementById('musicIcon');

function toggleMusic() {
    if (music.paused) {
        music.play().catch(err => console.log("অটো-প্লে ব্লক করা হয়েছে।"));
        musicIcon.innerText = "⏸️";
        musicBtn.classList.add('playing');
    } else {
        music.pause();
        musicIcon.innerText = "🎵";
        musicBtn.classList.remove('playing');
    }
}

// ৪. সালামি ট্র্যাকার
let income = 0;
let expense = 0;

function calcSalami(type) {
    const amtField = document.getElementById('salamiAmt');
    const amt = parseInt(amtField.value);

    if (isNaN(amt) || amt <= 0) return;

    if (type === 'in') {
        income += amt;
        document.getElementById('totalIn').innerText = '৳ ' + income;
        // সালামি পেলে হালকা কনফেটি
        confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
    } else {
        expense += amt;
        document.getElementById('totalOut').innerText = '৳ ' + expense;
    }
    amtField.value = '';
}

