const pavelInfoBtn = document.getElementById("pavel-info-btn");
const sanyaInfoBtn = document.getElementById("sanya-info-btn");
const vladimirInfoBtn = document.getElementById("vladimir-info-btn");
// Windows
const pavelWindow = document.getElementById("pavel-window");
const darkWindow = document.getElementById("dark-window");
const vladimirWindow = document.getElementById("vladimir-window");
// Windows
const crossBtn = document.getElementById("cross");

function windowVladimirVisible() {
  vladimirWindow.style.visibility = "visible";
}

function windowPavelVisible() {
  pavelWindow.style.visibility = "visible";
}

function windowDarkVisible() {
  darkWindow.style.visibility = "visible";
}

function windowPavelInvisible() {
  pavelWindow.style.visibility = "hidden";
  darkWindow.style.visibility = "hidden";
  vladimirWindow.style.visibility = "hidden";
}
