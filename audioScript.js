/*
window.onload = function() {
    var audio = document.getElementById("background-audio");
    
    if (audio.canPlayType("audio/mpeg") !== "") {
        audio.src = "your-audio-file.mp3";
    } else if (audio.canPlayType("audio/ogg") !== "") {
        audio.src = "your-audio-file.ogg";
    } else {
        audio.innerHTML = "Your browser does not support the audio element.";
    }
    
    audio.autoplay = true;
    audio.loop = true;
};
*/




// document.addEventListener('DOMContentLoaded', function () {
//     var audio = document.getElementById('background-audio');
//     if (audio) {
//         audio.volume = 0.5; // Adjust the volume (0.0 to 1.0)
//         audio.play();
//     }
// });

// window.onload = function () {
//     var audio = document.getElementById("background-audio");
//     audio.src = "./audio/audio.mp3";
//     audio.autoplay = true;
//     audio.loop = true;
// };



// console.log(playAudioFun(audio))

// window.onload = function () {
//     setTimeout(function () {


//         audio.autoplay = true;
//         audio.loop = true;
//         audio.volume = 0.3;
//         audio.play();

//         // audio.addEventListener("canplaythrough", () => {
//         //     audio.play().catch(e => {
//         //         window.addEventListener('click', () => {
//         //             audio.play()
//         //         })
//         //     })
//         // });

//     }, 1000); // 1000 milliseconds = 1 second
// };

let audioName = 'audio2';
const changeBtn = document.querySelector("#_audio_brn_");
let audio_url = `./audio/${audioName}.mp3`;
changeBtn.addEventListener('click', () => {

   console.log(Math.trunc(Math.random() * 3));   
   audioName = `audio${Math.trunc(Math.random() * 3) + 1}`;
   let audio_url = `./audio/${audioName}.mp3`;
   console.log(audioName, audio_url);
})

let audio = new Audio(audio_url);
const playAudioFun = (audioElement) => {
    if (!(audioElement instanceof Object)) return
    audioElement.autoplay = true;
    audioElement.loop = true;
    audioElement.volume = 0.3;
    // audioElement.play();
    // console.log(audio_url)
}
window.onload = function () {
    setTimeout(function () {
        playAudioFun(audio);
    }, 1000)
}
