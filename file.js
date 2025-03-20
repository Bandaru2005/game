// Define the cards
const cards = [
    { name: 'card1', image: 'image1.jpg' },
    { name: 'card2', image: 'image2.jpg' },
    { name: 'card3', image: 'image3.jpg' },
    { name: 'card4', image: 'image4.jpg' },
    { name: 'card5', image: 'image5.jpg' },
    { name: 'card6', image: 'image6.jpg' },
    { name: 'card1', image: 'image1.jpg' },
    { name: 'card2', image: 'image2.jpg' },
    { name: 'card3', image: 'image3.jpg' },
    { name: 'card4', image: 'image4.jpg' },
    { name: 'card5', image: 'image5.jpg' },
    { name: 'card6', image: 'image6.jpg' },
];

// Shuffle the cards
function shuffleCards() {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}

// Create the game board
function createGameBoard() {
    const gameBoard = document.querySelector('.game-board');
    gameBoard.innerHTML = '';
    cards.forEach((card) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <div class="front" style="background-image: url(${card.image})"></div>
            <div class="back"></div>
        `;
        gameBoard.appendChild(cardElement);
    });
}

// Flip a card
function flipCard(cardElement) {
    cardElement.classList.toggle('flipped');
}

// Check if two cards match
function checkMatch(card1, card2) {
    return card1.name === card2.name;
}

// Game logic
let flippedCards = [];
let matchedCards = [];

function gameLogic(cardElement) {
    flipCard(cardElement);
    const card = cards[Array.prototype.indexOf.call(cardElement.parentNode.children, cardElement)];
    flippedCards.push(card);
    if (flippedCards.length === 2) {
        if (checkMatch(flippedCards[0], flippedCards[1])) {
            matchedCards.push(flippedCards[0]);
            matchedCards.push(flippedCards[1]);
            flippedCards = [];
        } else {
            setTimeout(() => {
                flipCard(document.querySelector(`.card:nth-child(${Array.prototype.indexOf.call(card
