import { Controller } from "./controller";

export class CoverController extends Controller {
  _max;
  _min;

  get attribute() {
    return this._config.attribute || "position";
  }

  get _value() {
    switch (this.attribute) {
      case "position":
        return this.stateObj.state === "closed"
          ? 0
          : this.stateObj.attributes.current_position;
      case "tilt":
        return this.stateObj.attributes.current_tilt_position;
      default:
        return 0;
    }
  }

  set _value(value) {
    switch (this.attribute) {
      case "position":
        this._hass.callService("cover", "set_cover_position", {
          entity_id: this.stateObj.entity_id,
          position: value,
        });
        break;
      case "tilt":
        this._hass.callService("cover", "set_cover_tilt_position", {
          entity_id: this.stateObj.entity_id,
          tilt_position: value,
        });
        break;
      default:
    }
  }

  get string() {
    if (!this.hasSlider) return "";
    switch (this.attribute) {
      case "position":
        if (this.stateObj.state === "closed")
          return this._hass.localize("component.cover.state._.closed");
        if (this.value === 100)
          return this._hass.localize("component.cover.state._.open");
        return `${this.value} %`;
      case "tilt":
        return `${this.value} %`;
    }
  }

  get hasToggle() {
    return false;
  }

  get hasSlider() {
    switch (this.attribute) {
      case "position":
        if ("current_position" in this.stateObj.attributes) return true;
        if (
          "supported_features" in this.stateObj.attributes &&
          this.stateObj.attributes.supported_features & 4
        )
          return true;
      case "tilt":
        if ("current_tilt_position" in this.stateObj.attributes) return true;
        if (
          "supported_features" in this.stateObj.attributes &&
          this.stateObj.attributes.supported_features & 128
        )
          return true;
      default:
        return false;
    }
  }

  get _step() {
    return 10;
  }
}
