let jobsInUse = []

var swiper = newSwiper(0, false, true);

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
    if(job[0] == "my dad" || job[0] == "my mum"){
        document.getElementById("jobCard").innerHTML = `<div class="cardText">HELP WANTED<br>I ${urgency<0.2 ? "URGENTLY " : urgency<0.3 ? "DESPERATELY ": ""}NEED ONE OF YOU TO BE ${job[0].toUpperCase()}</div>`
        return;
    }
    document.getElementById("jobCard").innerHTML = `<div class="cardText">HELP WANTED<br>WE ARE IN ${urgency<0.1*1.5 ? "URGENT " : urgency<0.15*1.5 ? "DESPERATE ": urgency< 0.175*1.5 ? "DIRE ": ""}NEED OF ${Math.random<0.2 ? "ONE": Math.random()<0.2 ? "A SINGLE" : vowels.includes(job[0][0]) ? "AN" : "A"}:<br><br>${job[0].toUpperCase()}</div>`;
}

document.getElementById("newJob").addEventListener('click', e => {
    renderJob();
});

renderJob();