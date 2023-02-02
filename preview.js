const mouseTarget = document.getElementById('youtube');

mouseTarget.addEventListener('mouseenter', (e) => {
    mouseTarget.setAttribute("src", "https://www.youtube.com/embed/jhq3ZOhgQL8?&fs=0&color=white&controls=0&disablekb=1&mute=1&autoplay=1")

});

mouseTarget.addEventListener('mouseout', (e) => {
    mouseTarget.setAttribute('src', 'https://www.youtube.com/embed/jhq3ZOhgQL8?&fs=0&color=white&controls=0&disablekb=1')

});