import { BasicCreate } from "@flexicore/flexicore-client/dist/model/basicCreate";

export interface PresetToPresetCreate extends BasicCreate {
    idForCreate?: string;
    parentPresetId?: string;
    childPresetId?: string;
    parentPath?: string;
    childPath?: string;
}