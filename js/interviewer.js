let jobsInUse = []
    // var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var w = window.innerWidth;

var swiper = new Swiper('.swiper-container', {
    slidesPerView: w <= 600 ? 1.1 : 3,
    spaceBetween: 30,
    centeredSlides: true,
});

const getJob = () => {
    if (jobsInUse.length < 1) {
        jobsInUse = jobs.slice();
    }
    let i = Math.round(Math.random() * (jobsInUse.length - 1))
    return jobsInUse.splice(i, 1);
}

const renderJob = () => {
    let job = getJob();
    document.getElementById("jobCard").innerHTML = job;
}

document.getElementById("newJob").addEventListener('click', e => {
    renderTraits();
});

renderJob();