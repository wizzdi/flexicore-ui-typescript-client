import { DynamicExecution } from "@flexicore/flexicore-client";
import { Basic } from "@flexicore/flexicore-client";
export interface GridPreset extends Basic {
    relatedClassCanonicalName?: string;
    dynamicExecution?: DynamicExecution;
    latMapping?: string;
    lonMapping?: string;
}
