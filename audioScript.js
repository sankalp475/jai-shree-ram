const audioBtn  = document.getElementById('audioBtn');
let audio = document.querySelector('#background-audio');

const allSongs = [
    {
        id: 0,
        src: 'audio/audio1.mp3',
    },
    {
        id: 1,
        src: 'audio/audio2.mp3',
    },
    {
        id: 2,
        src: 'audio/audio3.mp3',
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
    console.log('clicked')
    if (songs.currentIndex >= 2) {
        songs.currentIndex = 0;
    } else {
        songs.currentIndex += 1;
    }
    audio.src = allSongs[songs.currentIndex].src;
    audio.loop = songs.loop;
    audio.autoplay = songs.autoplay
    audio.volume = songs.volume;
    audio.play();
})

const playSong = () => {
    audio.loop = songs.loop;
    audio.autoplay = songs.autoplay
    audio.volume = songs.volume;
    // audio.play().catch(e => {
    //     audioBtn.click();
    // });
    audioBtn.click();
}
audioBtn.click();
window.onload = () => playSong();


