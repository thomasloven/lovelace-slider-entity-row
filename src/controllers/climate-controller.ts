import { Controller } from "./controller";

export class ClimateController extends Controller {
  get _value() {
    return this.stateObj.attributes.temperature;
  }

  set _value(value) {
    this._hass.callService("climate", "set_temperature", {
      entity_id: this.stateObj.entity_id,
      temperature: value,
    });
  }

  get string() {
    return `${this.value} ${this._hass.config.unit_system.temperature}`;
  }

  get isOff() {
    return this.stateObj.attributes.hvac_mode === "off";
  }

  get _min() {
    return this.stateObj.attributes.min_temp;
  }
  get _max() {
    return this.stateObj.attributes.max_temp;
  }
  get _step() {
    return 1;
  }
}
