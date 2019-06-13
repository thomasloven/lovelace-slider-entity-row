export class Controller {
  constructor(config) {
    this._config = config;
  }

  set hass(hass) {
    this._hass = hass;
    this.stateObj = this._config.entity in hass.states ? hass.states[this._config.entity] : null;
  }

  get value() {
    if(this._value)
      return Math.round(this._value/this.step)*this.step;
    return 0;
  }
  set value(value) {
    if (value !== this.value)
      this._value = value;
  }

  get string() {
    return `${this.value}`;
  }
  get hidden() {
    return false;
  }
  get hasSlider() {
    return true;
  }
  get hasToggle() {
    return true;
  }

  get isOff() {
    return this.value === 0;
  }

  get min() {
    if (this._config.min !== undefined)
      return this._config.min;
    if (this._min !== undefined)
      return this._min;
    return 0;
  }
  get max() {
    if (this._config.max !== undefined)
      return this._config.max;
    if (this._max !== undefined)
      return this._max;
    return 100;
  }
  get step() {
    if (this._config.step !== undefined)
      return this._config.step;
    if (this._step !== undefined)
      return this._step;
    return 5;
  }
}
