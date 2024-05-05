const daysEl = document.getElementById('days')
const minutesEl = document.getElementById('minutes')
const hoursEl = document.getElementById('hours')
const secondsEl = document.getElementById('seconds')
const currentDateEl = document.getElementById('currentDate')

const birthday = "1 Dec 2024";

function countdown() {
    const birthdayDate = new Date(birthday);
    const currentDate = new Date();

    const totalSeconds = (birthdayDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = formateTime(days);
    minutesEl.innerHTML = formateTime(minutes);
    hoursEl.innerHTML = formateTime(hours);
    secondsEl.innerHTML = formateTime(seconds);

    currentDateEl.innerHTML = usFormat(currentDate)
}

function formateTime(time) {
    return time < 10 ? `0${time}` : time;
}

function usFormat(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

countdown();


setInterval(countdown, 1000);
