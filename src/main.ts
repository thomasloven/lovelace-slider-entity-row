import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";
import { query } from "lit/decorators/query.js";

import { getController } from "./controllers/get-controller";
import { Controller, ControllerConfig } from "./controllers/controller";
import pjson from "../package.json";

class SliderEntityRow extends LitElement {
  _config: ControllerConfig;
  ctrl: Controller;

  @property() hass: any;
  @property() hide_state: boolean;
  @query("ha-slider") _slider?;

  setConfig(config: ControllerConfig) {
    this._config = config;
    if (!config.entity) throw new Error(`No entity specified.`);
    const domain = config.entity.split(".")[0];
    const ctrlClass = getController(domain);
    if (!ctrlClass) throw new Error(`Unsupported entity type: ${domain}`);
    this.ctrl = new ctrlClass(config, this);
  }

  async resized() {
    await this.updateComplete;
    if (!this.shadowRoot || !this.parentElement) return;
    this.hide_state = this._config.full_row
      ? this.parentElement?.clientWidth <= 180
      : this.parentElement?.clientWidth <= 335;
    return;
  }

  async firstUpdated() {
    await this.resized();
  }

  async updated() {
    if (!this._slider) return;
    await this._slider.updateComplete;
    if (this._slider.shadowRoot.querySelector("style.slider-entity-row"))
      return;
    const styleEl = document.createElement("style");
    styleEl.classList.add("slider-entity-row");
    styleEl.innerHTML = `.container .track::before{background: var(--_inactive-track-color);}
    .container .track::after{background: var(--_active-track-color);}`;
    this._slider.shadowRoot?.appendChild(styleEl);
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.resized();
  }

  render() {
    const c = this.ctrl;
    c.hass = this.hass;
    if (!c.stateObj)
      return html`
        <hui-warning>
          ${this.hass.localize(
            "ui.panel.lovelace.warning.entity_not_found",
            "entity",
            this._config.entity
          )}
        </hui-warning>
      `;

    const dir =
      c.dir ??
      this.hass.translationMetadata.translations[this.hass.language || "en"]
        .isRTL
        ? "rtl"
        : "ltr";

    const showSlider =
      c.stateObj.state !== "unavailable" &&
      c.hasSlider &&
      !(c.isOff && this._config.hide_when_off);
    const showToggle = this._config.toggle && c.hasToggle;
    const showValue = showToggle
      ? false
      : this._config.hide_state === false
      ? true
      : this._config.hide_state || this.hide_state
      ? false
      : c.isOff && this._config.hide_when_off
      ? false
      : true;

    const content = html`
      <div class="wrapper" @click=${(ev) => ev.stopPropagation()}>
        ${showSlider
          ? html`
              ${this._config.colorize && c.background
                ? html`
                    <style>
                      ha-slider {
                        --paper-slider-container-color: ${c.background};
                        --_inactive-track-color: ${c.background};
                        --_active-track-color: ${c.background};
                        --paper-progress-active-color: transparent;
                      }
                    </style>
                  `
                : ""}
              <ha-slider
                .min=${c.min}
                .max=${c.max}
                .step=${c.step}
                .value=${c.value}
                .dir=${dir}
                labeled
                pin
                @change=${(ev) =>
                  (c.value = (
                    this.shadowRoot.querySelector("ha-slider") as any
                  ).value)}
                class=${this._config.full_row || this._config.grow
                  ? "full"
                  : ""}
                ignore-bar-touch
              ></ha-slider>
            `
          : ""}
        ${showToggle ? c.renderToggle(this.hass) : ""}
        ${showValue
          ? html`<span class="state">
              ${c.stateObj.state === "unavailable"
                ? this.hass.localize("state.default.unavailable")
                : c.string}
            </span>`
          : ""}
      </div>
    `;

    if (this._config.full_row)
      if (this._config.hide_when_off && c.isOff) return html``;
      else if (this._config.show_icon === true) {
        const conf = this._config as any;
        return html`
          <div class="wrapper">
            <state-badge
              .hass=${this.hass}
              .stateObj=${c.stateObj}
              .overrideIcon=${conf.icon}
              .overrideImage=${conf.image}
              .stateColor=${conf.state_color}
            ></state-badge>
            ${content}
          </div>
        `;
      } else return content;

    return html`
      <hui-generic-entity-row
        .hass=${this.hass}
        .config=${this._config}
        .catchInteraction=${false}
      >
        ${content}
      </hui-generic-entity-row>
    `;
  }

  static get styles() {
    return css`
      .wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex: 7;
        height: 40px;
      }
      .state {
        min-width: 45px;
        text-align: end;
      }
      ha-entity-toggle {
        min-width: auto;
        margin-left: 8px;
      }
      ha-slider {
        width: 100%;
        min-width: 100px;
        --paper-slider-secondary-color: transparent;
      }
      ha-slider:not(.full) {
        max-width: 200px;
      }
    `;
  }
}

if (!customElements.get("slider-entity-row")) {
  customElements.define("slider-entity-row", SliderEntityRow);
  console.info(
    `%cSLIDER-ENTITY-ROW ${pjson.version} IS INSTALLED`,
    "color: green; font-weight: bold",
    ""
  );
}
