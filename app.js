const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsFrom = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// List of words for game
const words = [
    "In",
    "1895,",
    "the",
    "Swedish",
    "chemist",
    "Svante",
    "Arrhenius",
    "discovered",
    "that",
    "humans",
    "could",
    "enhance",
    "the",
    "greenhouse",
    "effect",
    "by",
    "making",
    "carbon",
    "dioxide,",
    "a",
    "greenhouse",
    "gas.",
    "He",
    "kicked",
    "off",
    "100",
    "years",
    "of",
    "climate",
    "research",
    "that",
    "has",
    "given",
    "us",
    "a",
    "sophisticated",
    "understanding",
    "of",
    "global",
    "warming. Levels",
    "of",
    "greenhouse",
    "gases",
    "have",
    "gone",
    "up",
    "and",
    "down",
    "over",
    "the",
    "Earth's",
    "history,",
    "but",
    "they",
    "had",
    "been",
    "fairly",
    "constant",
    "for",
    "the",
    "past",
    "few",
    "thousand",
    "years.",
    "Global",
    "average",
    "temperatures",
    "had",
    "also",
    "stayed",
    "fairly",
    "constant",
    "over",
    "that",
    "time—until",
    "the",
    "past",
    "150",
    "years.",
    "Through",
    "the",
    "burning",
    "of",
    "fossil",
    "fuels",
    "and",
    "other",
    "activities",
    "that",
    "have",
    "emitted",
    "large",
    "amounts",
    "of",
    "greenhouse",
    "gases,",
    "particularly",
    "over",
    "the",
    "past",
    "few",
    "decades,",
    "humans",
    "are",
    "now",
    "enhancing",
    "the",
    "greenhouse",
    "effect",
    "and",
    "warming",
    "Earth",
    "significantly,",
    "and",
    "in",
    "ways",
    "that",
    "promise",
    "many",
    "effects,",
    "scientists",
    "warn. Aren't",
    "temperature",
    "changes",
    "natural?\nHuman",
    "activity",
    "isn't",
    "the",
    "only",
    "factor",
    "that",
    "affects",
    "Earth's",
    "climate.Volcanic",
    "eruptions",
    "and",
    "variations",
    "in",
    "solar",
    "radiation",
    "from",
    "sunspots,",
    "solar",
    "wind,",
    "and",
    "the",
    "Earth's",
    "position",
    "relative",
    "to",
    "the",
    "sun",
    "also",
    "play",
    "a",
    "role.",
    "So",
    "do",
    "large-scale",
    "weather",
    "patterns",
    "such",
    "as",
    "El",
    "Niut",
    "climate",
    "models",
    "that",
    "scientists",
    "use",
    "to",
    "monitor",
    "Earth’s",
    "temperatures",
    "take",
    "those",
    "factors",
    "into",
    "account.Changes",
    "in",
    "solar",
    "radiation",
    "levels",
    "as",
    "well",
    "as",
    "minute",
    "particles",
    "suspended",
    "in",
    "the",
    "atmosphere",
    "from",
    "volcanic",
    "eruptions,",
    "for",
    "example,",
    "have",
    "contributed",
    "only",
    "about",
    "two",
    "percent",
    "to",
    "the",
    "recent",
    "warming",
    "effect.The",
    "balance",
    "comes",
    "from",
    "greenhouse",
    "gases",
    "and",
    "other",
    "human",
    "-",
    "caused",
    "factors,",
    "such",
    "as",
    "land",
    "use",
    "change. The",
    "short",
    "timescale",
    "of",
    "this",
    "recent",
    "warming",
    "is",
    "singular",
    "as",
    "well.Volcanic",
    "eruptions,",
    "for",
    "example,",
    "emit",
    "particles",
    "that",
    "temporarily",
    "cool",
    "the",
    "Earth's",
    "surface.",
    "But",
    "their",
    "effect",
    "lasts",
    "just",
    "a",
    "few",
    "years.",
    "Events",
    "like",
    "El",
    "Niño",
    "also",
    "work",
    "on",
    "fairly",
    "short",
    "and",
    "predictable",
    "cycles.",
    "On",
    "the",
    "other",
    "hand,",
    "the",
    "types",
    "of",
    "global",
    "temperature",
    "fluctuations",
    "that",
    "have",
    "contributed",
    "to",
    "ice",
    "ages",
    "occur",
    "on",
    "a",
    "cycle",
    "of",
    "hundreds",
    "of",
    "thousands",
    "of",
    "years. For",
    "thousands",
    "of",
    "years",
    "now,",
    "emissions",
    "of",
    "greenhouse",
    "gases",
    "to",
    "the",
    "atmosphere",
    "have",
    "been",
    "balanced",
    "out",
    "by",
    "greenhouse",
    "gases",
    "that",
    "are",
    "naturally",
    "absorbed.As",
    "a",
    "result,",
    "greenhouse",
    "gas",
    "concentrations",
    "and",
    "temperatures",
    "have",
    "been",
    "fairly",
    "stable,",
    "which",
    "has",
    "allowed",
    "human",
    "civilization",
    "to",
    "flourish",
    "within",
    "a",
    "consistent",
    "climate."
]
//Init values
let time = 10;
let randomWord;
let score = 0;
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

// set difficulty select value
difficultySelect.value = difficulty;

// Generate random word
const getRandomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
const addWordToDOM = () => {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

addWordToDOM();

// Game over, show end screen
const gameOver = () => {
    endgameEl.innerHTML = `
        <h1>Time ran our</h1>
        <p>Your final score is ${score}</p>
        <button onclick="location.reload()">Play again</button>
    `
    endgameEl.style.display = 'flex';
}

// update time
const updateTime = () => {
    time--;
    timeEl.innerText = time;

    if (time === 0) {
        clearInterval(timeInterval);

        // Game over
        gameOver();
    }
}

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// focus on text initially
text.focus();

// Event listeners

// Typing and update score
text.addEventListener('input', (e) => {
    const insertedText = e.target.value;
    if (insertedText === randomWord) {
        addWordToDOM();

        // clear input field
        e.target.value = '';

        // update score
        score++;
        scoreEl.innerText = score;

        switch (difficulty) {
            case 'hard':
                time += 2;
                break;
            case 'medium':
                time += 3;
                break;
            case 'easy':
                time += 5;
            default:
                break;
        }

        updateTime();
    }
})

// settings btn click
settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));

// settings select 

settingsFrom.addEventListener('change', e => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
})
