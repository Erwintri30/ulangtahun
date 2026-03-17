// ======================
// CAROUSEL HERO
// ======================

document.addEventListener("DOMContentLoaded", function(){

const slides = document.querySelectorAll(".slide")

if(slides.length === 0) return

let index = 0

function showSlide(){

slides[index].classList.remove("active")

index++

if(index >= slides.length){
index = 0
}

slides[index].classList.add("active")

}

setInterval(showSlide, 5000)


});


// ======================
// PILIH HADIAH
// ======================

function pilihHadiah(nomor){

let title = document.getElementById("giftTitle")
let text = document.getElementById("giftText")
let icon = document.getElementById("popupIcon")
let button = document.getElementById("popupButton")

const hadiahBenar = 6
if(nomor === 6 || nomor === 12){

icon.innerHTML = "🎉"

title.innerHTML = "💎 Hadiah Spesial"
text.innerHTML = "Selamat! Kamu menemukan hadiah yang benar 🎉 Hadiah akan dikirimkan sesuai lokasi"

button.innerHTML = "Ambil Hadiah 🎁"

button.onclick = function(){
window.location.href="ending.html"
}


confettiStart()

}else{

icon.innerHTML = "❌"

title.innerHTML = "Hadiah Tidak Tersedia"
text.innerHTML = "Yahh hadiah ini tidak tersedia 😅 Coba pilih kado lain ya!"

button.innerHTML = "Coba Lagi"

}

document.getElementById("giftPopup").style.display = "flex"

}


// ======================
// POPUP
// ======================

function tutupPopup(){
document.getElementById("giftPopup").style.display="none"
}


// ======================
// CONFETTI
// ======================

function confettiStart(){

const duration = 2000
const end = Date.now() + duration

;(function frame(){

confetti({
particleCount:4,
angle:60,
spread:60,
origin:{x:0},
zIndex:5000
})

confetti({
particleCount:4,
angle:120,
spread:60,
origin:{x:1},
zIndex:5000
})

if(Date.now() < end){
requestAnimationFrame(frame)
}

})()

}


// ======================
// BUKA KADO
// ======================

function bukaKado(){

const box = document.querySelector(".gift-box")
const message = document.getElementById("giftMessage")

box.classList.add("open")

setTimeout(()=>{
message.classList.add("show")
},400)

confetti({
particleCount:200,
spread:90,
origin:{y:0.6},
zIndex:5000
})

}

