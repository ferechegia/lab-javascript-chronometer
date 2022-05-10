class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }


  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime+=1
      if (printTime)printTime()
      }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
      return this.currentTime % 60
  } 

  computeTwoDigitNumber(value) {
    if (value.toString().length >= 2){
      return value.toString()
    } else{
      return ('0' + value)
    }
   }


  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes(this.currentTime))}:${this.computeTwoDigitNumber(this.getSeconds(this.currentTime))}`
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
