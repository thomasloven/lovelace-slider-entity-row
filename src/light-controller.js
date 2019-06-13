import {Controller} from "./controller.js";

export class LightController extends Controller {

  get _value() {
    return (this.stateObj.state === "on")
    ? Math.ceil(this.stateObj.attributes.brightness*100.0/255)
    : 0;
  }

  set _value(value) {
    value = Math.ceil(value/100.0*255);
    if (value) {
      this._hass.callService("light", "turn_on", {
        entity_id: this.stateObj.entity_id,
        brightness: value,
      });
    } else {
      this._hass.callService("light", "turn_off", {
        entity_id: this.stateObj.entity_id,
      });
    }
  }

  get string() {
    if (this.stateObj.state === "off")
      return this._hass.localize("state.default.off");
    return `${this.value} %`;
  }

  get hasSlider() {
    if ("brightness" in this.stateObj.attributes) return true;
    if (("supported_features" in this.stateObj.attributes) &&
      (this.stateObj.attributes.supported_features & 1)) return true;
    return false;
  }
}
