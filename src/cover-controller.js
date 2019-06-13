import {Controller} from "./controller.js";

export class CoverController extends Controller {

  get _value() {
    return this.stateObj.state === "open"
    ? this.stateObj.attributes.current_position
    : 0;
  }

  set _value(value) {
    this._hass.callService("cover", "set_cover_position", {
      entity_id: this.stateObj.entity_id,
      position: value,
    });
  }

  get string() {
    if (!this.hasSlider)
      return "";
    if (this.stateObj.state === "closed")
      return this._hass.localize("state.cover.closed");
    return `${this.value} %`
  }

  get hasToggle() {
    return false;
  }

  get hasSlider() {
    if ("current_position" in this.stateObj.attributes) return true;
    if (("supported_features" in this.stateObj.attributes) &&
      (this.stateObj.attributes.supported_features & 4)) return true;
    return false;
  }

  get _step() {
    return 10;
  }
}
