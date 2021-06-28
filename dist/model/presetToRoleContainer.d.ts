import { Role } from "@flexicore/flexicore-client";
import { Preset } from "./preset";
export interface PresetToRoleContainer {
    preset?: Preset;
    Role?: Role;
    priority?: number;
    enabled?: boolean;
}
