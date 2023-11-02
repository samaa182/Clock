const body = document.querySelector("body"),
hourHand = document.querySelector(".hour"),
minuteHand = document.querySelector(".minute"),
secondHand = document.querySelector(".second"),
mode = document.querySelector(".switch-mode"),
clock = document.querySelector(".clock");

mode.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    mode.innerHTML = isDark ? `<i class="fa-duotone fa-toggle-off fa-2xl"></i> ` : `<i class="fa-duotone fa-toggle-on fa-2xl"></i> `;
    clock.style.background  = isDark ? "black" : "url(1.jpg)";
    if (body.classList.contains("dark")) {
        clock.style.background = "black";
    } else {
        clock.style.backgroundImage = "url(1.jpg)";
        clock.style.backgroundSize = "cover"
    }
});

const updateTime = () => {
    let date = new Date(),
    sec = (date.getSeconds() / 60)* 360;
    min = (date.getMinutes() / 60)* 360;
    hour = (date.getHours() / 12)* 360;
    secondHand.style.transform = `rotate(${sec}deg)`;
    minuteHand.style.transform = `rotate(${min}deg)`;
    hourHand.style.transform = `rotate(${hour}deg)`;
    document.querySelector(".hours").innerText = date.getHours();
    document.querySelector(".minuts").innerText = date.getMinutes();
    document.querySelector(".seconds").innerText = date.getSeconds();
};
setInterval(updateTime,1000);
updateTime();