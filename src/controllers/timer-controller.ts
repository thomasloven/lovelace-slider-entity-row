import { Controller } from "./controller";

export class TimerController extends Controller {
  _calcvalue = 0;
  _interval;

  constructor(config, parent) {
    super(config, parent);
    this._calcvalue = 0;
    this._interval = window.setInterval(() => {
      this._calcvalue = this.calculate_value();
      parent.requestUpdate();
    }, 1000);
  }

  get _value() {
    return this._calcvalue;
  }

  calculate_value() {
    if (!this.stateObj) return 0;
    let timeRemaining = this.stateObj.attributes.remaining;
    if (!timeRemaining) return 0;

    const parts = timeRemaining.split(":").map(Number);
    timeRemaining = parts[0] * 3600 + parts[1] * 60 + parts[2];

    if (this.stateObj.state === "active") {
      const now = new Date().getTime();
      const madeActive = new Date(this.stateObj.last_changed).getTime();
      timeRemaining = Math.max(timeRemaining - (now - madeActive) / 1000, 0);
    }

    return timeRemaining;
  }

  set _value(value) {
    if (!value) {
      this._hass.callService("timer", "finish", {
        entity_id: this.stateObj.entity_id,
      });
    } else {
      this._hass.callService("timer", "start", {
        entity_id: this.stateObj.entity_id,
        duration: value,
      });
    }
  }

  get string() {
    if (this.stateObj.state === "active") {
      const leftpad = (num) => (num < 10 ? `0${num}` : `${num}`);
      const h = Math.floor(this.value / 3600);
      const m = Math.floor((this.value % 3600) / 60);
      const s = Math.floor(this.value % 60);
      if (h > 0) {
        return `${h}:${leftpad(m)}:${leftpad(s)}`;
      }
      if (m > 0) {
        return `${m}:${leftpad(s)}`;
      }
      return `${s}`;
    }
    return this._hass.localize("component.timer.entity_component._.state.idle");
  }

  get isOff() {
    return this.stateObj.state !== "active";
  }

  get _min() {
    return 0;
  }
  get _max() {
    return 300;
  }
  get _step() {
    return 1;
  }
}
