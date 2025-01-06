export default class Timer {
  constructor() {
    this.milisec = 0;
    this.sec = 0;
    this.min = 0;
    this.hour = 0;
  }
  increment_Mili_sec() {
    this.milisec++;
  }
  increment_Sec() {
    this.sec++;
  }
  increment_Minute() {
    this.min++;
  }
  increment_Hour() {
    this.hour++;
  }
  reset() {
    this.milisec = 0;
    this.sec = 0;
    this.min = 0;
    this.hour = 0;
  }
}
