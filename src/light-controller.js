import {Controller} from "./controller.js";

export class LightController extends Controller {

  get attribute() {
    return this._config.attribute || "brightness";
  }

  get _value() {
    if (!this.stateObj || this.stateObj.state !== "on") return 0;
    switch (this.attribute) {
      case "color_temp":
        return Math.ceil(this.stateObj.attributes.color_temp);
      case "white_value":
        return Math.ceil(this.stateObj.attributes.white_value);
      case "brightness":
        return Math.ceil(this.stateObj.attributes.brightness*100.0/255);
      case "red":
        return this.stateObj.attributes.rgb_color ? Math.ceil(this.stateObj.attributes.rgb_color[0]) : 0;
      case "green":
        return this.stateObj.attributes.rgb_color ? Math.ceil(this.stateObj.attributes.rgb_color[1]) : 0;
      case "blue":
        return this.stateObj.attributes.rgb_color ? Math.ceil(this.stateObj.attributes.rgb_color[2]) : 0;
      case "hue":
        return this.stateObj.attributes.hs_color ? Math.ceil(this.stateObj.attributes.hs_color[0]): 0;
      case "saturation":
        return this.stateObj.attributes.hs_color ? Math.ceil(this.stateObj.attributes.hs_color[1]): 0;
      case "effect":
        if(this.stateObj.attributes.effect_list)
          return (this.stateObj.attributes.effect_list.indexOf(this.stateObj.attributes.effect));
        return 0;
      default:
        return 0;
    }
  }

  get _step() {
    switch (this.attribute) {
      case "effect":
        return 1;
      default:
        return 5;
    }
  }

  get _min() {
    switch (this.attribute) {
      case "color_temp":
        return this.stateObj ? this.stateObj.attributes.min_mireds : 0;
      default:
        return 0;
    }
  }
  get _max() {
    switch (this.attribute) {
      case "color_temp":
        return this.stateObj ? this.stateObj.attributes.max_mireds : 0;
      case "red":
      case "green":
      case "blue":
      case "white_value":
        return 255;
      case "hue":
        return 360;
      case "effect":
        return this.stateObj ? this.stateObj.attributes.effect_list ? this.stateObj.attributes.effect_list.length - 1 : 0 : 0;
      default:
        return 100;
    }
  }

  set _value(value) {
    if(!this.stateObj) return;
    let attr = this.attribute;
    let on = true;
    let _value;
    switch (attr) {
      case "brightness":
        value = Math.ceil(value/100.0*255);
        if (!value) on = false;
        break;
      case "red":
      case "green":
      case "blue":
        _value = this.stateObj.attributes.rgb_color || [0,0,0];
        if (attr === "red") _value[0] = value;
        if (attr === "green") _value[1] = value;
        if (attr === "blue") _value[2] = value;
        value = _value;
        attr = "rgb_color";
        break;
      case "hue":
      case "saturation":
        _value = this.stateObj.attributes.hs_color || [0,0];
        if (attr === "hue") _value[0] = value;
        if (attr === "saturation") _value[1] = value;
        value = _value;
        attr = "hs_color";
        break;
      case "effect":
        value = this.stateObj.attributes.effect_list[value];
        attr = "effect";
        break;
    }

    if (on) {
      this._hass.callService("light", "turn_on", {
        entity_id: this.stateObj.entity_id,
        [attr]: value,
      });
    } else {
      this._hass.callService("light", "turn_off", {
        entity_id: this.stateObj.entity_id,
      });
    }
  }

  get string() {
    if (this.stateObj && this.stateObj.state === "off")
      return this._hass.localize("state.default.off");
    switch (this.attribute) {
      case "color_temp":
        return `${this.value} K`;
      case "brightness":
      case "saturation":
        return `${this.value} %`;
      case "hue":
        return `${this.value} °`;
      case "effect":
        return this.stateObj ? this.stateObj.attributes.effect : "";
      default:
        return this.value;
    }
  }

  get hasSlider() {
    if(!this.stateObj) return false;
    switch (this.attribute) {
      case "brightness":
        if ("brightness" in this.stateObj.attributes) return true;
        if (("supported_features" in this.stateObj.attributes) &&
          (this.stateObj.attributes.supported_features & 1)) return true;
        return false;
      case "color_temp":
        if ("color_temp" in this.stateObj.attributes) return true;
        if (("supported_features" in this.stateObj.attributes) &&
          (this.stateObj.attributes.supported_features & 2)) return true;
        return false;
      case "white_value":
        if ("white_value" in this.stateObj.attributes) return true;
        if (("supported_features" in this.stateObj.attributes) &&
          (this.stateObj.attributes.supported_features & 128)) return true;
        return false;
      case "red":
      case "green":
      case "blue":
        if ("rgb_color" in this.stateObj.attributes) return true;
        if (("supported_features" in this.stateObj.attributes) &&
          (this.stateObj.attributes.supported_features & 16)) return true;
        return false;
      case "hue":
      case "saturation":
        if ("hs_color" in this.stateObj.attributes) return true;
        if (("supported_features" in this.stateObj.attributes) &&
          (this.stateObj.attributes.supported_features & 16)) return true;
        return false;
      case "effect":
        if ("effect" in this.stateObj.attributes) return true;
        return false;
      default:
        return false;
    }
  }
}
