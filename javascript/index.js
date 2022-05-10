const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  secDec.innerHTML = minutes[0];
  secUni.innerHTML = minutes[1];
}

function printSeconds() {
  // ... your code goes here
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  
}

function clearSplits() {
  // ... your code goes here
  splits.innerHTML = "";
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = 'STOP' ;
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.className = 'btn split'
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.className = 'btn start'
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.innerHTML = 'RESET' ;
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
if (btnLeftElement.innerHTML === 'START' ) {
  setStopBtn()
} else{
  setStartBtn()
}
console.log('clickleft')
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
if (btnRightElement.innerHTML === 'SPLIT' ) {
  setResetBtn()
} else{
  setSplitBtn()
}
console.log('clickleft')
});

