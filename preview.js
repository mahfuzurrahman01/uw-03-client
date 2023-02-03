// declare the element

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


