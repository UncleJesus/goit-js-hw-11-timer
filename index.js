// const refs = {
//   days: document.querySelector('.value[data-value="days"]'),
//   hours: document.querySelector('.value[data-value="hours"]'),
//   mins: document.querySelector('.value[data-value="mins"]'),
//   secs: document.querySelector('.value[data-value="secs"]'),
//   timerFace: document.getElementById("timer-1"),
// };

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  setInt = setInterval(() => {
    const nowDate = Date.now();
    const time = this.targetDate - nowDate;
    this.updateClockface(time);
    this.timeFinish(time);
  }, 1000);

  updateClockface(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    let div = document.querySelector(`${this.selector}`);
    div.querySelector('.value[data-value="days"]').textContent = days;
    div.querySelector('.value[data-value="hours"]').textContent = hours;
    div.querySelector('.value[data-value="mins"]').textContent = mins;
    div.querySelector('.value[data-value="secs"]').textContent = secs;

    // refs.days.textContent = `${days}`;
    // refs.hours.textContent = `${hours}`;
    // refs.mins.textContent = `${mins}`;
    // refs.secs.textContent = `${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
  timeFinish(time) {
    if (time < 0) {
      clearInterval(this.setInt);
      refs.timerFace.textContent = "Finish";
    }
  }
}
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("December 30, 2020"),
});

// new CountdownTimer({
//   selector: "#timer-2",
//   targetDate: new Date("September 1, 1996"),
// });
