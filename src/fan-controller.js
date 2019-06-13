import {Controller} from "./controller.js";

export class FanController extends Controller {

  get _value() {
    return (this.stateObj.state !== "off")
    ? this.stateObj.attributes.speed_list.indexOf(this.stateObj.attributes.speed)
    : 0;
  }

  set _value(value) {
    if (value in this.stateObj.attributes.speed_list) {
      this._hass.callService("fan", "turn_on", {
        entity_id: this.stateObj.entity_id,
        speed: this.stateObj.attributes.speed_list[value],
      });
    } else {
      this._hass.callService("fan", "turn_off", {
        entity_id: this.stateObj.entity_id,
      });
    }
  }

  get string() {
    if (this.stateObj.state === "off")
      return this._hass.localize("state.default.off");
    return this.stateObj.attributes.speed;
  }

  get hasSlider() {
    if ("speed" in this.stateObj.attributes) return true;
    return false;
  }

  get _max() {
    return this.stateObj.attributes.speed_list.length -1;
  }

  get _step() {
    return 1;
  }

}
