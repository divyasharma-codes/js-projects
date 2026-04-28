const songs = [
  {
    title: "Song 1",
    src: "song1.mp3"
  },
  {
    title: "Song 2",
    src: "song2.mp3"
  }
];

let currentSong = 0;
let isPlaying = false;

const audio = document.getElementById("audio");
const title = document.getElementById("songTitle");

function loadSong() {
  audio.src = songs[currentSong].src;
  title.innerText = songs[currentSong].title;
}

function playPause() {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying = !isPlaying;
}

function nextSong() {
  currentSong++;
  if (currentSong >= songs.length) currentSong = 0;
  loadSong();
  audio.play();
}

function prevSong() {
  currentSong--;
  if (currentSong < 0) currentSong = songs.length - 1;
  loadSong();
  audio.play();
}

loadSong();