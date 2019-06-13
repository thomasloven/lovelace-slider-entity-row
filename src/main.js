import {LitElement, html, css} from "/card-tools/lit-element.js";

import { Controller } from "./controller.js";
import { LightController } from "./light-controller.js";
import { MediaPlayerController } from "./media-player-controller.js";
import { ClimateController } from "./climate-controller.js";
import { CoverController } from "./cover-controller.js";
import { FanController } from "./fan-controller.js";
import { InputNumberController } from "./input-number-controller.js";
import { InputSelectController } from "./input-select-controller.js";

const controllers = {
  light: LightController,
  media_player: MediaPlayerController,
  climate: ClimateController,
  cover: CoverController,
  fan: FanController,
  input_number: InputNumberController,
  input_select: InputSelectController,
};

class SliderEntityRow extends LitElement {
  static get properties() {
    return {
      hass: {},
    };
  }

  setConfig(config) {
    this._config = config;
    const domain = config.entity.split('.')[0];
    const ctrlClass = controllers[domain];
    if(!ctrlClass)
      throw new Error(`Unsupported entity type: ${domain}`);
    this.ctrl = new ctrlClass(config);
  }

  render() {
    const c = this.ctrl;
    c.hass = this.hass;
    const slider = html`
      <ha-slider
        .min=${c.min}
        .max=${c.max}
        .step=${c.step}
        .value=${c.value}
        pin
        @change=${(ev) => c.value = this.shadowRoot.querySelector("ha-slider").value}
        class=${this._config.full_row ? "full" : ""}
      ></ha-slider>
    `;
    const toggle = html`
      <ha-entity-toggle
        .stateObj=${this.hass.states[this._config.entity]}
        .hass=${this.hass}
      ></ha-entity-toggle>
    `;

    const content = html`
    <div class="wrapper" @click=${(ev) => ev.stopPropagation()}>
      ${(c.stateObj.state === "unavailable")
        ? html`
          <span class="state">
          unavailable
          </span>
        `
        : html`
          ${((this._config.hide_when_off && c.isOff)
            || !c.hasSlider)
            ? ""
            : slider }
          ${(this._config.hide_state || this._config.toggle)
            ? ""
            : html`
              <span class="state">
                ${c.string}
              </span>
              `}
          ${this._config.toggle
            && c.hasToggle
            ? toggle
            : ""}
        `}
    </div>
    `;

    if (this._config.full_row)
      return content;

    return html`
    <hui-generic-entity-row
      .hass=${this.hass}
      .config=${this._config}
    > ${content} </hui-generic-entity-row>
    `;
  }

  static get styles() {
    return css`
      .wrapper {
        display: flex;
        align-items: center;
        height: 40px;
      }
      .state {
        min-width: 45px;
        text-align: end;
      }
      ha-entity-toggle {
        margin-left: 8px;
      }
      ha-slider.full {
        width: 100%;
      }
    `;
  }
}

customElements.define('slider-entity-row', SliderEntityRow);
