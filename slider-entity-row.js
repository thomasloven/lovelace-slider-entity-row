class SliderEntityRowSlider extends Polymer.Element {

  static get template() {
    return Polymer.html`
    <style>
      :host {
        margin: var(--ha-themed-slider-margin, initial);
      }
    paper-slider {
      margin: 4px 0;
      max-width: 100%;
      min-width: 100%;
      width: var(--ha-paper-slider-width, 200px);
    }
    </style>
    <paper-slider min=0 max=255 value="{{value}}" on-change="valueChanged"></paper-slider>
    `;
  }

  ready() {
    super.ready();
    this.addEventListener('click', ev => ev.stopPropagation());
  }

  valueChanged(ev) {
    const value = parseInt(this.value, 10);
    const param = {entity_id: this.stateObj.entity_id };
    if(Number.isNaN(value)) return;
    if(value === 0) {
      this.hass.callService('light', 'turn_off', param);
    } else {
      param['brightness'] = value;
      this.hass.callService('light', 'turn_on', param);
    }
  }

}

customElements.define('slider-entity-row-slider', SliderEntityRowSlider);

class SliderEntityRow extends HTMLElement {
  static get template() {
    console.log("Template");
  }

  constructor() {
    super();
    this.attachShadow({mode:'open'});
    this.base = document.createElement('hui-generic-entity-row');

    this.slider = document.createElement('slider-entity-row-slider');
    this.toggle = document.createElement('ha-entity-toggle');

    this.base.appendChild(this.slider);
    this.base.appendChild(this.toggle);
    this.shadowRoot.appendChild(this.base);
  }

  setConfig(config)
  {
    this.base.config = config;
    this.entity = config.entity;
    console.log(this.base);
  }

  set hass(hass) {
    this.base.hass = hass;
    this.toggle.hass = hass;
    this.slider.hass = hass;
    let stateObj = hass.states[this.entity];
    this.toggle.stateObj = stateObj;
    this.slider.stateObj = stateObj;
    this.slider.value = this.isOn(stateObj) ? stateObj.attributes['brightness']: 0;
  }

  isOn(stateObj) {
    return stateObj && stateObj.state === 'on';
  }

}

customElements.define('slider-entity-row', SliderEntityRow);
