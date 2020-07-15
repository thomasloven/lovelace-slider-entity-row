import {LitElement, html, css} from "card-tools/src/lit-element.js";

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
      hide_state: {},
    };
  }

  setConfig(config) {
    this._config = config;
    if(!config.entity)
      throw new Error(`No entity specified.`);
    const domain = config.entity.split('.')[0];
    const ctrlClass = controllers[domain];
    if(!ctrlClass)
      throw new Error(`Unsupported entity type: ${domain}`);
    this.ctrl = new ctrlClass(config);
  }

  async resized() {
    await this.updateComplete;
    if(!this.shadowRoot) return;
    this.hide_state = this._config.full_row
      ? this.parentElement.clientWidth <= 180
      : this.parentElement.clientWidth <= 335;
    return;
  }

  async firstUpdated() {
    await this.resized();
  }

  render() {
    const c = this.ctrl;
    c.hass = this.hass;
    if (!c.stateObj)
      return html`
      <hui-warning>
        ${this.hass.localize("ui.panel.lovelace.warning.entity_not_found",
          "entity",
          this._config.entity
        )}
      </hui-warning>
      `
    const dir = this.hass.translationMetadata.translations[this.hass.language || "en"].isRTL ? "rtl" : "ltr";
    const slider = html`
      <ha-slider
        .min=${c.min}
        .max=${c.max}
        .step=${c.step}
        .value=${c.value}
        .dir=${dir}
        pin
        @change=${(ev) => c.value = this.shadowRoot.querySelector("ha-slider").value}
        class=${this._config.full_row ? "full" : ""}
        ignore-bar-touch
      ></ha-slider>
    `;
    const toggle = html`
      <ha-entity-toggle
        .stateObj=${this.hass.states[this._config.entity]}
        .hass=${this.hass}
        .class="state"
      ></ha-entity-toggle>
    `;

    const content = html`
    <div class="wrapper" @click=${(ev) => ev.stopPropagation()}>
      ${(c.stateObj.state === "unavailable")
        ? html`
            <span class="state">
            Unavailable
            </span>
        `
        : html`
            ${((this._config.hide_when_off && c.isOff)
              || !c.hasSlider)
              ? ""
              : slider }

            ${this._config.toggle
              ? c.hasToggle
                ? toggle
                : ''
              : (this._config.hide_state || this.hide_state) && (this._config.hide_state !== false)
                ? ''
                : html`
                    <span class="state">
                      ${c.string}
                    </span>
                  `
            }
          `
      }
    </div>
    `;

    if (this._config.full_row)
      if(this._config.hide_when_off && c.isOff)
        return html``;
      else
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
        justify-content: flex-end;
        flex-grow: 2;
        height: 40px;
      }
      .state {
        min-width: 45px;
        text-align: end;
        margin-left: 5px;
      }
      ha-entity-toggle {
        min-width: auto;
        margin-left: 8px;
      }
      ha-slider {
        width: 100%;
        min-width: 100px;
      }
      ha-slider:not(.full) {
        max-width: 200px;
      }
    `;
  }
}

if(!customElements.get("slider-entity-row")) {
  customElements.define('slider-entity-row', SliderEntityRow);
  const pjson = require('../package.json');
  console.info(`%cSLIDER-ENTITY-ROW ${pjson.version} IS INSTALLED`,
  "color: green; font-weight: bold",
  "");
}
