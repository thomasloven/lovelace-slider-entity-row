slider-entity-row
=================

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/custom-components/hacs)

Add a slider to rows in lovelace [entities](https://www.home-assistant.io/lovelace/entities/) cards.

For installation instructions [see this guide](https://github.com/thomasloven/hass-config/wiki/Lovelace-Plugins).

Install `slider-entity-row.js` as a `module`.

```yaml
resources:
  - url: /local/slider-entity-row.js
    type: module
```

## Usage
Add this to an entities card:

```yaml
type: entities
entities:
  - light.bed_light
  - type: custom:slider-entity-row
    entity: light.kitchen_lights
```

![slider-entity-row](https://user-images.githubusercontent.com/1299821/59467898-15b16600-8e31-11e9-9924-53b108572d3a.png)

Currenly supported entity domains:

- `light` - set brightness
- `media_player` - set volume
- `climate` - set temperature
- `cover` - set position
- `fan` - set speed (assumes first setting is `off`)
- `input_number` - set value (only if `mode: slider`)
- `input_select` - select option

![domains](https://user-images.githubusercontent.com/1299821/59467899-1813c000-8e31-11e9-8abd-34c887a7db2a.png)

### Options

- `toggle: true` - Show a toggle instead of current state
- `hide_state: true` - Do not display current state
- `hide_when_off: true` - Hide the slider when state is `off`
- `full_row: true` - Hide icon and name and stretch slider to full width
- `min: <value>` - Set minimum value of slider
- `max: <value>` - Set maximum value of slider
- `step: <value>` - Set step size of slider
- `attribute: <value>` - Select which attribute the slider should control
- `brightness_percent: true` - Only for light domain. When `true` (the default) shows brightness as a percent in a range from 0% to 100%. When `false` shows brightness in the range 0 to 255.

```yaml
type: entities
title: Options
entities:
  - type: custom:slider-entity-row
    entity: light.bed_light
    name: Default
  - type: custom:slider-entity-row
    entity: light.bed_light
    name: toggle
    toggle: true
  - type: custom:slider-entity-row
    entity: light.bed_light
    name: hide_state
    hide_state: true
  - type: custom:slider-entity-row
    entity: light.ceiling_lights
    name: hide_when_off
    hide_when_off: true
  - type: custom:slider-entity-row
    entity: light.ceiling_lights
    name: hide_when_off + toggle
    hide_when_off: true
    toggle: true
  - type: section
    label: full_row
  - type: custom:slider-entity-row
    entity: light.bed_light
    name: hide_state
    full_row: true
```

![options](https://user-images.githubusercontent.com/1299821/59467902-19dd8380-8e31-11e9-9173-97c9b6be3179.png)

#### Attributes
Currently, the following attribute settings are supported.

**For `light` domain:**

- `brightness` - default
- `color_temp`
- `hue`
- `saturation`
- `red`
- `green`
- `blue`
- `effect`
- `white_value`

**For `cover` domain:**

- `position` - default
- `tilt`

---
<a href="https://www.buymeacoffee.com/uqD6KHCdJ" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/white_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
