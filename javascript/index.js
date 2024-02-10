let currentPercent = 10;


function doGradientCycle() {
    const gradientElements = document.getElementsByClassName("gradient-text");
    if (gradientElements == null) return;
    for (let element of gradientElements) {
        // let value = `-webkit-linear-gradient(0deg, yellow, orange ${currentPercent}%, yellow ${100 - currentPercent}%)`;
        // let value = `-webkit-linear-gradient(0deg, yellow 45%, orange 50%, yellow 55%)`;
        let value = `-webkit-linear-gradient(0deg, yellow ${currentPercent}%, orange ${currentPercent + 15}%, yellow ${currentPercent + 30}%)`;
        // value = "-webkit-linear-gradient(0deg, orange $1, yellow 99)";
        element.style.background = value;
        console.log(element.style.background);
        element.style.color = "blue";
        element.style.webkitBackgroundClip = "text";
        element.style.webkitTextFillColor = "transparent";
        // console.log(element.style);
    }
    if (currentPercent >= 55) {
        currentPercent = 10;
        return;
    }
    currentPercent += 3.25;
}

setInterval(doGradientCycle, 100, 100);