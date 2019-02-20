class SliderEntityRow extends Polymer.Element {

  static get template() {
    const style = Polymer.html`
      <style>
        .flex {
          display: flex;
          align-items: center;
          }
        .state {
          min-width: 45px;
          text-align: center;
        }
        .toggle {
          margin-left: 8px;
        }
      </style>
      <template is="dom-if" if="{{!displayRow}}">
        <style>
        ha-slider {
          width: 100%;
        }
        </style>
      </template>
    `;

    const input = Polymer.html`
      <div>
          <div class="flex">
        <template is="dom-if" if="{{displaySlider}}">
            <ha-slider
              min="{{min}}"
              max="{{max}}"
              value="{{value}}"
              step="{{step}}"
              pin
              on-change="selectedValue"
              on-click="stopPropagation"
              ignore-bar-touch
            ></ha-slider>
            <template is="dom-if" if="{{displayValue}}">
              <span class="state" on-click="stopPropagation">
                [[statusString(stateObj)]]
              </span>
            </template>
        </template>
            <template is="dom-if" if="{{displayToggle}}">
              <span class="toggle" on-click="stopPropagation">
                <ha-entity-toggle
                  state-obj="[[stateObj]]"
                  hass="[[_hass]]"
                ></ha-entity-toggle>
                </span>
            </template>
          </div>
      </div>
    `;

    return Polymer.html`
      ${style}

      <template is="dom-if" if="{{displayRow}}">
        <hui-generic-entity-row
          hass="[[_hass]]"
          config="[[_config]]"
        >
          ${input}
        </hui-generic-entity-row>
      </template>
      <template is="dom-if" if="{{!displayRow}}">
        ${input}
      </template>
    `;
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
        supported: {
          slider: (stateObj) => {
            if(stateObj.state === 'off' && this._config.hide_when_off) return false;
            if('brightness' in stateObj.attributes) return true;
            if(('supported_features' in stateObj.attributes) &&
              (stateObj.attributes.supported_features & 1)) return true;
            return false;
          },
          toggle: () => true,
        },
        string: (stateObj, l18n) => {
          if(stateObj.state === 'off') return l18n['state.default.off'];
          return `${this.controller.get(stateObj)} %`;
        },
        config: () => ({
          min: 0,
          max: 100,
          step: 5,
        }),
      },

      media_player: {
        set: (stateObj, value) => {
          value = value/100.0;
          this._hass.callService('media_player', 'volume_set', { entity_id: stateObj.entity_id, volume_level: value });
        },
        get: (stateObj) => {
          return (stateObj.attributes.is_volume_muted)?0:Math.ceil(stateObj.attributes.volume_level*100.0);
        },
        supported: {
          slider: () => true,
          toggle: () => false,
        },
        string: (stateObj, l18n) => {
          if (stateObj.attributes.is_volume_muted) return '-';
          return `${this.controller.get(stateObj)} %`;
        },
        config: () => ({
          min: 0,
          max: 100,
          step: 5,
        }),
      },

      cover: {
        set: (stateObj, value) => {
          if (value)
            this._hass.callService('cover', 'set_cover_position', { entity_id: stateObj.entity_id, position: value });
          else
            this._hass.callService('cover', 'close_cover', { entity_id: stateObj.entity_id });
        },
        get: (stateObj) => {
          return (stateObj.state === 'open')?Math.ceil(stateObj.attributes.current_position):0;
        },
        supported: {
          slider: (stateObj) => {
            if('current_position' in stateObj.attributes) return true;
            if(('supported_features' in stateObj.attributes) &&
              (stateObj.attributes.supported_features & 4)) return true;
            return false;
          },
          toggle: () => false,
        },
        string: (stateObj, l18n) => {
          if (!this.controller.supported(stateObj)) return '';
          if (stateObj.state === 'closed') return l18n['state.cover.closed'];
          return `${this.controller.get(stateObj)} %`;
        },
        config: () => ({
          min: 0,
          max: 100,
          step: 5,
        }),
      },

      fan: {
        set: (stateObj, value) => {
          if (stateObj.attributes.speed_list.some(isNaN))
            value = Math.round(value/100.0*stateObj.attributes.speed_list.length)
          --value;
          if (value in stateObj.attributes.speed_list)
            this._hass.callService('fan', 'turn_on', { entity_id: stateObj.entity_id, speed: stateObj.attributes.speed_list[value] });
          else
            this._hass.callService('fan', 'turn_off', { entity_id: stateObj.entity_id });
        },
        get: (stateObj) => {
          if (stateObj.state !== 'on') return 0;
          if (stateObj.attributes.speed_list.some(isNaN))
            return Math.round((stateObj.attributes.speed_list.indexOf(stateObj.attributes.speed)+1)*100.0/stateObj.attributes.speed_list.length);
          else
            return stateObj.attributes.speed;
        },
        supported: {
          slider: (stateObj) => {
            if(stateObj.state === 'off' && this._config.hide_when_off) return false;
            if('speed' in stateObj.attributes) return true;
            return false;
          },
          toggle: () => true,
        },
        string: (stateObj, l18n) => {
          if(stateObj.state === 'off') return l18n['state.default.off'];
          return stateObj.attributes.speed;
        },
        config: (stateObj) => {
          if (!stateObj.attributes.speed_list.some(isNaN))
            return {
              min: Number(Math.min(...stateObj.attributes.speed_list)-1),
              max: Number(Math.max(...stateObj.attributes.speed_list)),
              step: 1,
            }
          else
            return {
              min: 0,
              max: 100,
              step: Math.round(100/(stateObj.attributes.speed_list.length)),
            }
        },
      },

      input_select: {
        set: (stateObj, value) => {
          if (stateObj.attributes.options.some(isNaN))
            value = Math.round(value/100.0*(stateObj.attributes.options.length-1))
          if (value in stateObj.attributes.options)
            this._hass.callService('input_select', 'select_option', { entity_id: stateObj.entity_id, option: stateObj.attributes.options[value] });
        },
        get: (stateObj) => {
          if (stateObj.attributes.options.some(isNaN))
            return Math.round(stateObj.attributes.options.indexOf(stateObj.state)*100.0/(stateObj.attributes.options.length-1));
          else
            return stateObj.state
        },
        supported: {
          slider: (stateObj) => {
            if('options' in stateObj.attributes && stateObj.attributes.options.length > 1) return true;
            return false;
          },
          toggle: () => false,
        },
        string: (stateObj, l18n) => {
          return stateObj.state;
        },
        config: (stateObj) => {
          if (!stateObj.attributes.options.some(isNaN))
            return {
              min: Number(Math.min(...stateObj.attributes.options)),
              max: Number(Math.max(...stateObj.attributes.options)),
              step: 1,
            }
          else
            return {
              min: 0,
              max: 100,
              step: Math.round(100/(stateObj.attributes.options.length-1)),
            }
        },
      },
    };


    this._config = config;
    this.stateObj = null;
    const domain = config.entity.split('.')[0];
    this.controller = CONTROLLERS[domain];
    if(!this.controller) throw new Error('Unsupported entity domain: ' + domain);

    this.displayRow = !config.full_row;
    this.displayToggle = config.toggle && this.controller.supported.toggle();
    this.displayValue = !this.displayToggle;
    if(config.hide_state) this.displayValue = false;
    this.displaySlider = false;

    this.min = config.min || 0;
    this.max = config.max || 100;
    this.step = config.step || 5;

    if(this._hass && this._config) {
      this.stateObj = this._config.entity in this._hass.states ? this._hass.states[this._config.entity] : null;
      if(this.stateObj) {
        let controllerConfig = this.controller.config(this.stateObj);
        this.min = this._config.min || controllerConfig.min;
        this.max = this._config.max || controllerConfig.max;
        this.step = this._config.step || controllerConfig.step;
        this.value = this.controller.get(this.stateObj);
        this.displaySlider = this.controller.supported.slider(this.stateObj);
      }
    }
  }

  statusString(stateObj) {
    let l18n = this._hass.resources[this._hass.language];
    if(!stateObj) return l18n['state.default.unavailable'];
    return this.controller.string(stateObj, l18n);
  }

  set hass(hass) {
    this._hass = hass;

    if(hass && this._config) {
      this.stateObj = this._config.entity in hass.states ? hass.states[this._config.entity] : null;
      if(this.stateObj) {
        let controllerConfig = this.controller.config(this.stateObj);
        this.min = this._config.min || controllerConfig.min;
        this.max = this._config.max || controllerConfig.max;
        this.step = this._config.step || controllerConfig.step;
        this.value = this.controller.get(this.stateObj);
        this.displaySlider = this.controller.supported.slider(this.stateObj);
      }
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
