const audioBtn = document.getElementById('audioBtn');
let audio = document.querySelector('#background-audio');

const allSongs = [
    {
        id: 0,
        src: './audio/audio1.mp3',
    },
    {
        id: 1,
        src: './audio/audio2.mp3',
    },
    {
        id: 2,
        src: './audio/audio3.mp3',
    },
];

let songs = {
    currentSong: null,
    currentIndex: 0,
    loop: true,
    autoplay: true,
    volume: 0.3,
};

audioBtn.addEventListener('click', () => {
    // console.log('clicked')
    if (songs.currentIndex >= allSongs.length - 1) {
        songs.currentIndex = 0;
    } else {
        songs.currentIndex += 1;
    }
    let src = allSongs[songs.currentIndex].src;
    console.log(src);
    audio.src = src;
    audio.play();
})

const playSong = () => {
    audio.loop = songs.loop;
    audio.autoplay = songs.autoplay
    audio.volume = songs.volume;
    // audio.play();
    audioBtn.click();
}
// audioBtn.click();
window.onload = () => playSong();


