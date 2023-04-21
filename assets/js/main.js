//Elements instances
var x = document.getElementById('bg-music')
var onicon = document.getElementById('volume-on-icon')
var officon = document.getElementById('volume-off-icon')
var container = document.getElementById('main-container')
var info_layer = document.getElementById('info-layer-id')
var info_layer_container = document.getElementById('info-layer-container-id')
var bg_music_src = document.getElementById('bg-music-src')
var bg_layer = document.getElementById('background-layer')

var buttonToSection3 = document.getElementById('buttonToPage3')
var stagebg = document.getElementById('stage-background')
var video_opening = document.getElementById('video-opening')
var gif_opening = document.getElementById('gif-opening')

//Animations instances
var terry = document.getElementById('terry-animation')
var geese = document.getElementById('geese-animation')
var kim = document.getElementById('kim-animation')

//Section instances
var section1 = document.getElementById('title')
var section2 = document.getElementById('section-2')
var section3 = document.getElementById('section-3')
var section4 = document.getElementById('section-4')

//SFX Instances
var audio = new Audio('./assets/sfx/Start-Sound.wav')
var geese_knocked = new Audio('./assets/sfx/geese-knocked-voice.mp3')
var burnknuckle = new Audio('./assets/sfx/Burning-Knuckle.mp3')
var hit_burnknuckle = new Audio('./assets/sfx/burning-knuckle-hit.mp3')
var terry_ok = new Audio('./assets/sfx/terry-ok.mp3')
var kim_hienzan = new Audio('./assets/sfx/kim-hienzan.mp3')
var terry_taunt = new Audio('./assets/sfx/terry-taunt.mp3')
var kim_victory = new Audio('./assets/sfx/kim-victory.mp3')
var terry_rising_tackle = new Audio('./assets/sfx/terry-rising-tackle.mp3')
var floor_hit = new Audio('./assets/sfx/floor-hit.mp3')
var floor_hit_2 = new Audio('./assets/sfx/floor-hit.mp3')

//Play and stop music function
function play_stop() {
    if (x.muted) {
        x.muted = false
        officon.classList.remove('active')
        officon.classList.add('inactive')
        onicon.classList.remove('inactive')
        onicon.classList.add('active')
    } else {
        x.muted = true
        onicon.classList.remove('active')
        onicon.classList.add('inactive')
        officon.classList.remove('inactive')
        officon.classList.add('active')
    }
}

//Start Portfolio function
function startPortfolio() {
    x.volume = 0.40
    x.play()
    section1.style.display = 'none'
    video_opening.style.display = 'block'
    info_layer.style.backgroundColor = 'transparent'
    gif_opening.style.display = 'block'
    audio.volume = 0.4
    audio.play()
    setTimeout(() => {
        video_opening.style.backgroundColor = 'transparent'
    }, 2800)
    setTimeout(() => {
        gif_opening.style.display = 'none'
    }, 3100)
    setTimeout(() => {
        terry.classList.remove('terry-idle')
        terry.classList.add('terry-burn-knuckle')
        burnknuckle.volume = 0.4
        burnknuckle.play()
    }, 7000)
    setTimeout(() => {
        geese.volume = 0.2
        geese_knocked.play()
        hit_burnknuckle.volume = 1
        hit_burnknuckle.play()
    }, 7300)
    setTimeout(() => {
        geese.classList.remove('geese-idle')
        geese.classList.add('geese-knocked')

    }, 7400)
    setTimeout(() => {
        terry.classList.remove('terry-burn-knuckle')
        terry.classList.add('terry-idle')
        terry.style.right = '55%'
        bg_layer.classList.add('shake-screen')
    }, 7900)
    setTimeout(() => {
        floor_hit.volume = 0.6
        floor_hit.play()
    }, 8000)
    setTimeout(() => {
        floor_hit_2.volume = 0.6
        floor_hit_2.play()
    }, 8500)
    setTimeout(() => {
        bg_layer.classList.remove('shake-screen')
    }, 8700)
    setTimeout(() => {
        geese.classList.remove('geese-knocked')
        geese.classList.add('geese-pant')
        geese.style.left = '15%'
        info_layer_container.style.overflowY = 'scroll'
        info_layer_container.style.height = '65%'
        section2.style.visibility = 'visible'
        section3.style.visibility = 'visible'
        section2.style.height = 'auto'
        section3.style.height = 'auto'
    }, 9000)
}

