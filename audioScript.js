const button = document.getElementById('_audio_brn_');
let audio =  new Audio('/audio/audio1.mp3');

const audioSettngs = {
    currentSrc: null,
    loop: true,
    autoplay: true,
    volume: 0.1,
};
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




// button.addEventListener('click', () => {
//     // audio.src = './audio/audio2.mp3';
//     // audio.loop = true;
//     // audio.autoplay=true;
//     // console.log(audio)
//     // audio.play()
// })

const playSong = (id) => {
    if (id == undefined) {
        const e = new Error("ID argument is required");
        throw e;
    }
    for (let i = 0; i < allSongs.length; i++) {
        // console.log(allSongs[i]?.id == id )
        if (allSongs[i]?.id == id) {
            audioSettngs.currentSrc = allSongs[i].src;
        }
    }

    audio.src =  audioSettngs.currentSrc;
    audio.loop = audioSettngs.loop;
    audio.autoplay = audioSettngs.autoplay;
    audio.volume = audioSettngs.volume;
    setTimeout((e)=>{
        audio.play().catch(e => {
            console.log(e);
            window.addEventListener("canplaythrough", (e) => {
                audio.play();
            })
        });
    },1000)
}
// windows.addEventListener("canPlaythrough")
window.addEventListener('load', (e) => {
    playSong(1);
});


