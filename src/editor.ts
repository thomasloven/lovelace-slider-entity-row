import { LitElement, html, css } from "lit";
import { state, property } from "lit/decorators.js";
import { ControllerConfig } from "./controllers/controller";
import { controllers } from "./controllers/get-controller";

class SliderEntityRowEditor extends LitElement {
  @property() hass: any;
  @state() _config?: ControllerConfig;

  setConfig(config) {
    this._config = config;
  }

  _schema(selected_domain?) {
    const domains = Object.keys(controllers);
    console.log(
      selected_domain,
      controllers[selected_domain],
      controllers[selected_domain]?.allowed_attributes
    );
    const attributes = controllers[selected_domain]?.allowed_attributes ?? [];
    return [
      {
        name: "entity",
        required: true,
        selector: { entity: { filter: [{ domain: domains }] } },
      },
      {
        type: "grid",
        name: "",
        schema: [
          { name: "name", selector: { text: {} } },
          {
            name: "icon",
            selector: {
              icon: {},
            },
            context: {
              icon_entity: "entity",
            },
          },
        ],
      },
      {
        type: "grid",
        name: "",
        schema: [
          {
            name: "min",
            selector: { number: { min: -1e32, max: 1e32, mode: "box" } },
          },
          {
            name: "max",
            selector: { number: { min: -1e32, max: 1e32, mode: "box" } },
          },
          {
            name: "step",
            selector: { number: { min: -1e32, max: 1e32, mode: "box" } },
          },
        ],
      },
      {
        type: "grid",
        name: "",
        schema: [
          { name: "toggle", selector: { boolean: {} } },
          { name: "hide_state", selector: { boolean: {} } },
          { name: "hide_when_off", selector: { boolean: {} } },
          { name: "full_row", selector: { boolean: {} } },
          { name: "show_icon", selector: { boolean: {} } },
        ],
      },
      attributes.length
        ? {
            type: "grid",
            name: "",
            schema: [
              {
                name: "attribute",
                selector: { select: { options: attributes } },
              },
              { name: "colorize", selector: { boolean: {} } },
            ],
          }
        : {},
    ];
  }

  render() {
    if (!this.hass || !this._config) {
      return "";
    }

    const schema = this._schema(this._config.entity?.split(".")?.[0]);

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${schema}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  _valueChanged(ev: CustomEvent) {
    this.dispatchEvent(
      new CustomEvent("config-changed", { detail: { config: ev.detail.value } })
    );
  }
}

customElements.define("slider-entity-row-editor", SliderEntityRowEditor);
