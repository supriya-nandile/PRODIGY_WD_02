let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateTime() {
    elapsedTime = Date.now() - startTime;

    let seconds = Math.floor(elapsedTime / 1000) % 60;
    let minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    display.textContent =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;
}

document.getElementById("start").addEventListener("click", () => {
    startTime = Date.now() - elapsedTime;
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTime, 1000);
});

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(timerInterval);
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    display.textContent = "00:00:00";
    laps.innerHTML = "";
});

document.getElementById("lap").addEventListener("click", () => {
    const lapItem = document.createElement("li");
    lapItem.textContent = display.textContent;
    laps.appendChild(lapItem);
});
