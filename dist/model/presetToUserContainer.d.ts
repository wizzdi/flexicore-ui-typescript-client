import { UserClass } from "@flexicore/flexicore-client";
import { Preset } from "./preset";
export interface PresetToUserContainer {
    preset?: Preset;
    user?: UserClass;
    priority?: number;
    enabled?: boolean;
}
