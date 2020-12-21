const hoursContainer = document.querySelector('.hours');
const minutesContainer = document.querySelector('.minutes');
const secondsContainer = document.querySelector('.seconds');

const updateTime = () => {

    const now = new Date;

    updateContainer(hoursContainer, now.getHours().toString());
    updateContainer(minutesContainer, now.getMinutes().toString());
    updateContainer(secondsContainer, now.getSeconds().toString());

};

const updateContainer = (container, newTime) => {

    const time = newTime.split('');

    if (time.length === 1) time.unshift('0');

    const first = container.firstElementChild;
    if (first.lastElementChild.textContent !== time[0]) updateNumber(first, time[0]);

    const last = container.lastElementChild;
    if(last.lastElementChild.textContent !== time[1]) updateNumber(last, time[1]);
    
};

const updateNumber = (element, number) => {

    const second = element.lastElementChild.cloneNode(true);
    second.textContent = number;

    element.appendChild(second);
    element.classList.add('move');

    setTimeout(() => element.classList.remove('move'), 990);
    setTimeout(() => element.removeChild(element.firstElementChild), 990);

};

setInterval(updateTime, 1000);