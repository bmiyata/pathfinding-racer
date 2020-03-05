class Stopwatch {
  constructor() {
    this.time = 0;
    this.interval = 0;
    this.offset = 0;
    this.isOn = false;
    this.formattedTime = "00:000";
  }

  start() {
    this.interval = setInterval(this.update.bind(this), 10);
    this.offset = Date.now();
    this.isOn = true;
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
    this.isOn = false;
  }

  reset() {
    this.time = 0;
    this.interval = 0;
    this.offset = 0;
    this.isOn = false;
    this.formattedTime = "00:000";
  }

  delta() {
    const now = Date.now();
    const timePassed = now - this.offset;
    this.offset = now;
    return timePassed;
  }

  update() {
    if (this.isOn) {
      this.time += this.delta();
    }

    this.formattedTime = this.timeFormatter();
  }

  timeFormatter() {
    const time = new Date(this.time);
    let seconds = time.getSeconds().toString();
    let milliseconds = time.getMilliseconds().toString();

    if (seconds.length < 2) {
      seconds = "0" + seconds;
    }

    while (milliseconds.length < 3) {
      milliseconds = "0" + milliseconds;
    }

    return seconds + ":" + milliseconds;
  }
}

export default Stopwatch;
