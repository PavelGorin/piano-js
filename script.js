const whiteButtonKey = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const blackButtonKeyz = ['s', 'd', 'g', 'h', 'j'];
const whiteKeys = document.querySelectorAll('.piano__button_white');
const blackKeys = document.querySelectorAll('.piano__button_black');

document.querySelectorAll('.piano__button').forEach(key => {
  key.addEventListener('click', () => playNote(key));
})

document.addEventListener('keydown', e => {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = whiteButtonKey.indexOf(key);
  const blackKeyIndex = blackButtonKeyz.indexOf(key);

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add('active');
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  })
}