function displayPage3() {
    buttonToSection3.onclick = 'null'
    terry.classList.remove('terry-idle')
    terry.classList.add('terry-throw-hat')
    setTimeout(() => {
        terry_ok.play()
        var fadeout = setInterval(() => {
            x.volume -= 0.05
            console.log(x.volume)
            if (x.volume < 0.15) {
                x.muted = true
                clearInterval(fadeout)
            }
        }, 300)
    }, 950)
    setTimeout(() => {
        section2.style.opacity = '0'
        section3.style.opacity = '0'
        info_layer.style.backgroundColor = 'black'
    }, 3000)
    setTimeout(async () => {
        geese.style.display = 'none'

        terry.classList.remove('terry-throw-hat')
        terry.classList.add('terry-idle-flip')
        terry.removeAttribute('style')
        terry.style.left = '30%'
        kim.style.display = 'block'
        await new Promise((resolve, reject) => {
            stagebg.onload = () => {
                bg_music_src.src = './assets/sfx/kim-stage.mp3'
                x.load()
                x.volume = 0.5
                if (onicon.classList.contains('active')) {
                    x.muted = false

                    x.play()
                }
                resolve(true)
            }
            stagebg.src = './assets/img/kim-stage.webp'
        })
        info_layer.style.backgroundColor = 'transparent'
    }, 4000)
    setTimeout(() => {
        terry.classList.remove('terry-idle-flip')
        terry.style.left = '36%'
        terry.style.bottom = '17%'
        terry.classList.add('terry-taunt')
        terry_taunt.play()
    }, 5000)
    setTimeout(() => {
        kim.classList.remove('kim-idle')
        kim.classList.add('kim-hienzan')
        terry.classList.remove('terry-taunt')
        terry.style.left = '30%'
        terry.classList.add('terry-idle-flip')
        kim_hienzan.play()
    }, 6000)
    setTimeout(() => {
        kim.classList.remove('kim-hienzan')
        kim.classList.add('kim-idle')
        kim.style.right = '33%'
    }, 7100)
    setTimeout(() => {
        info_layer_container.scrollTo(0, 0)
        section2.style.display = 'none'
        section3.style.display = 'none'
        section4.style.display = 'flex'
    }, 8000)
}

function displayPage4() {
    terry.classList.remove('terry-idle-flip')
    terry.classList.add('terry-rising-tackle')
    terry_rising_tackle.play()
    setTimeout(() => {
        terry.classList.remove('terry-rising-tackle')
        terry.classList.add('terry-idle-flip')
        terry.style.left = '33%'
        kim.classList.remove('kim-idle')
        kim.classList.add('kim-victory')
        kim_victory.play()
        var fadeout = setInterval(() => {
            x.volume -= 0.05
            console.log(x.volume)
            if (x.volume < 0.15) {
                x.muted = true
                clearInterval(fadeout)
            }
        }, 200)
    }, 1500)
    setTimeout(() => {
        info_layer.style.backgroundColor = 'black'
        section4.style.opacity = '0'
    }, 3000)
    setTimeout(async () => {
        terry.style.display = 'none'
        kim.style.display = 'none'
        bg_music_src.src = './assets/sfx/ryo-stage.mp3'
        x.load()
        x.volume = 0.5
        if (onicon.classList.contains('active')) {
            x.muted = false
            x.play()
        }
        await new Promise((resolve, reject) => {
            stagebg.onload = () => resolve(true)
            stagebg.src = './assets/img/ryo-stage.gif'
        })
        info_layer.style.backgroundColor = 'transparent'
    }, 4000)
}
