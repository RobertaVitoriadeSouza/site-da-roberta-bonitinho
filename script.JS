
function showSection(sectionId) {
    const sections = document.querySelectorAll('.full-screen');
    sections.forEach(sec => sec.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

function showTimeline() {
    showSection('timeline');
}

function showLoveLetter() {
    showSection('loveLetter');
}

function showLoveList() {
    showSection('loveList');
}

function showMemoryGame() {
    showSection('memoryGame');
    startMemoryGame();
}

function showSurprise() {
    showSection('surprise');
}

// Jogo da Memória
let firstCard = null;
let secondCard = null;
let lockBoard = false;

function startMemoryGame() {
    const cards = document.querySelectorAll('.memory-card');
    cards.forEach(card => {
        card.classList.remove('flip');
        card.style.visibility = 'visible';
    });
    shuffleCards();
}

function flipCard(card) {
    if (lockBoard || card.classList.contains('flip')) return;

    card.classList.add('flip');

    if (!firstCard) {
        firstCard = card;
        return;
    }

    secondCard = card;
    checkMatch();
}

function checkMatch() {
    lockBoard = true;
    const img1 = firstCard.querySelector('img').src;
    const img2 = secondCard.querySelector('img').src;

    if (img1 === img2) {
        setTimeout(() => {
            firstCard.style.visibility = 'hidden';
            secondCard.style.visibility = 'hidden';
            resetBoard();
        }, 500);
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            resetBoard();
        }, 800);
    }
}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

function shuffleCards() {
    const cards = document.querySelectorAll('.memory-card');
    cards.forEach(card => {
        const random = Math.floor(Math.random() * 12);
        card.style.order = random;
    });
}

// Música romântica
let music = new Audio('https://www.bensound.com/bensound-music/bensound-tenderness.mp3');
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        music.pause();
    } else {
        music.play();
        music.loop = true;
    }
    isPlaying = !isPlaying;
}
