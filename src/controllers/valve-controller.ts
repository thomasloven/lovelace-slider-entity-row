import { Controller } from "./controller";

export class ValveController extends Controller {
  _min;
  _max;

  get _value() {
    return this.stateObj.state !== "off"
      ? this.stateObj.attributes.current_position
      : 0;
  }

  set _value(value) {
    if (value > 0) {
      this._hass.callService("valve", "set_valve_position", {
        entity_id: this.stateObj.entity_id,
        position: value,
      });
    } else {
      this._hass.callService("valve", "close_valve", {
        entity_id: this.stateObj.entity_id,
      });
    }
  }

  get string() {
    if (this.stateObj.state === "off")
      return this._hass.localize(
        "component.light.entity_component._.state.off"
      );
    return `${this.stateObj.attributes.current_position} %`;
  }

  get hasSlider() {
    if ("current_position" in this.stateObj.attributes) return true;
    return false;
  }

  get _step() {
    return 1;
  }
}
