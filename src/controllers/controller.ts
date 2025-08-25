export interface ControllerConfig {
  entity: string;
  toggle?: boolean;
  hide_state?: boolean;
  hide_when_off?: boolean;
  full_row?: boolean;
  min?: number;
  max?: number;
  step?: number;
  attribute?: string;
  grow?: boolean;
  dir?: string;
  colorize?: boolean;
  show_icon?: boolean;
  gamma?: number;
}

export abstract class Controller {
  _config: ControllerConfig;
  _hass: any;
  stateObj: any;

  abstract _value?: number;
  abstract _min?: number;
  abstract _max?: number;
  abstract _step?: number;

  static allowed_attributes = [];

  constructor(config: ControllerConfig, parent) {
    this._config = config;
  }

  set hass(hass: any) {
    this._hass = hass;
    this.stateObj = hass.states[this._config.entity];
  }

  get gamma(): number {
    return this._config.gamma ?? 1.0;
  }

  get value(): number {
    if (this._value) {
      let value = this._value;
      const gamma = this.gamma;
      if (gamma !== 1.0 && gamma > 0) {
        value = Math.pow(value / this.max, 1 / gamma) * this.max;
      }
      return Math.round(value / this.step) * this.step;
    }
    return 0;
  }
  set value(value: number) {
    if (value !== this.value) {
      const gamma = this.gamma;
      let newValue = value;
      if (gamma !== 1.0 && gamma > 0) {
        newValue = Math.pow(value / this.max, gamma) * this.max;
      }
      this._value = newValue;
    }
  }

  get string(): string {
    return `${this.value}`;
  }
  get hidden(): boolean {
    return false;
  }
  get hasSlider(): boolean {
    return true;
  }
  get hasToggle(): boolean {
    return true;
  }

  get background(): string | undefined {
    return undefined;
  }

  renderToggle(hass: any) {
    return this.hasToggle
      ? // eslint-disable-next-line lit/binding-positions
        // @ts-ignore
        document.createElement("ha-entity-toggle")
      : undefined;
  }

  get isOff(): boolean {
    if (!this.stateObj || this.stateObj.state === "unavailable") return true;
    return this.stateObj.state === "off" || this.value === 0;
  }

  get min(): number {
    return this._config.min ?? this._min ?? 0;
  }
  get max(): number {
    return this._config.max ?? this._max ?? 100;
  }
  get step(): number {
    return this._config.step ?? this._step ?? 5;
  }
  get dir(): string {
    return this._config.dir ?? undefined;
  }
}
