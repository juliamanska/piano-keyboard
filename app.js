const whiteKeysContainer = document.getElementById("white-keys-container");
const blackKeysContainer = document.getElementById("black-keys-container");

for (let i = 0; i < 8; i++) {
  const whitePianoKey = document.createElement("div");
  whitePianoKey.className = "white-piano-key";
  whiteKeysContainer.appendChild(whitePianoKey);
}

for (let i = 0; i < 5; i++) {
  const blackPianoKey = document.createElement("div");
  blackPianoKey.className = "black-piano-key";
  blackKeysContainer.appendChild(blackPianoKey);
}
