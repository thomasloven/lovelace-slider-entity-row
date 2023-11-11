import { Controller } from "./controller";

const RGB_INDEX = {
  red: 0,
  green: 1,
  blue: 2,
  white: 3,
  cold_white: 3,
  warm_white: 4,
};
const HS_INDEX = { hue: 0, saturation: 1 };

export class LightController extends Controller {
  static allowed_attributes = [
    "brightness_pct",
    "brightness",
    "color_temp",
    "color_temp_mired",
    "hue",
    "saturation",
    "red",
    "green",
    "blue",
    "effect",
    "white",
    "cold_white",
    "warm_white",
  ];

  get attribute() {
    return this._config.attribute || "brightness_pct";
  }

  get _rgbww() {
    const attr = this.stateObj.attributes;
    switch (attr.color_mode) {
      case "rgb":
      case "hs":
      case "xy":
        return [...attr.rgb_color, 0, 0];
      case "rgbw":
        return [...attr.rgbw_color, 0];
      case "rgbww":
        return [...attr.rgbww_color];
      default:
        return [0, 0, 0, 0, 0];
    }
  }

  get _value() {
    if (!this.stateObj || this.stateObj.state !== "on") return 0;
    const attr = this.stateObj.attributes;
    switch (this.attribute) {
      case "color_temp":
        return Math.round(attr.color_temp_kelvin);
      case "color_temp_mired":
        return Math.round(attr.color_temp);
      case "white_value":
        return Math.round(attr.white_value);
      case "brightness":
        return Math.round(attr.brightness);
      case "brightness_pct":
        return Math.round((attr.brightness * 100.0) / 255);
      case "red":
      case "green":
      case "blue":
        return attr.rgb_color
          ? Math.round(this._rgbww[RGB_INDEX[this.attribute]])
          : 0;
      case "white":
        return attr.rgbw_color
          ? Math.round((this._rgbww[RGB_INDEX[this.attribute]] * 100.0) / 255)
          : 0;
      case "cold_white":
      case "warm_white":
        return attr.rgbww_color
          ? Math.round((this._rgbww[RGB_INDEX[this.attribute]] * 100.0) / 255)
          : 0;
      case "hue":
      case "saturation":
        return attr.hs_color
          ? Math.round(attr.hs_color[HS_INDEX[this.attribute]])
          : 0;
      case "effect":
        if (attr.effect_list) return attr.effect_list.indexOf(attr.effect);
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
        return this.stateObj
          ? this.stateObj.attributes.min_color_temp_kelvin
          : 0;
      case "color_temp_mired":
        return this.stateObj ? this.stateObj.attributes.min_mireds : 0;
      default:
        return 0;
    }
  }
  get _max() {
    switch (this.attribute) {
      case "color_temp":
        return this.stateObj
          ? this.stateObj.attributes.max_color_temp_kelvin
          : 0;
      case "color_temp_mired":
        return this.stateObj ? this.stateObj.attributes.max_mireds : 0;
      case "red":
      case "green":
      case "blue":
      case "white_value":
      case "brightness":
        return 255;
      case "hue":
        return 360;
      case "effect":
        return this.stateObj
          ? this.stateObj.attributes.effect_list
            ? this.stateObj.attributes.effect_list.length - 1
            : 0
          : 0;
      default:
        return 100;
    }
  }

  get isOff() {
    return this.stateObj.state !== "on";
  }

