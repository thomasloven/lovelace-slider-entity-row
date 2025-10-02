import { Controller } from "./controller";

export class InputSelectController extends Controller {
  _min;

  get _value() {
    return this.stateObj.attributes.options.indexOf(this.stateObj.state);
  }

  set _value(value) {
    if (value in this.stateObj.attributes.options)
      this._hass.callService(this._domain, "select_option", {
        entity_id: this.stateObj.entity_id,
        option: this.stateObj.attributes.options[value],
      });
  }

  get string() {
    return this.stateObj.state;
  }

  get isOff() {
    return false;
  }

  get hasToggle() {
    return false;
  }

  get hasSlider() {
    return (
      this.stateObj.attributes.options &&
      this.stateObj.attributes.options.length > 0
    );
  }

  get _max() {
    return this.stateObj.attributes.options.length - 1;
  }

  get _step() {
    return 1;
  }
}
