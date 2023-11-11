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
      return this._hass.localize(
        "component.light.entity_component._.state.off"
      );
    return `${this.stateObj.attributes.percentage} %`;
  }

  get hasSlider() {
    if ("percentage" in this.stateObj.attributes) return true;
    return false;
  }

  get _step() {
    return this.stateObj.attributes.percentage_step;
  }
}
