import { Controller } from "./controller";

export class MediaPlayerController extends Controller {
  _max;
  _min;
  _step;

  get _value() {
    return this.stateObj.attributes.is_volume_muted
      ? 0
      : Math.round(this.stateObj.attributes.volume_level * 100.0);
  }

  set _value(value) {
    value = value / 100.0;
    this._hass.callService("media_player", "volume_set", {
      entity_id: this.stateObj.entity_id,
      volume_level: value,
    });
    if (value && this.stateObj.attributes.is_volume_muted)
      this._hass.callService("media_player", "volume_mute", {
        entity_id: this.stateObj.entity_id,
        is_volume_muted: false,
      });
  }

  get isOff() {
    return this.stateObj.state === "off";
  }

  get string() {
    if (this.stateObj.attributes.is_volume_muted) return "-";
    return !!this.stateObj.attributes.volume_level
      ? `${this.value} %`
      : this._hass.localize("component.media_player.state._.off");
  }

  get hasToggle() {
    return true;
  }

  _handleMute() {
    this._hass.callService("media_player", "volume_mute", {
      entity_id: this.stateObj.entity_id,
      is_volume_muted: !this.stateObj.attributes.is_volume_muted,
    });
  }

  renderToggle(hass: any) {
    const stateObj = hass.states[this.stateObj.entity_id];
    const icon: any = document.createElement("ha-icon");
    icon.style.display = "flex";
    icon.icon = stateObj.attributes.is_volume_muted
      ? "mdi:volume-off"
      : "mdi:volume-high";
    const btn: any = document.createElement("ha-icon-button");
    btn.appendChild(icon);
    btn.addEventListener("click", () => this._handleMute());
    return this.hasToggle ? btn : undefined;
  }
}
