import { LitElement, html, css, property } from "lit-element";

import { getController } from "./controllers/get-controller";
import { Controller, ControllerConfig } from "./controllers/controller";
import pjson from "../package.json";

class SliderEntityRow extends LitElement {
  _config: ControllerConfig;
  ctrl: Controller;

  @property() hass: any;
  @property() hide_state: boolean;

  setConfig(config: ControllerConfig) {
    this._config = config;
    if (!config.entity) throw new Error(`No entity specified.`);
    const domain = config.entity.split(".")[0];
    const ctrlClass = getController(domain);
    if (!ctrlClass) throw new Error(`Unsupported entity type: ${domain}`);
    this.ctrl = new ctrlClass(config);
  }

  async resized() {
    await this.updateComplete;
    if (!this.shadowRoot) return;
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

    const formatValue = () =>
      this._config.inverted
        ? (() => {
            let matches = /[0-9]{2}/.exec(c.string) || [];
            if (!matches.length) {
              return c.string;
            }
            return c.string.replace(matches[0], (100 - c.value).toString());
          })()
        : c.string;

    const content = html`
      <div class="wrapper" @click=${(ev: Event) => ev.stopPropagation()}>
        ${showSlider
          ? html`
              <ha-slider
                .min=${c.min}
                .max=${c.max}
                .step=${c.step}
                .value=${this._config?.inverted ? 100 - c.value : c.value}
                .dir=${dir}
                pin
                @change=${(ev: Event) => {
                  const target = (
                    this.shadowRoot.querySelector("ha-slider") as any
                  ).value;
                  c.value = this._config.inverted ? 100 - target : target;
                }}
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
                : formatValue()}
            </span>`
          : ""}
      </div>
    `;

    if (this._config.full_row)
      if (this._config.hide_when_off && c.isOff) return html``;
      else return content;

    return html`
      <hui-generic-entity-row .hass=${this.hass} .config=${this._config}>
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
        flex: 100;
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
