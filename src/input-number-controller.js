import {Controller} from "./controller.js";

export class InputNumberController extends Controller {

  get _value() {
    return this.stateObj.state;
  }

  set _value(value) {
    this._hass.callService("input_number", "set_value", {
      entity_id: this.stateObj.entity_id,
      value: value,
    });
  }

  get string() {
    return `${Math.round(this.stateObj.state)}`
  }

  get isOff() {
    return false;
  }

  get hasToggle() {
    return false;
  }

  get hasSlider() {
    return this.stateObj.attributes.mode === "slider";
  }

  get _min() {
    return this.stateObj.attributes.min;
  }

  get _max() {
    return this.stateObj.attributes.max;
  }

  get _step() {
    return this.stateObj.attributes.step;
  }

}
