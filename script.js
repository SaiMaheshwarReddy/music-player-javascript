const seekFiller = document.querySelector(".fill")
const timer = document.querySelector(".time")
const imgBox = document.querySelector(".img__box img")
const titleText = document.querySelector(".title__text")

const audios = ["audio/Vellipomaakey.mp3","audio/Arms Around You.mp3", "audio/By Your Side.mp3", "audio/Cry for Me.mp3", "audio/Hello My Love.mp3", "audio/I See Love.mp3", "audio/Sucker.mp3", "audio/Sugar & Brownies.mp3"]
const covers = ["covers/vellipomaakey.jpg", "covers/armsaroundyou.png", "covers/byyourside.jpg", "covers/cryforme.png", "covers/hellomylove.png", "covers/iseelove.jpg", "covers/sucker.png",
"covers/sugarsandbrownies.jpg"]

const titles = ["Vellipomaakey","Arms Around You", "By Your Side", "Cry for Me", "Hello_My_Love", "I See Love", "Sucker", "Sugar & Brownies"]

let audio = new Audio()

var currentSong = 0;
titleText.textContent = titles[currentSong]
document.querySelector(".play").addEventListener("click", (e)=> {
    e.preventDefault()
    togglePlayPause()
})

document.querySelector(".next").addEventListener("click", (e)=> {
e.preventDefault()
nextAudio()
})
document.querySelector(".previous").addEventListener("click", (e)=> {
    e.preventDefault()
    prevAudio()
    })
window.onload = playSong;
function playSong() {
    audio.src = audios[currentSong]
    selectABox(currentSong)
    audio.play()
    
   
}

function togglePlayPause() {
    if(audio.paused){
        audio.play()
        let playBtn = document.querySelector(".play")
        playBtn.innerHTML = "<i class='fa fa-pause'><i></i>"
    } else{
        audio.pause();
   playBtn = document.querySelector(".play")
   playBtn.innerHTML = "<i class='fa fa-play'><i></i>"

    }
}

audio.addEventListener("timeupdate", ()=>{
    let position = audio.currentTime / audio.duration;
    seekFiller.style.width = position * 100 + "%";
    changeTime(Math.round(audio.currentTime))
})

function changeTime(seconds) {
    let min = Math.floor(seconds/60);
    let sec = seconds % 60;

    min = min < 10 ?"0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    timer.textContent = min + ":" + sec;
    totalTime(Math.round(audio.duration))
}



function totalTime(seconds) {
    let min = Math.floor(seconds/60);
    let sec = seconds % 60;
    min = min < 10 ?"0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    timer.textContent += " - " + min + ":" + sec;
}

function nextAudio() {
currentSong++;

if(currentSong > 7) {
    currentSong = 0;
}
selectABox(currentSong)
titleText.textContent = titles[currentSong]

playSong()
playBtn = document.querySelector(".play")
   playBtn.innerHTML = "<i class='fa fa-pause'><i></i>"
imgBox.setAttribute("src", covers[currentSong])
}
function prevAudio() {
    currentSong--;
    if(currentSong < 0) {
        currentSong = 2;
    }
    selectABox(currentSong)
    titleText.textContent = titles[currentSong]
   
    
    playSong()
    playBtn = document.querySelector(".play")
       playBtn.innerHTML = "<i class='fa fa-pause'></i>"
    imgBox.setAttribute("src", covers[currentSong])
    }




    const musicPlaylist = document.querySelector(".music__playlist")

    covers.forEach((cover, index)=> {
createSongBox(cover, index)

    })


function createSongBox(cover, index) {
    const songBox = document.createElement("div")
    songBox.setAttribute("class", "song__box")
const songsInfo = ` <div class="playlist__img__box">
<img src=${cover} alt="" class="playlist__img">
</div><h2 class="playlist__title__text">${titles[index]}</h2>`
    songBox.innerHTML = songsInfo
    musicPlaylist.appendChild(songBox)
}

const selectSongBox = document.querySelectorAll(".song__box")

selectSongBox.forEach((box, index)=> {
box.addEventListener("click", (e)=> {
    e.preventDefault()
    highlightSelected(e)
    currentSong = index
    titleText.textContent = titles[currentSong]
if(audio.play){
    playBtn = document.querySelector(".play")
    playBtn.innerHTML = "<i class='fa fa-pause'><i></i>"

}else{
    playBtn = document.querySelector(".play")
    playBtn.innerHTML = "<i class='fa fa-play'><i></i>"
}
    imgBox.setAttribute("src", covers[currentSong])
    audio.src = audios[index]
    audio.play()

})
audio.addEventListener("timeupdate", ()=>{
    let position = audio.currentTime / audio.duration;
    seekFiller.style.width = position * 100 + "%";
    changeTime(Math.round(audio.currentTime))
})
    function changeTime(seconds) {
        let min = Math.floor(seconds/60);
        let sec = seconds % 60;
    
        min = min < 10 ?"0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
        timer.textContent = min + ":" + sec;
        totalTime(Math.round(audio.duration))
    }
    
    
    
    function totalTime(seconds) {
        let min = Math.floor(seconds/60);
        let sec = seconds % 60;
        min = min < 10 ?"0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
    
        timer.textContent += " - " + min + ":" + sec;
    }
})

function highlightSelected(e) {
  document.querySelectorAll(".song__box").forEach(box => {
      box.classList.remove("selected")
        e.target.classList.add("selected")
       
  })
 
}

function selectABox(pos){
const Box = document.querySelectorAll(".song__box")
Box.forEach(bx => {
    bx.classList.remove("selected")
})

Box[pos].classList.add("selected")
}



   
       
    





   

