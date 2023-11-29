const whiteKeysContainer = document.getElementById("white-keys-container");
const blackKeysContainer = document.getElementById("black-keys-container");

const whiteKeys = ["wk1", "wk2", "wk3", "wk4", "wk5", "wk6", "wk7", "wk8"];
const blackKeys = ["bk1", "bk2", "bk3", "bk4", "bk5"];

const playSound = (soundsArray, id) => {
  for (const sound of soundsArray) {
    if (sound === id) {
      const audio = new Audio(`/audios/${sound}.mp3`);
      audio.play();
    }
  }
};

for (let i = 0; i < 8; i++) {
  const whitePianoKey = document.createElement("div");
  whitePianoKey.className = "white-piano-key";
  whitePianoKey.id = `wk${i + 1}`;
  whiteKeysContainer.appendChild(whitePianoKey);
  whitePianoKey.addEventListener("click", () =>
    playSound(whiteKeys, whitePianoKey.id)
  );
}

for (let i = 0; i < 5; i++) {
  const blackPianoKey = document.createElement("div");
  blackPianoKey.className = "black-piano-key";
  blackPianoKey.id = `bk${i + 1}`;
  blackKeysContainer.appendChild(blackPianoKey);
  blackPianoKey.addEventListener("click", () =>
    playSound(blackKeys, blackPianoKey.id)
  );
}
