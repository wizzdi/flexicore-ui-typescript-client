import { BasicCreate } from "@flexicore/flexicore-client";

export interface PresetToPresetCreate extends BasicCreate {
    idForCreate?: string;
    parentPresetId?: string;
    childPresetId?: string;
    parentPath?: string;
    childPath?: string;
    ordinal?: number;
}