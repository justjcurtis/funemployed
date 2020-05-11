let traitsInUse = []

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

const setCardText = (number, text) => {
    let cards = document.getElementsByClassName(`card${number}`)
    for(let i = 0; i < cards.length; i++){
        let card = cards[i];
        card.innerHTML = text;
    }
}

const renderTraits = () => {
    let currentTraits = getTraits(4);
    for(let i = 0; i< currentTraits.length; i++){
        setCardText(i+1, currentTraits[i].toUpperCase());
    }
}

document.getElementById("newTraits").addEventListener('click', e => {
    renderTraits();
});

renderTraits();

var swiper = newSwiper(0, true, true);