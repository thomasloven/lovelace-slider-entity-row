import { Controller } from "./controller";

export class HumidifierController extends Controller {
  get _value() {
    return this.stateObj.attributes.humidity;
  }

  set _value(value) {
    this._hass.callService("humidifier", "set_humidity", {
      entity_id: this.stateObj.entity_id,
      humidity: value,
    });
  }

  get string() {
    return `${this.value} %`;
  }

  get isOff() {
    return this.stateObj.state === "off";
  }

  get _min() {
    return this.stateObj.attributes.min_humidity;
  }
  get _max() {
    return this.stateObj.attributes.max_humidity;
  }
  get _step() {
    return 1;
  }
}
