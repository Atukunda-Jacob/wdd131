// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Windchill - One function, metric
function calculateWindChill(tempC, windKmh) {
    return 13.12 + 0.6215*tempC - 11.37*Math.pow(windKmh, 0.16) + 0.3965*tempC*Math.pow(windKmh, 0.16);
}

const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);
let windChillText = "N/A";

if (temp <= 10 && wind > 4.8) {
    windChillText = calculateWindChill(temp, wind).toFixed(1) + " °C";
}

document.getElementById("windchill").textContent = windChillText;
