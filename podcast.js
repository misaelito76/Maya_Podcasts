//Position variable
let current = 0
//Audios fetched from Assets file
let = podcast_1 = "/Assets/1.mp3"
let = podcast_2 = "/Assets/2.mp3"
let = podcast_3 = "/Assets/3.mp3"
let = podcast_4 = "/Assets/4.mp3"
let = podcast_5 = "/Assets/5.mp3"
//Label for HTML
let currentlyPlaying = document.getElementById('podcast')
let audios = [podcast_1, podcast_2, podcast_3, podcast_4, podcast_5];
let audio = new Audio()
//Play podcast function
function playPodcast() {
  setTimeout(() => {
    felix.classList.add("inactive");
  }, 1000);
  if (current < audios.length) {
    console.log(audios[current])
    audio.src = audios[current]
    audio.play()
    //HTML tag for currently played audio
    currentlyPlaying.innerText = "Now Playing :" + audios[current]
    userMadeDecision = false;
    felix.classList.remove("inactive");
    felix.classList.add("active");
    setTimeout(function () {
      if (!userMadeDecision) {
        felix.classList.remove("active");
        felix.classList.add("inactive");
        setTimeout(function () {
          felix.classList.remove("inactive");
        }, 14000);
      }
    }, 14000);
    //Refreshing page after last audio played
  } else {
    location.reload()
  }

  current++
}
//Pause variable
let isPaused = function pauseAudio() {
  audio.pause();
  return
}
