import { Basic } from "@flexicore/flexicore-client/dist/model/basic";

export interface PresetToPreset extends Basic {
    idForCreate?: string;
    parentPresetId?: string;
    childPresetId?: string;
    parentPath?: string;
    childPath?: string;
}