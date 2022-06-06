import { Basic } from "@flexicore/flexicore-client";

export interface PresetToPreset extends Basic {
    idForCreate?: string;
    parentPresetId?: string;
    childPresetId?: string;
    parentPath?: string;
    childPath?: string;
    ordinal?: number;
}