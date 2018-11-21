class SliderEntityRow extends Polymer.Element {
  static get template() {
    let slider = Polymer.html`
      <paper-slider
        min="0"
        max="100"
        value="{{value}}"
        step="5"
        pin
        on-change="selectedValue"
        ignore-bar-touch
        on-click="stopPropagation">
      </paper-slider>
      `;
    return Polymer.html`
    <style>
      hui-generic-entity-row {
        margin: var(--ha-themed-slider-margin, initial);
      }
      .flex {
        display: flex;
        align-items: center;
      }
      .second-line paper-slider {
        width: 100%;
      }
    </style>
    <hui-generic-entity-row
      config="[[_config]]"
      hass="[[_hass]]"
      >
      <div class="flex">
        <template is='dom-if' if='{{displayTop}}'>
          ${slider}
        </template>
        <template is='dom-if' if='{{displayToggle}}'>
          <ha-entity-toggle
            state-obj="[[stateObj]]"
            hass="[[_hass]]"
          ></ha-entity-toggle>
        </template>
        <template is='dom-if' if='{{displayStatus}}'>
          <div style="min-width: 40px">
            [[statusString(stateObj)]]
          </div>
        </template>
      </div>
    </hui-generic-entity-row>
    <template is='dom-if' if='{{displayBottom}}'>
      <div class="second-line">
        ${slider}
      </div>
    </template>
    `
  }

  static get properties() {
    return {
      _hass: Object,
      _config: Object,
      hideToggle: { type: Boolean, value: false },
      breakSlider: { type: Boolean, value: false },
      hideWhenOff: { type: Boolean, value: false },
      showValue: { type: Boolean, value: false },
      stateObj: { type: Object, value: null },
      value: Number,
    };
  }

  setConfig(config)
  {
    const CONTROLLERS = {
      light: {
        set: (stateObj, value) => {
          value = Math.ceil(value/100.0*255);
          if (value)
            this._hass.callService('light', 'turn_on', { entity_id: stateObj.entity_id, brightness: value });
          else
            this._hass.callService('light', 'turn_off', { entity_id: stateObj.entity_id });
        },
        get: (stateObj) => {
          return (stateObj.state === 'on')?Math.ceil(stateObj.attributes.brightness*100.0/255):0;
        },
        supported: (stateObj) => {
          if('brightness' in stateObj.attributes) return true;
          if(('supported_features' in stateObj.attributes) &&
            (stateObj.attributes.supported_features & 1)) return true;
          return false;
        },
        string: (stateObj, l18n) => {
          if(stateObj.state === 'off') return l18n['state.default.off'];
          return `${this.controller.get(stateObj)} %`;
        },
      },

      media_player: {
        set: (stateObj, value) => {
          value = value/100.0;
          this._hass.callService('media_player', 'volume_set', { entity_id: stateObj.entity_id, volume_level: value });
        },
        get: (stateObj) => {
          return (stateObj.attributes.is_volume_muted)?0:Math.ceil(stateObj.attributes.volume_level*100.0);
        },
        supported: (stateObj) => {
          return true;
        },
        string: (stateObj, l18n) => {
          if (stateObj.attributes.is_volume_muted) return '-';
          return `${this.controller.get(stateObj)} %`;
        },
      },

      cover: {
        set: (stateObj, value) => {
          if (value)
            this._hass.callService('cover', 'set_cover_position', { entity_id: stateObj.entity_id, position: value });
          else
            this._hass.callService('cover', 'close_cover', { entity_id: stateObj.entity_id });
        },
        get: (stateObj) => {
          return (stateObj.state === 'open')?stateObj.attributes.current_position:0;
        },
        supported: (stateObj) => {
          if('current_position' in stateObj.attributes) return true;
          if(('supported_features' in stateObj.attributes) &&
            (stateObj.attributes.supported_features & 4)) return true;
          return false;
        },
        string: (stateObj, l18n) => {
          if (!this.controller.supported(stateObj)) return '';
          if (stateObj.state === 'closed') return l18n['state.cover.closed'];
          return `${this.controller.get(stateObj)} %`;
        },
      },
    };


    this._config = config;
    const domain = config.entity.split('.')[0];
    this.controller = CONTROLLERS[domain];
    if(!this.controller) throw new Error('Unsupported entity domain: ' + domain);

    this.hideToggle = config.hide_control || config.hide_toggle || false;
    this.breakSlider = config.break_slider || false;
    this.hideWhenOff = config.hide_when_off || false;
    this.showValue = config.show_value || false;
  }

  statusString(stateObj) {
    let l18n = this._hass.resources[this._hass.language];
    if(!stateObj) return l18n['state.default.unavailable'];
    return this.controller.string(stateObj, l18n);
  }

  updateSliders()
  {
    this.displayTop = false;
    this.displayBottom = false;
    this.displayToggle = true;
    this.displayStatus = false;

    if(this.hideToggle) this.displayToggle = false;

    if(this.showValue) {
      this.displayToggle = false;
      this.displayStatus = true;
    }

    if(!(this.stateObj.state === 'on' || this.stateObj.state === 'off')) {
      this.displayToggle = false;
      this.displayStatus = true;
    }

    if(this.stateObj.state === 'on' || !this.hideWhenOff) {
      this.displayBottom = this.breakSlider;
      this.displayTop = !this.breakSlider;
    }

    if(!this.controller.supported(this.stateObj)) {
      this.displayTop = this.displayBottom = false;
    }

  }

  set hass(hass) {
    this._hass = hass;
    this.stateObj = this._config.entity in hass.states ? hass.states[this._config.entity] : null;
    if(this.stateObj) {
      this.value = this.controller.get(this.stateObj);
      this.updateSliders();
    }
  }

  selectedValue(ev) {
    this.controller.set(this.stateObj, parseInt(this.value, 10));
  }

  stopPropagation(ev) {
    ev.stopPropagation();
  }
}

customElements.define('slider-entity-row', SliderEntityRow);
