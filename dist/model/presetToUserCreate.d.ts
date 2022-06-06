import { PresetToEntityCreate } from "./presetToEntityCreate";
export interface PresetToUserCreate extends PresetToEntityCreate {
    userId?: string;
}
