function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  document.getElementById('clock').textContent =
    `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
updateClock();
const display = document.getElementById('display');


function appendValue(value) {
if (display.innerText === '0') {
display.innerText = value;
} else {
display.innerText += value;
}
}


function clearDisplay() {
display.innerText = '0';
}


function deleteLast() {
if (display.innerText.length > 1) {
display.innerText = display.innerText.slice(0, -1);
} else {
display.innerText = '0';
}
}


function calculate() {
try {
display.innerText = eval(display.innerText);
} catch (e) {
display.innerText = 'Error';
}
}
