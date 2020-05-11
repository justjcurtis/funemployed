let jobsInUse = []

var swiper = newSwiper();

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
    renderJob();
});

renderJob();