let traitsInUse = []
    // var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var w = window.innerWidth;

var swiper = new Swiper('.swiper-container', {
    slidesPerView: w <= 600 ? 1 : 3,
    spaceBetween: 30,
    centeredSlides: true
});

const getTrait = () => {
    if (traitsInUse.length < 1) {
        traitsInUse = traits.slice();
    }
    let i = Math.round(Math.random() * (traitsInUse.length - 1))
    return traitsInUse.splice(i, 1)
}

const getTraits = n => {
    let results = []
    for (let i = 0; i < n; i++) {
        results.push(getTrait());
    }
    return results
}

const renderTraits = () => {
    let currentTraits = getTraits(4);
    document.getElementById("card1").innerHTML = currentTraits[0];
    document.getElementById("card2").innerHTML = currentTraits[1];
    document.getElementById("card3").innerHTML = currentTraits[2];
    document.getElementById("card4").innerHTML = currentTraits[3];
}

document.getElementById("newTraits").addEventListener('click', e => {
    renderTraits();
    swiper.slideTo(0, 500)
});

renderTraits();