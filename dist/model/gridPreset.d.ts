import { DynamicExecution } from "@flexicore/flexicore-client";
import { Preset } from "./preset";
export interface GridPreset extends Preset {
    relatedClassCanonicalName?: string;
    dynamicExecution?: DynamicExecution;
    latMapping?: string;
    lonMapping?: string;
}
