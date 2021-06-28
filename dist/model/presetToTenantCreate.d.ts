import { PresetToEntityCreate } from "./presetToEntityCreate";
export interface PresetToTenantCreate extends PresetToEntityCreate {
    preferredTenantId?: string;
}