  set _value(value) {
    if (!this.stateObj) return;
    const color_mode = this.stateObj.attributes.color_mode;
    let attr = this.attribute;
    let on = true;
    let _value;
    switch (attr) {
      case "brightness":
      case "brightness_pct":
        value =
          attr === "brightness"
            ? Math.round(value)
            : Math.round((value / 100.0) * 255);
        if (!value) on = false;
        attr = "brightness";
        break;
      case "red":
      case "green":
      case "blue":
        _value = this._rgbww;
        _value[RGB_INDEX[attr]] = value;
        if (color_mode === "rgbww") {
          attr = "rgbww_color";
          value = _value;
          break;
        }
        if (color_mode === "rgbw") {
          attr = "rgbw_color";
          value = _value.slice(0, 4);
          break;
        }
        attr = "rgb_color";
        value = _value.slice(0, 3);
        break;
      case "white":
        _value = this._rgbww;
        _value[RGB_INDEX[attr]] = Math.round((value / 100.0) * 255);
        value = _value.slice(0, 4);
        attr = "rgbw_color";
        break;
      case "cold_white":
      case "warm_white":
        _value = this._rgbww;
        _value[RGB_INDEX[attr]] = Math.round((value / 100.0) * 255);
        value = _value;
        attr = "rgbww_color";
        break;
      case "hue":
      case "saturation":
        _value = this.stateObj.attributes.hs_color || [0, 0];
        _value[HS_INDEX[attr]] = value;
        value = _value;
        attr = "hs_color";
        break;
      case "effect":
        value = this.stateObj.attributes.effect_list[value];
        attr = "effect";
        break;
      case "color_temp":
        attr = "kelvin";
        break;
      case "color_temp_mired":
        attr = "color_temp";
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
      return this._hass.localize(
        "component.light.entity_component._.state.off"
      );
    switch (this.attribute) {
      case "color_temp_mired":
      case "brightness":
        return `${this.value}`;
      case "color_temp":
        return `${this.value} K`;
      case "brightness_pct":
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
    const attr = this.stateObj.attributes;
    const support_temp =
      attr.supported_features & 2 ||
      attr.supported_color_modes?.some((mode) => ["color_temp"].includes(mode));
    const support_rgb =
      attr.supported_features & 16 ||
      attr.supported_color_modes?.some((mode) =>
        ["rgb", "rgbw", "rgbww"].includes(mode)
      );
    const support_w = attr.supported_color_modes?.some((mode) =>
      ["rgbw"].includes(mode)
    );
    const support_ww = attr.supported_color_modes?.some((mode) =>
      ["rgbww"].includes(mode)
    );
    const support_hs =
      attr.supported_features & 16 ||
      attr.supported_color_modes?.some((mode) => ["hs"].includes(mode));
    const support_xy = attr.supported_color_modes?.some((mode) =>
      ["xy"].includes(mode)
    );
    const support_brightness =
      attr.supported_features & 1 ||
      support_temp ||
      support_rgb ||
      support_hs ||
      support_xy ||
      attr.supported_color_modes?.some((mode) => ["brightness"].includes(mode));
    const support_color = support_rgb || support_hs;

    if (!this.stateObj) return false;
    switch (this.attribute) {
      case "brightness":
      case "brightness_pct":
        if ("brightness" in this.stateObj.attributes || support_brightness)
          return true;
        return false;
      case "color_temp":
        if ("color_temp" in this.stateObj.attributes || support_temp)
          return true;
        return false;
      case "color_temp_mired":
        if ("color_temp" in this.stateObj.attributes || support_temp)
          return true;
        return false;
      case "white_value":
        if (
          attr.supported_features & 128 ||
          "white_value" in this.stateObj.attributes
        )
          return true;
        return false;
      case "white":
        return !!support_w;
      case "cold_white":
      case "warm_white":
        return !!support_ww;
      case "red":
      case "green":
      case "blue":
        if ("rgb_color" in this.stateObj.attributes || support_color)
          return true;
        return false;
      case "hue":
      case "saturation":
        if ("hs_color" in this.stateObj.attributes || support_color)
          return true;
        return false;
      case "effect":
        if (
          "effect" in this.stateObj.attributes ||
          "effect_list" in this.stateObj.attributes
        )
          return true;
        return false;
      default:
        return false;
    }
  }

  get background(): string | undefined {
    if (this.attribute === "hue")
      return "linear-gradient(to right,red,yellow,green,cyan,blue,magenta,red)";
    if (this.attribute === "color_temp_mired")
      return "linear-gradient(to right,rgb(166,209,255),rgb(255,255,255),rgb(255,160,0))";
    if (this.attribute === "color_temp")
      return "linear-gradient(to left,rgb(166,209,255),rgb(255,255,255),rgb(255,160,0))";
    if (this.attribute === "red")
      return "linear-gradient(to right,rgb(0,0,0),rgb(255,0,0))";
    if (this.attribute === "green")
      return "linear-gradient(to right,rgb(0,0,0),rgb(0,255,0))";
    if (this.attribute === "blue")
      return "linear-gradient(to right,rgb(0,0,0),rgb(0,0,255))";
    if (this.attribute === "brightness")
      return "linear-gradient(to right,rgb(0,0,0),rgb(255,255,255))";
    return undefined;
  }
}
