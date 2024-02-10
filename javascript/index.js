// The best code you have ever seen

let currentPercent = 10;
let currentPercentBlue = 10;


function doGradientCycle() {
    const gradientElements = document.getElementsByClassName("gradient-text");
    if (gradientElements == null) return;
    for (let element of gradientElements) {
        let value = `-webkit-linear-gradient(0deg, yellow ${currentPercent}%, orange ${currentPercent + 15}%, yellow ${currentPercent + 30}%)`;
        element.style.background = value;
        element.style.color = "blue";
        element.style.webkitBackgroundClip = "text";
        element.style.webkitTextFillColor = "transparent";
    }
    if (currentPercent >= 55) {
        currentPercent = 10;
        return;
    }
    currentPercent += 1.75;
}

function doBlueGradientCycle() {
    const gradientElements = document.getElementsByClassName("gradient-text-blue");
    if (gradientElements == null) return;
    for (let element of gradientElements) {
        let value = `-webkit-linear-gradient(0deg, #2beaff ${currentPercentBlue}%, #209af7 ${currentPercentBlue + 15}%, #2beaff ${currentPercentBlue + 30}%)`;
        element.style.background = value;
        element.style.color = "blue";
        element.style.webkitBackgroundClip = "text";
        element.style.webkitTextFillColor = "transparent";
    }
    if (currentPercentBlue >= 65) {
        currentPercentBlue = 0;
        return;
    }
    currentPercentBlue += 0.75;
}

setInterval(doGradientCycle, 50, 50);
setInterval(doBlueGradientCycle, 50, 50);
