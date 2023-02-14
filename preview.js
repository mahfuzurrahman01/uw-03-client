// declare the element for 1st one

const div = document.getElementById('div')
const video = document.querySelector("#div iframe")
const img = document.querySelector("#div img")
video.setAttribute('id', 'none')

// mouseenter event 

div.addEventListener('mouseenter', function () {
    img.setAttribute('id', 'none')
    video.removeAttribute('id')
    video.setAttribute('src', "https://www.youtube.com/embed/jhq3ZOhgQL8?&fs=0&color=white&controls=0&disablekb=1&mute=1&autoplay=1")
})

//mouse out

div.addEventListener('mouseleave', function () {
    video.setAttribute('src', "https://www.youtube.com/embed/jhq3ZOhgQL8?&fs=0&color=white&controls=0&disablekb=1")
    video.setAttribute('id', 'none')
    img.removeAttribute('id')
})


// declare the element for 2nd one

const div1 = document.getElementById('div1')
const video1 = document.querySelector("#div1 iframe")
const img1 = document.querySelector("#div1 img")
video1.setAttribute('id', 'none')

// mouseenter event 

div1.addEventListener('mouseenter', function () {
    img1.setAttribute('id', 'none')
    video1.removeAttribute('id')
    video1.setAttribute('src', "https://www.youtube.com/embed/qJAOC6tUxck?&fs=0&color=white&controls=0&disablekb=1&mute=1&autoplay=1")
})

//mouse out

div1.addEventListener('mouseleave', function () {
    video1.setAttribute('src', "https://www.youtube.com/embed/qJAOC6tUxck?&fs=0&color=white&controls=0&disablekb=1")
    video1.setAttribute('id', 'none')
    img1.removeAttribute('id')
})

// declare the element for 3rd one

const div2 = document.getElementById('div2')
const video2 = document.querySelector("#div2 iframe")
const img2 = document.querySelector("#div2 img")
video2.setAttribute('id', 'none')

// mouseenter event 

div2.addEventListener('mouseenter', function () {
    img2.setAttribute('id', 'none')
    video2.removeAttribute('id')
    video2.setAttribute('src', "https://www.youtube.com/embed/ayqR4KiwgaE?&fs=0&color=white&controls=0&disablekb=1&mute=1&autoplay=1")
})

//mouse out

div2.addEventListener('mouseleave', function () {
    video2.setAttribute('src', "https://www.youtube.com/embed/ayqR4KiwgaE?&fs=0&color=white&controls=0&disablekb=1")
    video2.setAttribute('id', 'none')
    img2.removeAttribute('id')
})
