// Footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Windchill calculation
function calculateWindChill(temp, wind) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
}

const temp = 10;
const wind = 12;
const windChillElement = document.getElementById("windchill");

if (temp <= 10 && wind > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temp, wind)}°C`;
} else {
    windChillElement.textContent = "N/A";
}
