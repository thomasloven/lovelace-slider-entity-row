import { Controller } from "./controller";

export class FanController extends Controller {
  _min;
  _max;

  get _value() {
    return this.stateObj.state !== "off"
      ? this.stateObj.attributes.percentage
      : 0;
  }

  set _value(value) {
    if (value > 0) {
      this._hass.callService("fan", "set_percentage", {
        entity_id: this.stateObj.entity_id,
        percentage: value,
      });
    } else {
      this._hass.callService("fan", "turn_off", {
        entity_id: this.stateObj.entity_id,
      });
    }
  }

  get string() {
    if (this.stateObj.state === "off")
      return this._hass.localize("component.fan.state._.off");
    return this.stateObj.attributes.speed;
  }

  get hasSlider() {
    if ("speed" in this.stateObj.attributes) return true;
    return false;
  }

  get _step() {
    return this.stateObj.attributes.percentage_step;
  }
}
