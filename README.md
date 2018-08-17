slider-entity-row
=================


Proof of concept

No support given - if you don't know how to get this to work, that is probably a good thing for now.


---

```yaml
resources:
  - url: /local/slider-entity-row.js
    type: js


views:
  title: My view
  cards:
    - type: entities
      entities:
      - entity: light.my_lamp
        name: A dimmable lamp
        type: custom:slider-entity-row
```
![slider-entity-row](https://user-images.githubusercontent.com/1299821/44172580-e7161200-a0dd-11e8-8042-19199ad5d5ac.png)


### Other options

`hide_control: true` - Remove toggle

`break_slider: true` - Put slider on separate row

`hide_when_off: true` - Hide the slider when the light is off
