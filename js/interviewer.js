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
    let urgency = Math.random()
    let vowels = ["a", "e", "i", "o", "u"]
    document.getElementById("jobCard").innerHTML = `HELP WANTED<br>WE ARE IN ${urgency<0.1*1.5 ? "URGENT " : urgency<0.15*1.5 ? "DESPERATE ": urgency< 0.175*1.5 ? "DIRE ": ""}NEED OF ${Math.random<0.2 ? "ONE": Math.random()<0.2 ? "A SINGLE" : vowels.includes(job[0][0]) ? "AN" : "A"}:<br><br>${job[0].toUpperCase()}`;
}

document.getElementById("newJob").addEventListener('click', e => {
    renderJob();
});

renderJob();