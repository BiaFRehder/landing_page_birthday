AOS.init();

const eventDate = new Date("Jul 20, 2026 19:00:00");
const timeStampEvent = eventDate.getTime();

console.log(timeStampEvent);

const timesCounter = setInterval(function() {
    const now = new Date();
    const timeStampNow = now.getTime();

    const timeDistance = timeStampEvent - timeStampNow;

    const dayInMs = 1000 * 60 * 60 * 24;
    const hourInMs = 1000 * 60 * 60;
    const minutsInMs = 1000 * 60;

    const daysUntilEvent = Math.floor(timeDistance / dayInMs);
    const hoursUntilEvent = Math.floor((timeDistance % dayInMs) / hourInMs);
    const minutsUntilEvent = Math.floor((timeDistance % hourInMs) / minutsInMs);
    const secondsUntilEvent = Math.floor((timeDistance % minutsInMs) / 1000);

    console.log(daysUntilEvent);
    console.log(hoursUntilEvent);
    console.log(minutsUntilEvent);
    console.log(secondsUntilEvent);

    document.getElementById('counter').innerHTML = `Está chegando, faltam ${daysUntilEvent}d ${hoursUntilEvent}h ${minutsUntilEvent}m ${secondsUntilEvent}s!`;

    if (timeDistance < 0) {
        clearInterval(timesCounter);
        document.getElementById('counter').innerHTML = `Só ano que vem...`;
    }
}, 1000);