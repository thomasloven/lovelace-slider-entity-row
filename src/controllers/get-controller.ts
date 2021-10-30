import { LightController } from "./light-controller";
import { MediaPlayerController } from "./media-player-controller";
import { ClimateController } from "./climate-controller";
import { CoverController } from "./cover-controller";
import { FanController } from "./fan-controller";
import { InputNumberController } from "./input-number-controller";
import { InputSelectController } from "./input-select-controller";
import { NumberController } from "./number-controller";
import { WaterHeaterController } from "./water-heater-controller";

export function getController(domain: string) {
  return {
    light: LightController,
    media_player: MediaPlayerController,
    climate: ClimateController,
    water_heater: WaterHeaterController,
    cover: CoverController,
    fan: FanController,
    input_number: InputNumberController,
    input_select: InputSelectController,
    number: NumberController,
  }[domain];
}
