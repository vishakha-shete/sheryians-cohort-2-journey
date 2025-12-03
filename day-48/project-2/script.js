var h1 = document.querySelector('h1');

document.body.addEventListener('keydown', function (event) {
    let key = event.code;
    h1.innerHTML = key;

    // Map keyboard keys to notes
    let noteMap = {
        "KeyA": "C",
        "KeyS": "D",
        "KeyD": "E",
        "KeyF": "F",
        "KeyG": "G",
        "KeyH": "A",
        "KeyJ": "B",
        "KeyK": "C",
        "KeyL": "D",
        "KeyM": "E",
        "KeyN": "F",
        "KeyO": "G",
    };

    // Check if key pressed is in noteMap
    if (noteMap[key]) {
        playSound(noteMap[key]);
    }
});

function playSound(note) {
    let audio = new Audio(`sounds/${note}.mp3`);
    audio.currentTime = 0;
    audio.play();
}
