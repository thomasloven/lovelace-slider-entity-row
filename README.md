slider-entity-row
=================

Add a slider to adjust brightness of lights, volume of media players or position of covers in lovelace entity cards

![slider-entity-row](https://user-images.githubusercontent.com/1299821/48869222-b6303200-eddc-11e8-8b8c-7b4a9601df7a.png)

```yaml
  - title: slider-entity-row
    cards:
      - type: entities
        title: Domains
        show_header_toggle: false
        entities:
          - input_number.slider

          - type: section
            label: light
          - type: custom:slider-entity-row
            entity: light.bed_light
          - type: custom:slider-entity-row
            entity: light.ceiling_lights
          - type: custom:slider-entity-row
            entity: light.kitchen_lights

          - type: section
            label: media_player
          - type: custom:slider-entity-row
            entity: media_player.bedroom
          - type: custom:slider-entity-row
            entity: media_player.living_room
          - type: custom:slider-entity-row
            entity: media_player.lounge_room
          - type: custom:slider-entity-row
            entity: media_player.walkman

          - type: section
            label: cover
          - type: custom:slider-entity-row
            entity: cover.hall_window
          - type: custom:slider-entity-row
            entity: cover.garage_door
          - type: custom:slider-entity-row
            entity: cover.living_room_window

      - type: entities
        title: Options
        show_header_toggle: false
        entities:
          - type: section
            label: default
          - type: custom:slider-entity-row
            entity: light.bed_light
          - type: custom:slider-entity-row
            entity: media_player.bedroom
          - type: custom:slider-entity-row
            entity: cover.hall_window

          - type: section
            label: "toggle: true"
          - type: custom:slider-entity-row
            entity: light.bed_light
            toggle: true

          - type: section
            label: "full_row: true"
          - entity: light.bed_light
          - type: custom:slider-entity-row
            entity: light.bed_light
            full_row: true
          - entity: media_player.bedroom
          - type: custom:slider-entity-row
            entity: media_player.bedroom
            full_row: true
          - entity: cover.hall_window
          - type: custom:slider-entity-row
            entity: cover.hall_window
            full_row: true
```

### Extra options
`hide_state` - (default: false) Set to true to hide the percentage display.

`min` - (default: 0) Minimum value of slider
`max` - (default: 100) Maximum value of slider
`step` - (default: 5) Step size of slider
Note that slider values are in percent and will be rescaled e.g. for lights which require a brightness setting between 0 and 255.

