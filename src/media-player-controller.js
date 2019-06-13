import {Controller} from "./controller.js";

export class MediaPlayerController extends Controller {

  get _value() {
    return (this.stateObj.is_volume_muted === "on")
    ? 0
    : Math.ceil(this.stateObj.attributes.volume_level*100.0);
  }

  set _value(value) {
    value = value/100.0;
    this._hass.callService("media_player", "volume_set", {
      entity_id: this.stateObj.entity_id,
      volume_level: value,
    });
  }

  get isOff() {
    return this.stateObj.state === "off";
  }

  get string() {
    if (this.stateObj.attributes.is_volume_muted)
      return "-";
    return !!this.stateObj.attributes.volume_level
      ? `${this.value} %`
      : this._hass.localize("state.media_player.off");
  }

  get hasToggle() {
    return false;
  }
}
